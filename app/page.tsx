import Link from "next/link";

const mockBlogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt:
      "Learn how to build modern web applications with the latest Next.js features and best practices.",
    date: "January 25, 2026",
    category: "Tutorial",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "React Hooks: A Deep Dive",
    excerpt:
      "Explore the power of React hooks and how they can simplify your component logic and state management.",
    date: "January 20, 2026",
    category: "React",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Tailwind CSS Best Practices",
    excerpt:
      "Master the art of utility-first CSS with Tailwind. Discover tips and tricks for more efficient styling.",
    date: "January 15, 2026",
    category: "CSS",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "TypeScript for Frontend Developers",
    excerpt:
      "Understand how TypeScript can improve your development experience and catch errors before runtime.",
    date: "January 10, 2026",
    category: "TypeScript",
    readTime: "7 min read",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              BytesBlog
            </h2>
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="font-medium text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="font-medium text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="font-medium text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="font-medium text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="mb-4 text-4xl font-bold text-black dark:text-white">
            Welcome to BytesBlog
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Explore articles about web development, programming, and modern
            technologies.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
            Latest Articles
          </h2>
          <div className="grid gap-6">
            {mockBlogPosts.map((post) => (
              <article
                key={post.id}
                className="group border border-zinc-200 rounded-lg p-6 transition-all hover:border-blue-400 hover:shadow-lg dark:border-zinc-800 dark:hover:border-blue-600"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                    {post.category}
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {post.date}
                  </span>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <h3 className="mb-3 text-2xl font-bold text-black transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {post.title}
                  </h3>
                </Link>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {post.readTime}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <p className="text-center text-zinc-600 dark:text-zinc-400">
            © 2026 BytesBlog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
