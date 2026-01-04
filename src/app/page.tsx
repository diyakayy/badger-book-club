export default function Home() {
  return (
    <main className="min-h-screen bg-[#FEFAF0]">
      <header className="border-b border-[#EAB9B3] py-6">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-4xl font-serif text-[#26150B]">Badger Book Club</h1>
          <nav>
            <a href="/" className="mr-6 text-[#913F4A]">Home</a>
            <a href="/about" className="mr-6 text-[#913F4A]">About</a>
            <a href="/events" className="mr-6 text-[#913F4A]">Events</a>
            <a href="/gallery" className="mr-6 text-[#913F4A]">Gallery</a>
            <a href="/blog" className="text-[#913F4A]">Blog</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-3 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-serif text-[#26150B] leading-tight">Join Our Book Community</h2>
          </div>
          <div>
            <p className="text-lg text-[#26150B] leading-relaxed">Discover a vibrant community of book lovers dedicated to exploring literature, sharing insights, and celebrating the written word.</p>
          </div>
          <div>
            <button className="bg-[#913F4A] text-white px-8 py-3 rounded hover:bg-[#7A2D38] transition">Join the Club</button>
          </div>
        </div>
      </section>

      <section className="bg-[#EAB9B3] py-12 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-2xl font-serif text-white">
          NEW READS AHEAD ✦ NEW READS AHEAD ✦ NEW READS AHEAD ✦ NEW READS AHEAD
        </div>
      </section>

      <footer className="border-t border-[#EAB9B3] py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-[#26150B]">
          <p>&copy; 2025 Badger Book Club. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
