import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

interface LinkItem {
  title: string
  url: string
}

const links: LinkItem[] = [
  {
    title: 'Official Website',
    url: 'https://www.taurashop.com/'
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/tdetaura'
  },
  {
    title: 'Sparks',
    url: 'https://open.spotify.com/playlist/1yJfVDt5ag0cukZLxxLGTE?si=PJbxyQDOTbCvhdnceDtB9Q&pi=a-6AGAqM9zQPun'
  },
  // Add additional links as needed
]

const LinktreePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Links | TAURA</title>
        <meta name="description" content="Taura Linktree Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32">
              <Image
                src="/logo.jpeg" // Make sure to add your profile image in the public folder
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h1 className="mt-4 text-3xl font-bold text-gray-800">TAURA</h1>
            <p className="mt-2 text-gray-600 text-center">
              SOUL-FUELED | SPIRIT-DRIVEN
            </p>
          </div>
          <div className="mt-8 space-y-4">
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
        </div>
      </main>
    </>
  )
}

export default LinktreePage