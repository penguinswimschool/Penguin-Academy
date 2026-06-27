import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AuthProvider } from "@/hooks/auth";
import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import React from "react";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  
  const title = meta?.title || "Swim Coach Certification Singapore | Professional Training";
  const description = meta?.description || "Get certified as a professional swim coach in Singapore. Accredited training, expert instructors & practical coaching experience. Enroll today!";
  const ogTitle = meta?.ogTitle || title;
  const ogDescription = meta?.ogDescription || description;
  const ogImage = meta?.ogImage && sanityClient ? urlFor(meta.ogImage).url() : "/penguinacademylogo512x280.jpg";

  return {
    metadataBase: new URL('https://www.swimcoachcertification.com'),
    title,
    description,
    icons: {
      icon: "/penguinacademylogo512x280.jpg",
      apple: "/penguinacademylogo512x280.jpg",
      shortcut: "/penguinacademylogo512x280.jpg",
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
    }
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {gtmId && (
          <>
            <Script id="gtm-script" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
