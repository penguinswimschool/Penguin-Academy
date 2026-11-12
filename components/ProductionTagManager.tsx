'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { isProductionAnalyticsAllowed } from '@/lib/production-analytics';

export function ProductionTagManager({
  environment,
  gtmId
}: {
  environment?: string;
  gtmId?: string;
}) {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    setAllowed(
      isProductionAnalyticsAllowed(environment, window.location.hostname, window.location.protocol)
    );
  }, [environment]);

  if (!allowed || !gtmId || !/^GTM-[A-Z0-9]+$/.test(gtmId)) return null;
  return (
    <Script id="gtm-script" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');`}
    </Script>
  );
}
