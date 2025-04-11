import { getRecentPosts } from '@/lib/api';
import { WpPost } from '@/types/wordpress';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Hospital, ArrowRight } from 'lucide-react'; // Import icons for cards

export const metadata: Metadata = {
  title: 'Berita Terbaru | RS Airan Raya (Dev)',
  description: 'Daftar berita dan artikel terbaru dari RS Airan Raya (menggunakan data dummy).',
};

export default async function PostsPage() {
  const posts: WpPost[] = await getRecentPosts(10); // Fetch 10 recent posts

  return (
    // Removed py padding, relies on layout.tsx main padding
    <div className="container mx-auto px-4">
      <h1 className="mb-8 md:mb-12 text-center"> {/* Base style from globals.css, kept text-center & mb */}
        Berita & Informasi Kesehatan
      </h1>

      {posts.length === 0 ? (
        <p className="text-center text-gray-600">Belum ada berita terbaru.</p>
      ) : (
        // Use a responsive grid layout
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            // Re-use card structure from homepage
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 group flex flex-col hover:shadow-xl transition-shadow duration-300">
              <Link href={`/posts/${post.slug}`} className="block">
                {/* Placeholder Image */}
                <div className="bg-gray-200 h-48 w-full flex items-center justify-center text-gray-400 group-hover:opacity-90 transition-opacity">
                  <Hospital size={48} />
                </div>
              </Link>
              <div className="p-5 flex flex-col flex-grow">
                <Link href={`/posts/${post.slug}`} className="hover:text-green-700 block mb-auto">
                  <h2 // Changed from h3 to h2 for semantic list page
                    className="text-lg font-semibold line-clamp-2 mb-2" // Adjusted styling slightly
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  {post.excerpt?.rendered && (
                    <div
                      className="text-gray-600 text-sm mt-1 mb-4 line-clamp-3" // Adjusted styling slightly
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                  )}
                </Link>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <Link href={`/posts/${post.slug}`} className="text-green-700 hover:underline font-medium inline-flex items-center gap-1">
                    Selengkapnya <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Optional: Add Pagination component here later if needed */}
    </div>
  );
}

// Optional: Revalidate data periodically if needed
// export const revalidate = 60; // Revalidate every 60 seconds
