import { getPostBySlug } from '@/lib/api';
import { WpPost } from '@/types/wordpress';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image'; // Import Image for featured media
import Link from 'next/link'; // Import Link for author link
import Breadcrumbs from '@/components/ui/Breadcrumbs'; // Import Breadcrumbs

type Props = {
  params: { slug: string };
};

// Function to generate metadata dynamically based on the fetched post
export async function generateMetadata(
  { params }: Props,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Berita Tidak Ditemukan',
    };
  }

  const cleanTitle = post.title.rendered.replace(/<[^>]*>?/gm, '');
  const cleanExcerpt = post.excerpt.rendered.replace(/<[^>]*>?/gm, '');

  return {
    title: `${cleanTitle} | RS Airan Raya (Dev)`,
    description: cleanExcerpt, // Use excerpt for description
  };
}

// The main post page component
export default async function PostPage({ params }: Props) {
  const post: WpPost | null = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Extract potential embedded data
  const author = post._embedded?.author?.[0];
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  // Note: Categories/Tags might need further processing if needed

  // Define breadcrumb items
  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Berita', href: '/posts' },
    { label: post.title.rendered.replace(/<[^>]*>?/gm, '') }, // Current post title (no link)
  ];

  return (
    <div> {/* Wrap content in a div to place breadcrumbs above article */}
      <Breadcrumbs items={breadcrumbItems} />
      <article>
        {/* Featured Image */}
        {featuredMedia && (
          <div className="mb-6">
            <Image
              src={featuredMedia.source_url}
              alt={featuredMedia.alt_text || post.title.rendered}
              width={featuredMedia.media_details.width}
              height={featuredMedia.media_details.height}
              className="w-full h-auto object-cover rounded"
              priority // Prioritize loading if it's above the fold
            />
          </div>
        )}

        {/* Post Title */}
        <h1
          className="text-4xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* Post Meta (Date and Author) */}
        <div className="text-sm text-gray-500 mb-6">
          <span>
            Dipublikasikan pada{' '}
            {new Date(post.date).toLocaleDateString('id-ID', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </span>
          {author && (
            <span>
              {' '}oleh{' '}
              {/* Link to author archive if needed later, using dummy link for now */}
              <Link href={author.url || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                {author.name}
              </Link>
            </span>
          )}
        </div>

        {/* Post Content */}
        <div
          className="prose lg:prose-xl max-w-none" // Basic styling with Tailwind Typography plugin
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </div>
  );
}

// Optional: Function to generate static paths if using SSG/ISR later
// export async function generateStaticParams() {
//   // Fetch all post slugs from the API here if needed for SSG
//   // const posts = await getAllPosts(); // Implement this function in api.ts
//   // return posts.map((post) => ({
//   //   slug: post.slug,
//   // }));
//   return [];
// }

// Optional: Revalidate data periodically if needed
// export const revalidate = 60;
