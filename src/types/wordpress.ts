// Basic type definitions for WordPress REST API (Dummy) responses
// These will likely need refinement and expansion

export interface WpRenderedContent {
  rendered: string;
  protected?: boolean; // Optional, depends on API settings
}

export interface WpPage {
  id: number;
  date: string; // ISO 8601 date string
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  type: 'page'; // Assuming we only fetch pages here
  link: string;
  title: WpRenderedContent;
  content: WpRenderedContent;
  excerpt: WpRenderedContent;
  author: number; // Author ID
  featured_media: number; // Media ID, 0 if none
  parent: number; // Parent page ID, 0 if none
  menu_order: number;
  // Add other fields as needed, e.g., _embedded for featured image details
  _embedded?: {
    'wp:featuredmedia'?: [{
      source_url: string;
      alt_text: string;
      media_details: {
        width: number;
        height: number;
      }
    }]
  }
}

export interface WpPost {
  id: number;
  date: string; // ISO 8601 date string
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  type: 'post';
  link: string;
  title: WpRenderedContent;
  content: WpRenderedContent;
  excerpt: WpRenderedContent;
  author: number; // Author ID
  featured_media: number; // Media ID, 0 if none
  categories: number[]; // Array of category IDs
  tags: number[]; // Array of tag IDs
  // Add other fields as needed, e.g., _embedded for author, categories, featured media
  _embedded?: {
    author?: [{
      id: number;
      name: string;
      url: string;
      slug: string;
    }];
    'wp:featuredmedia'?: [{
      source_url: string;
      alt_text: string;
      media_details: {
        width: number;
        height: number;
      }
    }];
    'wp:term'?: [
      Array<{ // Categories
        id: number;
        link: string;
        name: string;
        slug: string;
        taxonomy: 'category';
      }>,
      Array<{ // Tags
        id: number;
        link: string;
        name: string;
        slug: string;
        taxonomy: 'post_tag';
      }>
    ]
  }
}

// Add other types like WpCategory, WpUser as needed later
