import { getPageBySlug } from '@/lib/api';
import { WpPage } from '@/types/wordpress';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs'; // Import Breadcrumbs

type Props = {
  params: { slug: string };
};

// Function to generate metadata dynamically based on the fetched page
export async function generateMetadata(
  { params }: Props,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _parent: ResolvingMetadata // Prefix unused parameter with underscore and add ESLint directive
): Promise<Metadata> {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    // No specific metadata if page not found (notFound() will handle the page display)
    return {
      title: 'Halaman Tidak Ditemukan',
    };
  }

  // Remove HTML tags from title for metadata
  const cleanTitle = page.title.rendered.replace(/<[^>]*>?/gm, '');

  return {
    title: `${cleanTitle} | RS Airan Raya (Dev)`,
    // description: page.excerpt.rendered.replace(/<[^>]*>?/gm, ''), // Optional: use excerpt for description
  };
}

// The main page component
export default async function Page({ params }: Props) {
  const page: WpPage | null = await getPageBySlug(params.slug);

  // If the page data is not found, trigger a 404 page
  if (!page) {
    notFound();
  }

  // Define breadcrumb items
  const cleanTitle = page.title.rendered.replace(/<[^>]*>?/gm, '');
  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: cleanTitle }, // Current page title (no link)
  ];

  return (
    <div> {/* Wrap content */}
      <Breadcrumbs items={breadcrumbItems} />
      <article>
        {/* Render the page title */}
        <h1
          className="text-3xl font-bold mb-6"
          dangerouslySetInnerHTML={{ __html: page.title.rendered }}
        />

        {/* Render the page content */}
        {/* WARNING: dangerouslySetInnerHTML can be risky if the source HTML is not trusted.
           We trust the dummy API content for now, but sanitize/validate in a real application if needed. */}
        <div
          className="prose lg:prose-xl max-w-none" // Basic styling with Tailwind Typography plugin
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        />
      </article>
    </div>
  );
}

// Optional: Function to generate static paths if using SSG/ISR later
// export async function generateStaticParams() {
//   // Fetch all page slugs from the API here if needed for SSG
//   // const pages = await getAllPages(); // Implement this function in api.ts
//   // return pages.map((page) => ({
//   //   slug: page.slug,
//   // }));
//   return []; // Return empty array for now if not pre-rendering paths
// }

// Optional: Revalidate data periodically if needed
// export const revalidate = 60; // Revalidate every 60 seconds
