// app/page.tsx
import Link from 'next/link';
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1>Welcome to Taura</h1>
      <p>
        Visit our <Link href="/linktree" className="text-blue-500 hover:underline">Linktree page</Link>
      </p>
    </main>
  );
}