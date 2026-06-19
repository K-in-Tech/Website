"use client";

import { useState } from "react";

export default function ResumeBuilderPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const [summary, setSummary] = useState("");

  const [skills, setSkills] = useState("");

  const [education, setEducation] =
    useState("");

  const [experience, setExperience] =
    useState("");

  const [projects, setProjects] =
    useState("");

  const downloadResumeData = () => {
    const data = {
      name,
      email,
      phone,
      location,
      summary,
      skills,
      education,
      experience,
      projects,
    };

    const blob = new Blob(
      [JSON.stringify(data, null, 2)],
      {
        type: "application/json",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;
    a.download = "resume-data.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Resume Builder
          </h1>

          <p className="mt-4 text-gray-400">
            Create an ATS-friendly resume
            directly inside K in Tech.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* FORM */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-2xl font-bold mb-6">
              Resume Information
            </h2>

            <div className="space-y-4">

              <Input
                label="Full Name"
                value={name}
                setValue={setName}
              />

              <Input
                label="Email"
                value={email}
                setValue={setEmail}
              />

              <Input
                label="Phone"
                value={phone}
                setValue={setPhone}
              />

              <Input
                label="Location"
                value={location}
                setValue={setLocation}
              />

              <TextArea
                label="Professional Summary"
                value={summary}
                setValue={setSummary}
              />

              <TextArea
                label="Skills (comma separated)"
                value={skills}
                setValue={setSkills}
              />

              <TextArea
                label="Education"
                value={education}
                setValue={setEducation}
              />

              <TextArea
                label="Experience"
                value={experience}
                setValue={setExperience}
              />

              <TextArea
                label="Projects"
                value={projects}
                setValue={setProjects}
              />

              <button
                onClick={
                  downloadResumeData
                }
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 font-bold"
              >
                Download Resume Data
              </button>

            </div>

          </div>

          {/* PREVIEW */}
          <div className="rounded-3xl border border-white/10 bg-white text-black p-8">

            <h1 className="text-3xl font-bold">
              {name ||
                "Your Name"}
            </h1>

            <p className="mt-2 text-gray-600">
              {[email, phone, location]
                .filter(Boolean)
                .join(" • ")}
            </p>

            {summary && (
              <>
                <h2 className="mt-8 text-xl font-bold border-b pb-2">
                  Summary
                </h2>

                <p className="mt-3">
                  {summary}
                </p>
              </>
            )}

            {skills && (
              <>
                <h2 className="mt-8 text-xl font-bold border-b pb-2">
                  Skills
                </h2>

                <div className="flex flex-wrap gap-2 mt-3">

                  {skills
                    .split(",")
                    .map(
                      (
                        skill,
                        index
                      ) => (
                        <span
                          key={
                            index
                          }
                          className="px-3 py-1 rounded bg-gray-200"
                        >
                          {skill.trim()}
                        </span>
                      )
                    )}

                </div>
              </>
            )}

            {education && (
              <>
                <h2 className="mt-8 text-xl font-bold border-b pb-2">
                  Education
                </h2>

                <p className="mt-3 whitespace-pre-wrap">
                  {education}
                </p>
              </>
            )}

            {experience && (
              <>
                <h2 className="mt-8 text-xl font-bold border-b pb-2">
                  Experience
                </h2>

                <p className="mt-3 whitespace-pre-wrap">
                  {experience}
                </p>
              </>
            )}

            {projects && (
              <>
                <h2 className="mt-8 text-xl font-bold border-b pb-2">
                  Projects
                </h2>

                <p className="mt-3 whitespace-pre-wrap">
                  {projects}
                </p>
              </>
            )}

          </div>

        </div>

      </div>

    </main>
  );
}

function Input({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (
    value: string
  ) => void;
}) {
  return (
    <div>
      <label className="block mb-2 text-gray-400">
        {label}
      </label>

      <input
        value={value}
        onChange={(e) =>
          setValue(
            e.target.value
          )
        }
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
      />
    </div>
  );
}

function TextArea({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (
    value: string
  ) => void;
}) {
  return (
    <div>
      <label className="block mb-2 text-gray-400">
        {label}
      </label>

      <textarea
        value={value}
        onChange={(e) =>
          setValue(
            e.target.value
          )
        }
        rows={4}
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none resize-none"
      />
    </div>
  );
}