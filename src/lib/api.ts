import { WpPage, WpPost } from '@/types/wordpress'; // Add WpPost to import

const API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

if (!API_URL) {
  throw new Error("Missing NEXT_PUBLIC_WP_API_URL environment variable");
}

/**
 * Fetches a single page from the dummy WordPress REST API by slug.
 * Includes embedded data like featured media.
 * @param slug The slug of the page to fetch.
 * @returns The page data or null if not found.
 */
export async function getPageBySlug(slug: string): Promise<WpPage | null> {
  try {
    // Fetch pages with the specified slug, request embedded data
    const res = await fetch(`${API_URL}pages?slug=${slug}&_embed`, {
      // Optional: Add revalidation options if needed later
      // next: { revalidate: 60 } // Revalidate every 60 seconds
    });

    if (!res.ok) {
      console.error(`Failed to fetch page with slug ${slug}: ${res.status} ${res.statusText}`);
      // If the API returns a 404 or similar, it might return an empty array or an error object.
      // We'll treat non-ok responses as "not found" for simplicity here.
      return null;
    }

    const pages: WpPage[] = await res.json();

    // The API returns an array, even when querying by slug.
    // Return the first result if it exists, otherwise null.
    if (pages && pages.length > 0) {
      return pages[0];
    } else {
      return null; // Page not found
    }
  } catch (error) {
    console.error(`Error fetching page by slug ${slug}:`, error);
    return null; // Return null on any fetch error
  }
}

/**
 * Fetches a list of recent posts from the dummy WordPress REST API.
 * Includes embedded data like author and featured media.
 * @param count Number of posts to fetch (default: 10).
 * @returns An array of post data.
 */
export async function getRecentPosts(count: number = 10): Promise<WpPost[]> {
  try {
    // Fetch posts, order by date descending, limit by count, request embedded data
    const res = await fetch(`${API_URL}posts?per_page=${count}&orderby=date&order=desc&_embed`, {
      // Optional: Add revalidation options if needed later
      // next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error(`Failed to fetch recent posts: ${res.status} ${res.statusText}`);
      return []; // Return empty array on failure
    }

    const posts: WpPost[] = await res.json();
    return posts;
  } catch (error) {
    console.error(`Error fetching recent posts:`, error);
    return []; // Return empty array on any fetch error
  }
}

/**
 * Fetches a single post from the dummy WordPress REST API by slug.
 * Includes embedded data like author and featured media.
 * @param slug The slug of the post to fetch.
 * @returns The post data or null if not found.
 */
export async function getPostBySlug(slug: string): Promise<WpPost | null> {
  try {
    // Fetch posts with the specified slug, request embedded data
    const res = await fetch(`${API_URL}posts?slug=${slug}&_embed`, {
      // next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error(`Failed to fetch post with slug ${slug}: ${res.status} ${res.statusText}`);
      return null;
    }

    const posts: WpPost[] = await res.json();

    // Return the first result if it exists
    if (posts && posts.length > 0) {
      return posts[0];
    } else {
      return null; // Post not found
    }
  } catch (error) {
    console.error(`Error fetching post by slug ${slug}:`, error);
    return null;
  }
}
