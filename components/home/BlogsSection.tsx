import Link from "next/link";

type Blog = {
  id: string;
  slug?: string;
  title: string;
  excerpt?: string;
  category: string;
  createdAt: string;
};

async function getLatestBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(
      "http://localhost:3000/api/blogs?limit=3",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error(
        "Failed to fetch blogs:",
        res.status
      );
      return [];
    }

    const data = await res.json();

    if (!data.success) {
      return [];
    }

    return data.blogs || [];
  } catch (error) {
    console.error(
      "Error loading blogs:",
      error
    );
    return [];
  }
}

export default async function BlogsSection() {
  const blogs = await getLatestBlogs();

  return (
    <section className="py-20 px-6">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-12">

        <h2 className="text-4xl font-bold">
          Latest Blogs & Tutorials
        </h2>

        <p className="text-gray-400 mt-4">
          Learn concepts, solve problems,
          and improve your development
          skills.
        </p>

      </div>

      {/* BLOG GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {blogs.length === 0 ? (
          <p className="text-gray-400 col-span-3 text-center">
            No blogs available yet
          </p>
        ) : (
          blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${
                blog.slug || blog.id
              }`}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 block"
            >
              <p className="text-sm text-blue-400">
                {blog.category}
              </p>

              <h3 className="text-xl font-semibold mt-2 line-clamp-2 group-hover:text-blue-400 transition">
                {blog.title}
              </h3>

              <p className="text-gray-400 mt-3 line-clamp-3">
                {blog.excerpt ||
                  "Read this blog to learn more..."}
              </p>

              <div className="mt-4 text-sm text-gray-500">
                {new Date(
                  blog.createdAt
                ).toLocaleDateString()}
              </div>
            </Link>
          ))
        )}

      </div>

      {/* SEE ALL BUTTON */}
      <div className="text-center mt-10">

        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition text-black font-semibold"
        >
          See All Blogs
          <span>→</span>
        </Link>

      </div>

    </section>
  );
}