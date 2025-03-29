import React, { useEffect } from 'react';

declare global {
  interface Window {
    VG_CONFIG?: {
      ID: string;
      region: string;
      render: string;
      stylesheets: string[];
    };
    VG_SCRIPT?: HTMLScriptElement;
  }
}

export default function ChatWidget() {
  useEffect(() => {
    // Initialize TIXAE chat widget
    window.VG_CONFIG = {
      ID: "lg61ialeay5t36cj",
      region: 'eu',
      render: 'bottom-right',
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
      ],
    };

    const script = document.createElement("script");
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="VG_OVERLAY_CONTAINER" style={{ width: 0, height: 0 }} />;
}