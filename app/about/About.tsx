"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white p-6">
      <div className="w-full max-w-3xl text-center">

        {/* Banner Image */}
        <Image 
          src="/images/sparksOfConnection.webp" 
          alt="About Taura Banner" 
          width={600} 
          height={300} 
          className="rounded-lg max-w-full mx-auto h-auto"
          unoptimized 
        />

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 pt-4">About TAURA</h1>

        {/* About Content */}
        <section className="mt-6 text-gray-700 leading-relaxed">
          <p>
            At Taura, we create sparks of connection and self-expression. We celebrate the beauty of handmade crafts, 
            the power of creativity, and the profound impact of mindful choices.
          </p>

          <p className="mt-4">
            Our mission is to craft pieces that ignite and nourish your spirit—envisioning a life where we embrace freedom, 
            authenticity, and the joy that the journey brings.
          </p>
        </section>

        {/* Values Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
          <p className="text-gray-600 mt-2">
            <strong>Community | Nature | Science</strong>
          </p>
          <p className="text-gray-600">
            <strong>Freedom of Expression | Ethical Living | Innovation</strong>
          </p>
          <p className="mt-4 text-gray-700">
            These are the pillars we stand on—the guiding lights that inspire everything we create and define our purpose-driven designs.
          </p>
          <p className="mt-4 text-gray-700">
            Each Taura piece is a spark, bridging the connection between nature and the human spirit. 
            We design for those who seek more than just a product—they seek authenticity, inspiration, and a deeper bond 
            with what they choose to wear.
          </p>
        </section>

        {/* Inspiration Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Inspired by the World Around Us</h2>
          <p className="text-gray-700 mt-2">
            From the rhythm of music to the magic of books, the drama of films, and the transformative power of stories, 
            our creations walk beside you as you explore your path, embrace your identity, and cultivate your passions.
          </p>
        </section>

        {/* Sustainability Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">A Sustainable Journey</h2>
          <p className="text-gray-700 mt-2">
            Our commitment goes beyond design. Every detail is crafted with care, rooted in ethical and sustainable practices. 
            From responsibly sourced materials to mindful production processes, we strive to minimize our environmental impact 
            while fostering a conscious and compassionate economy.
          </p>
        </section>

        {/* Community Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Your Story, Our Inspiration</h2>
          <p className="text-gray-700 mt-2">
            Taura is more than a brand—it’s a community. We want to be part of your story, to share in your special moments, 
            and to become the canvas through which you express your truest self.
          </p>
        </section>

        <p className="mt-6 text-gray-800 font-semibold">Wings to fly, roots to thrive.</p>

        <p className="mt-6 text-gray-800 font-semibold">Discover your spark. Explore Taura today.</p>
      </div>
    </main>
  );
}