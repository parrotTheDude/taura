"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [count, setCount] = useState(0); // Example of interactive state

  return (
    <main className="min-h-screen bg-white p-4 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to TAURA
        </h1>
        <p className="text-gray-600 mt-2">SOUL-FUELED | SPIRIT-DRIVEN</p>

        {/* Example Counter (just for interaction demonstration) */}
        <div className="mt-4">
          <p className="text-gray-700">Counter: {count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Increment
          </button>
        </div>

        {/* Navigation Links */}
        <div className="mt-6">
          <Link
            href="/linktree"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Go to Linktree
          </Link>
        </div>

        {/* Example Image */}
        <div className="mt-6">
          <Image
            src="/taura.webp"
            alt="Taura Logo"
            width={200}
            height={200}
            unoptimized
          />
        </div>
      </div>
    </main>
  );
}