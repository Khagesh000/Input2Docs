import React, { useEffect } from 'react';
import '../Ads.css';

const MultiplyAd = () => {
  useEffect(() => {
    // Load the Google Ads script asynchronously
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8458606115207276";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Error loading in-feed ad', e);
      }
    };

    return () => {
      // Clean up the script after component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-8458606115207276"
        data-ad-slot="9066530364"
      ></ins>
    </div>
  );
};

export default MultiplyAd;
