"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { 
    title: "Official Website", 
    url: "/comingsoon",
    icon: "/icons/global.svg" 
  },
  { 
    title: "Instagram", 
    url: "https://www.instagram.com/tdetaura",
    icon: "/icons/instagram.svg" 
  },
  { 
    title: "Spotify Sparks", 
    url: "https://open.spotify.com/playlist/1yJfVDt5ag0cukZLxxLGTE?pi=a-6AGAqM9zQPun",
    icon: "/icons/headphone.svg" 
  }
];

export default function LinktreePage() {
  const [shareModalUrl, setShareModalUrl] = useState<string | null>(null);

  const handleShare = async (url: string) => {
    // If the device supports the Web Share API, use it to open the native share card.
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out Taura",
          text: "I thought you might find this interesting:",
          url: url,
        });
      } catch (error) {
        console.error("Error sharing", error);
      }
    } else {
      // Otherwise, show a custom share modal.
      setShareModalUrl(url);
    }
  };

  const closeModal = () => setShareModalUrl(null);

  const copyLink = async () => {
    if (navigator.clipboard && shareModalUrl) {
      try {
        await navigator.clipboard.writeText(shareModalUrl);
        alert("Link copied to clipboard!");
        closeModal();
      } catch (error) {
        console.error("Failed to copy", error);
      }
    } else {
      alert("Clipboard not supported");
    }
  };

  return (
    <main className="min-h-screen bg-white p-4 flex items-center justify-center">
      <div className="w-full max-w-lg">
        {/* Full-width profile banner */}
         <div className="flex justify-center w-full h-32">
          <Image
            src="/taura.webp"             // Ensure this file exists in the public folder
            alt="Taura Logo"
            width={200}   // desired width in pixels
            height={200}  // desired height in pixels
            unoptimized                     // Disable image optimization if using static export
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Profile info */}
        <div className="text-center mb-4">
          <h1 className="text-1xl font-bold text-gray-800">
            SOUL-FUELED | SPIRIT-DRIVEN
          </h1>
        </div>

        {/* Link buttons with icons aligned */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <div
              key={index}
              className="flex items-center w-full bg-[#59ff19] text-[#000] py-3 rounded-lg transition hover:bg-[#4ad513] px-4"
            >
              {/* Left container: fixed width for main icon */}
              <div className="flex items-center" style={{ width: "24px" }}>
                <Image
                  src={link.icon}
                  alt={`${link.title} Icon`}
                  width={24}
                  height={24}
                  unoptimized
                />
              </div>

              {/* Center container: flex-grow text (the link) */}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center"
              >
                {link.title}
              </a>

              {/* Right container: share icon */}
              <div style={{ width: "24px" }}>
                <button
                  onClick={() => handleShare(link.url)}
                  className="focus:outline-none"
                >
                  <Image
                    src="/icons/dots.svg"
                    alt="Share Icon"
                    width={24}
                    height={24}
                    unoptimized
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom share modal fallback */}
        {shareModalUrl && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-lg text-black font-bold mb-2">Share this link</h2>
              <p className="mb-4 text-black break-all">{shareModalUrl}</p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={copyLink}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Copy Link
                </button>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}