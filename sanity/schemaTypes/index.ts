import { type SchemaTypeDefinition } from 'sanity'
import author from './author'
import blockContent from './blockContent'
import blogPost from './blogPost'
import category from './category'
import homepageMeta from './homepageMeta'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, author, category, blockContent, homepageMeta],
}
