"use client"; // ✅ Mark this as a Client Component

import { useEffect } from "react";

export default function EcwidCart() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.ecwid.com/script.js?112674504&data_platform=code&data_date=2025-02-26";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="ec-cart-widget"></div>; // ✅ This will show the Ecwid shopping bag
}