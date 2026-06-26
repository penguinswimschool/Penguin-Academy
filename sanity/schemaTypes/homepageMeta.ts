import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepageMeta',
  title: 'Homepage Meta Tags',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      description: 'The title that appears in search engines and browser tabs',
      validation: (Rule) => Rule.max(60).warning('Title should be under 60 characters for optimal SEO'),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'The description that appears in search engine results',
      validation: (Rule) => Rule.max(160).warning('Description should be under 160 characters for optimal SEO'),
    }),
    defineField({
      name: 'keywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for SEO (optional, not as important as title and description)',
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
      description: 'Title for social media sharing (optional, defaults to meta title)',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      rows: 3,
      description: 'Description for social media sharing (optional, defaults to meta description)',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image that appears when sharing on social media',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare(selection) {
      const { title, description } = selection
      return {
        title: title || 'Homepage Meta Tags',
        subtitle: description || 'Configure homepage SEO',
      }
    },
  },
})
