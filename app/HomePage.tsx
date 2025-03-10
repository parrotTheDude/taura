"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative">
      {/* Background Image Lowered Below the Navbar */}
      <div className="absolute top-4 left-0 w-full min-h-screen -z-10">
        <Image 
          src="/images/waves.webp" 
          alt="Background Image" 
          fill
          className="object-cover"
          unoptimized 
        />
      </div>
    </main>
  );
}