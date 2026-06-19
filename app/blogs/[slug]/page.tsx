import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | K in Tech`,
    description:
      blog.excerpt ||
      blog.content.slice(0, 160),
    openGraph: {
      title: blog.title,
      description:
        blog.excerpt ||
        blog.content.slice(0, 160),
      images: blog.imageUrl
        ? [blog.imageUrl]
        : [],
    },
  };
}

export default async function BlogPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog = await prisma.blog.findUnique({
    where: { slug },
    include: {
      author: true,
    },
  });

  if (!blog) return notFound();

  let views = blog.views;

  try {
    const updated =
      await prisma.blog.update({
        where: {
          id: blog.id,
        },
        data: {
          views: {
            increment: 1,
          },
        },
        select: {
          views: true,
        },
      });

    views = updated.views;
  } catch { }

  const relatedBlogs =
    await prisma.blog.findMany({
      where: {
        category: blog.category,
        id: {
          not: blog.id,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    });

  const tags =
    blog.tags
      ?.split(",")
      .map((tag) => tag.trim())
      .filter(Boolean) || [];

  const readingTime = Math.max(
    1,
    Math.ceil(
      blog.content.split(" ").length / 200
    )
  );

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative">

        {blog.imageUrl ? (
          <div className="relative h-[500px]">

            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

          </div>
        ) : (
          <div className="h-[300px] bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-500/20" />
        )}

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto w-full px-6 pb-16">

            <Link
              href="/blogs"
              className="text-gray-300 hover:text-white"
            >
              ← Back to Blogs
            </Link>

            <div className="mt-8">

              <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                {blog.category}
              </span>

              <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight max-w-4xl">
                {blog.title}
              </h1>

              <p className="text-gray-300 text-lg mt-6 max-w-3xl">
                {blog.excerpt}
              </p>

            </div>

          </div>
        </div>

      </section>

      {/* ARTICLE META */}
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-8">

          <div className="flex flex-wrap items-center justify-between gap-6">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10">

                {blog.author?.imageUrl ? (
                  <img
                    src={blog.author.imageUrl}
                    alt={blog.author.name || ""}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-white/10 flex items-center justify-center">
                    👨‍💻
                  </div>
                )}

              </div>

              <div>
                <p className="font-semibold">
                  {blog.author?.name ||
                    "Anonymous"}
                </p>

                <p className="text-sm text-gray-400">
                  Published on{" "}
                  {new Date(
                    blog.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>

            </div>

            <div className="flex gap-6 text-sm text-gray-400">

              <span>
                ⏱ {readingTime} min read
              </span>

              <span>
                👀 {views}
              </span>

              <span>
                ❤️ {blog.likes}
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-[1fr_280px] gap-12">

          {/* ARTICLE */}
          {/* ARTICLE */}

          <article className="max-w-3xl mx-auto">

            <div
              className="
      prose
      prose-invert
      max-w-none

   
  prose-headings:text-white
  prose-headings:font-bold

  prose-h1:text-4xl
  prose-h2:text-3xl
  prose-h3:text-2xl

  prose-p:text-gray-300
  prose-p:text-base
  prose-p:leading-8

  prose-strong:text-white

  prose-code:text-cyan-400

  prose-pre:bg-zinc-900
  prose-pre:border
  prose-pre:border-white/10
  prose-pre:rounded-xl

  prose-blockquote:border-blue-500
  prose-blockquote:text-gray-300

  prose-a:text-blue-400
  prose-a:no-underline

  prose-img:rounded-2xl
  prose-img:w-full
  prose-img:max-h-[500px]
  prose-img:object-cover
"
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}


            />

            {tags.length > 0 && (<div className="mt-14 border-t border-white/10 pt-8">


              <h3 className="font-bold text-xl mb-5">
                Tags
              </h3>

              <div className="flex flex-wrap gap-3">

                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="
          px-4
          py-2
          rounded-full
          border
          border-white/10
          bg-white/5
          hover:bg-white/10
          transition
        "
                  >
                    #{tag}
                  </span>
                ))}

              </div>

            </div>


            )}

          </article>


          {/* SIDEBAR */}
          <aside>

            <div className="sticky top-24">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

                <h3 className="font-bold text-xl mb-5">
                  About Author
                </h3>

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-full overflow-hidden">

                    {blog.author?.imageUrl ? (
                      <img
                        src={
                          blog.author.imageUrl
                        }
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/10 flex items-center justify-center">
                        👨‍💻
                      </div>
                    )}

                  </div>

                  <div>
                    <p className="font-semibold">
                      {blog.author?.name ||
                        "Anonymous"}
                    </p>

                    <p className="text-gray-400 text-sm">
                      Developer & Writer
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </aside>

        </div>

      </section>

      {/* RELATED POSTS */}
      {relatedBlogs.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-24">

          <h2 className="text-4xl font-black mb-10">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {relatedBlogs.map((related) => (
              <Link
                key={related.id}
                href={`/blogs/${related.slug}`}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-blue-500/50 transition"
              >

                {related.imageUrl && (
                  <div className="h-52 overflow-hidden">

                    <img
                      src={related.imageUrl}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>
                )}

                <div className="p-6">

                  <div className="text-xs text-blue-400 mb-3">
                    {related.category}
                  </div>

                  <h3 className="font-bold text-xl line-clamp-2">
                    {related.title}
                  </h3>

                  <p className="text-gray-400 mt-4 line-clamp-3">
                    {related.excerpt}
                  </p>

                  <div className="mt-5 text-blue-400">
                    Read Article →
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </section>
      )}
    </main>
  );
}