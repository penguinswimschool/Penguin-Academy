import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AuthProvider } from "@/hooks/auth";
import React from "react";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const title = "SSI Swim Teacher Courses Singapore | Penguin Academy";
const description = "Train as an SSI swim teacher in Singapore with Penguin Academy. Explore Level 1, Level 2, Baby Swim Teacher, Adult and React Right CPR, AED and Oxygen Provider courses.";
const ogImage = "/penguinacademylogo512x280.jpg";

export const metadata: Metadata = {
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
  openGraph: {
    title,
    description,
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
    title,
    description,
    images: [ogImage],
  },
};

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
