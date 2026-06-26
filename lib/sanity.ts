import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const config = projectId ? {
  dataset,
  projectId,
  apiVersion: '2024-01-01', // use current date (YYYY-MM-DD) to target the latest API version
  useCdn: process.env.NODE_ENV === 'production',
} : null

// Set up the client for fetching data in the getProps page functions
// Only create client if projectId is available
export const sanityClient = config ? createClient(config) : null

// Set up a helper function for generating Image URLs with only the asset reference data in your documents.
// https://www.sanity.io/docs/image-url
export const urlFor = (source: SanityImageSource) => {
  if (!config) {
    throw new Error('Sanity is not configured. Please set NEXT_PUBLIC_SANITY_PROJECT_ID environment variable.')
  }
  return imageUrlBuilder(config).image(source)
}

// Helper function to get the URL for a given image asset
export const imageUrlFor = (source: SanityImageSource) => {
  if (!config) {
    throw new Error('Sanity is not configured. Please set NEXT_PUBLIC_SANITY_PROJECT_ID environment variable.')
  }
  return imageUrlBuilder(config).image(source).auto('format').fit('max')
} 