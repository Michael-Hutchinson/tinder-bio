'use client';

import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-KEB4S6BW6J' />
      <Script id='google-analytics'>
        {`
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'G-KEB4S6BW6J')
    `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
