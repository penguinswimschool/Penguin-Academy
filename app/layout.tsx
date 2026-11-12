import type { Metadata } from "next";
import { ProductionTagManager } from "@/components/ProductionTagManager";
import "./globals.css";
import { AuthProvider } from "@/hooks/auth";
import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import React from "react";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

// Fetch homepage meta tags from Sanity
async function getHomepageMeta() {
  try {
    // Check if Sanity is configured
    if (!sanityClient) {
      return null;
    }
    
    const meta = await sanityClient.fetch(
      `*[_type == "homepageMeta"][0]`,
      {},
      {
        next: {
          revalidate: 3600, // Revalidate every hour
          tags: ['homepage-meta']
        }
      }
    );
    return meta;
  } catch (error) {
    console.error('Error fetching homepage meta:', error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getHomepageMeta();
  
  const title = meta?.title || "SSI Swim Teacher Courses Singapore | Penguin Academy";
  const description = meta?.description || "Train as an SSI swim teacher in Singapore with Penguin Academy. Explore Level 1, Level 2, Baby Swim Teacher, Adult and React Right CPR, AED and Oxygen Provider courses.";
  const ogTitle = meta?.ogTitle || title;
  const ogDescription = meta?.ogDescription || description;
  const ogImage = meta?.ogImage && sanityClient ? urlFor(meta.ogImage).url() : "/penguinacademylogo512x280.jpg";

  return {
    metadataBase: new URL('https://www.swimcoachcertification.com'),
    title,
    description,
    icons: {
      icon: [
        { url: "/penguin-academy-icon-48.png", sizes: "48x48", type: "image/png" },
        { url: "/penguin-academy-icon-96.png", sizes: "96x96", type: "image/png" },
        { url: "/penguin-academy-icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/penguin-academy-icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/penguin-academy-icon-192.png", sizes: "192x192", type: "image/png" }],
      shortcut: "/penguin-academy-icon-48.png",
    },
    keywords: meta?.keywords || undefined,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: "https://www.swimcoachcertification.com",
      siteName: "Penguin Academy",
      images: [
        {
          url: ogImage,
          width: 512,
          height: 280,
          alt: "Penguin Academy Logo",
        },
      ],
      locale: "en_SG",
      type: "website",
    },
    alternates: {
      canonical: "https://www.swimcoachcertification.com/", 
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-SG">
      <body
        className="antialiased"
      >
        <ProductionTagManager environment={process.env.VERCEL_ENV} gtmId={gtmId} />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
