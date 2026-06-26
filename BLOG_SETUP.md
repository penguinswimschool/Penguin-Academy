# Blog Setup Guide

This guide will help you set up the blog system with Sanity CMS.

## 1. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install @portabletext/react
```

## 2. Environment Variables

Make sure you have the following environment variables in your `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 3. Sanity Studio Setup

### Access Sanity Studio
Navigate to `/studio` in your application to access the Sanity Studio.

### Create Content Types
The following content types have been created:

1. **Blog Post** (`blogPost`)
   - Title (required)
   - Slug (auto-generated from title)
   - Author (reference to author)
   - Main Image (with hotspot)
   - Categories (array of references)
   - Published Date
   - Excerpt
   - Body (rich text content)
   - Featured (boolean)
   - SEO Title (optional)
   - SEO Description (optional)

2. **Author** (`author`)
   - Name (required)
   - Slug (auto-generated from name)
   - Image
   - Bio (rich text)
   - Email
   - Website

3. **Category** (`category`)
   - Title (required)
   - Description
   - Slug (auto-generated from title)
   - Color (hex code for styling)

4. **Block Content** (`blockContent`)
   - Rich text editor with various formatting options
   - Support for headings, lists, quotes, links
   - Image embedding with captions

## 4. Creating Your First Blog Post

### Step 1: Create an Author
1. Go to `/studio`
2. Click on "Author" in the left sidebar
3. Click "Create new document"
4. Fill in:
   - Name: "Your Name"
   - Bio: A brief description about yourself
   - Upload a profile image
   - Add email and website (optional)

### Step 2: Create Categories
1. Click on "Category" in the left sidebar
2. Click "Create new document"
3. Create categories like:
   - "Swimming Tips" (color: #3B82F6)
   - "SSI Certification" (color: #10B981)
   - "Teaching Techniques" (color: #F59E0B)
   - "Safety & Equipment" (color: #EF4444)

### Step 3: Create a Blog Post
1. Click on "Blog Post" in the left sidebar
2. Click "Create new document"
3. Fill in:
   - Title: "Your First Blog Post"
   - Slug: Will be auto-generated
   - Author: Select the author you created
   - Main Image: Upload a featured image
   - Categories: Select relevant categories
   - Published Date: Set to today's date
   - Excerpt: A brief description of the post
   - Body: Write your content using the rich text editor
   - Featured: Check if you want this to be a featured post
   - SEO Title: Optional custom title for SEO
   - SEO Description: Optional custom description for SEO

## 5. Blog Features

### Blog Listing Page (`/blog`)
- Displays all blog posts in a grid layout
- Featured posts are highlighted at the top
- Shows post thumbnails, titles, excerpts, authors, and dates
- Responsive design for mobile and desktop

### Individual Blog Post Pages (`/blog/[slug]`)
- Full blog post content with rich text rendering
- Author information and bio
- Category tags
- Publication date
- Responsive images with captions
- Breadcrumb navigation

### Features Included
- ✅ Static site generation for all blog posts
- ✅ SEO-friendly URLs
- ✅ Rich text content with PortableText
- ✅ Image optimization with Sanity Image URL builder
- ✅ Author profiles with bios
- ✅ Category system with color coding
- ✅ Featured posts functionality
- ✅ Responsive design
- ✅ Mobile-friendly navigation

## 6. Customization

### Styling
The blog uses Tailwind CSS classes. You can customize the styling by modifying the components in:
- `app/blog/page.tsx` (blog listing)
- `app/blog/[slug]/page.tsx` (individual posts)

### Content Types
You can extend the content types by modifying the schema files in `sanity/schemaTypes/`.

### GROQ Queries
The blog uses GROQ queries to fetch data from Sanity. You can modify the queries in the page files to add more features like:
- Related posts
- Post search
- Category filtering
- Author pages

## 7. Deployment

Make sure your environment variables are set in your deployment platform (Vercel, Netlify, etc.).

The blog will automatically generate static pages for all published blog posts at build time.

## 8. Next Steps

Consider adding these features:
- Search functionality
- Related posts
- Social sharing buttons
- Comments system
- Newsletter signup
- RSS feed
- Sitemap generation 