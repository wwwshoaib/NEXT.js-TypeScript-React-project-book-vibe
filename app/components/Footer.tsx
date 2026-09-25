import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/all-books" },
  { label: "Listed Books", href: "/listed-books" },
  { label: "Pages to Read", href: "/pages-to-read" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#f8fafc] text-[#1c2533]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Book Vibe
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-gray-600">
            Discover great books, keep track of your reading, and find fresh
            inspiration for your bookshelf.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <nav aria-label="Footer navigation" className="mt-5">
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 transition-colors hover:text-[#17b900]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Your next great read awaits</h2>
          <p className="mt-4 leading-7 text-gray-600">
            Explore our collection and add a new favorite to your reading list.
          </p>
          <Link
            href="/books"
            className="mt-5 inline-flex rounded-lg bg-[#17b900] px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#129900] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17b900]"
          >
            Explore Books
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-200 px-6 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Book Vibe. All rights reserved.
      </div>
    </footer>
  );
}