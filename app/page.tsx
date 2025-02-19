import Image from "next/image";

const links = [
  { 
    title: "Official Website", 
    url: "https://www.taurashop.com/",
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
  return (
    <main className="min-h-screen bg-white p-4 flex items-center justify-center">
      <div className="w-full max-w-lg">
        {/* Full-width profile banner */}
        <div className="relative w-full h-64 mb-6">
          <Image
            src="/taura.webp"             // Ensure this file exists in the public folder
            alt="Taura Logo"
            fill
            unoptimized                     // Disable image optimization if using static export
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Profile info */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            SOUL-FUELED | SPIRIT-DRIVEN
          </h1>
        </div>

        {/* Link buttons with icons */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#59ff19] text-[#000] py-3 rounded-lg hover:bg-[#4ad513] transition"
            >
              <Image
                src={link.icon}
                alt={`${link.title} Icon`}
                width={24}
                height={24}
                unoptimized
              />
              <span>{link.title}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}