import "./globals.css";
import Link from "next/link";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script data-collect-dnt="true" async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </head>
      <body className="bg-white text-gray-800">
        {/* Shared Header */}
        <header className="w-full max-w-screen-md mx-auto flex flex-col items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wide text-gray-800 p-2 pt-8">
            TAURA
          </Link>

          {/* Navigation Links */}
          <nav className="w-full mt-0">
            <ul className="flex flex-wrap justify-center text-lg font-medium text-gray-800 gap-4 sm:gap-8">
              <li>
                <Link href="/" className="hover:text-gray-500 transition">Home</Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-gray-500 transition">Collections</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-500 transition">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-500 transition">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Page Content (Each page renders inside here) */}
        <main className="w-full max-w-screen-md mx-auto">{children}</main>
      </body>
    </html>
  );
}