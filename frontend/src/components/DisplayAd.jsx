import React, { useEffect } from "react";
import '../Ads.css';

const DisplayAd = () => {
  useEffect(() => {
    // Dynamically load the Google AdSense script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.setAttribute("data-ad-client", "ca-pub-8458606115207276");
    document.body.appendChild(script);

    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Error loading ad", e);
      }
    };

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8458606115207276"
        data-ad-slot="7736474116"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default DisplayAd;
