import Image from "next/image";

const links = [
  { title: "Official Website", url: "https://example.com" },
  { title: "YouTube Channel", url: "https://youtube.com" },
  { title: "Instagram", url: "https://instagram.com" },
  // Add more links as needed
];

export default function LinktreePage() {
  return (
    <main className="min-h-screen bg-white p-4">
      {/* Full-width profile banner */}
      <div className="relative w-full h-64 mb-6">
        <Image
          src="/profile.jpg"             // Ensure this file exists in the public folder
          alt="Profile Banner"
          fill
          unoptimized                     // Disable image optimization if using static export
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Profile info */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Taura</h1>
        <p className="mt-2 text-gray-600">Your bio or tagline goes here.</p>
      </div>

      {/* Link buttons */}
      <div className="space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            {link.title}
          </a>
        ))}
      </div>
    </main>
  );
}