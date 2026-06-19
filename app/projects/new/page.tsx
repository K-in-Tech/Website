"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Rocket ,
  Globe,
  ImageIcon,
  Code2,
  FileText,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

type ProjectForm = {
  title: string;
  description: string;
  techStack: string;
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
};

export default function NewProjectPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<ProjectForm>({
    title: "",
    description: "",
    techStack: "",
    liveUrl: "",
    githubUrl: "",
    imageUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !form.title.trim() ||
      !form.description.trim() ||
      !form.techStack.trim()
    ) {
      alert(
        "Title, Description and Tech Stack are required."
      );
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "/api/projects",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...form,
            title:
              form.title.trim(),
            description:
              form.description.trim(),
            techStack:
              form.techStack.trim(),
          }),
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        throw new Error(
          data?.error ||
            "Failed to publish project"
        );
      }

      router.push("/projects");
    } catch (error) {
      console.error(error);
      alert(
        "Failed to publish project"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12">

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">
              <Rocket size={16} />
              Project Showcase
            </div>

            <h1 className="text-5xl md:text-6xl font-black">
              Publish Your
              <span className="text-green-400">
                {" "}Project
              </span>
            </h1>

            <p className="text-gray-400 text-lg mt-6">
              Share your work with the
              developer community and
              inspire others by showcasing
              what you've built.
            </p>

          </div>

        </div>
      </section>

      {/* FORM */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">

          {/* LEFT */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-6"
          >

            <InputField
              icon={
                <Rocket size={18} />
              }
              label="Project Title"
              name="title"
              value={form.title}
              onChange={
                handleChange
              }
              placeholder="AI Resume Builder"
              required
            />

            <TextareaField
              icon={
                <FileText size={18} />
              }
              label="Description"
              name="description"
              value={
                form.description
              }
              onChange={
                handleChange
              }
              placeholder="Describe your project..."
            />

            <InputField
              icon={
                <Code2 size={18} />
              }
              label="Tech Stack"
              name="techStack"
              value={
                form.techStack
              }
              onChange={
                handleChange
              }
              placeholder="Next.js, Prisma, PostgreSQL, Clerk"
              required
            />

            <InputField
              icon={
                <Globe size={18} />
              }
              label="Live URL"
              name="liveUrl"
              value={
                form.liveUrl
              }
              onChange={
                handleChange
              }
              placeholder="https://yourproject.com"
            />

            <InputField
              icon={
                <FaGithub  size={18} />
              }
              label="GitHub URL"
              name="githubUrl"
              value={
                form.githubUrl
              }
              onChange={
                handleChange
              }
              placeholder="https://github.com/..."
            />

            <InputField
              icon={
                <ImageIcon size={18} />
              }
              label="Image URL"
              name="imageUrl"
              value={
                form.imageUrl
              }
              onChange={
                handleChange
              }
              placeholder="https://..."
            />

            <button
              disabled={loading}
              className="
                w-full
                py-4
                rounded-2xl
                bg-green-500
                hover:bg-green-600
                text-black
                font-bold
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
                flex
                items-center
                justify-center
                gap-2
              "
            >
              {loading ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                  Publishing...
                </>
              ) : (
                <>
                  <Rocket size={18} />
                  Publish Project
                </>
              )}
            </button>

          </form>

          {/* RIGHT PREVIEW */}
          <div className="sticky top-6 h-fit">

            <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">

              <div className="aspect-video bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center">

                {form.imageUrl ? (
                  <img
                    src={
                      form.imageUrl
                    }
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImageIcon
                    size={50}
                    className="text-gray-500"
                  />
                )}

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {form.title ||
                    "Project Title"}
                </h3>

                <p className="text-gray-400 mt-3 line-clamp-4">
                  {form.description ||
                    "Project description preview..."}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {form.techStack
                    .split(",")
                    .filter(Boolean)
                    .map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-400"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function InputField({
  icon,
  label,
  ...props
}: any) {
  return (
    <div>

      <label className="block text-sm text-gray-400 mb-2">
        {label}
      </label>

      <div className="relative">

        <div className="absolute left-4 top-4 text-gray-500">
          {icon}
        </div>

        <input
          {...props}
          className="
            w-full
            pl-12
            pr-4
            py-4
            rounded-2xl
            bg-black
            border
            border-white/10
            outline-none
            focus:border-green-500
          "
        />

      </div>

    </div>
  );
}

function TextareaField({
  icon,
  label,
  ...props
}: any) {
  return (
    <div>

      <label className="block text-sm text-gray-400 mb-2">
        {label}
      </label>

      <div className="relative">

        <div className="absolute left-4 top-4 text-gray-500">
          {icon}
        </div>

        <textarea
          rows={7}
          {...props}
          className="
            w-full
            pl-12
            pr-4
            py-4
            rounded-2xl
            bg-black
            border
            border-white/10
            outline-none
            resize-none
            focus:border-green-500
          "
        />

      </div>

    </div>
  );
}