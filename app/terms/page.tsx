export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 mb-6">
            Legal Information
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            Terms of Service
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl">
            These Terms of Service govern your access to and use of
            K in Tech, including coding challenges, blogs, projects,
            roadmaps, learning resources, and community features.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
              Effective Date: June 2026
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
              Last Updated: June 2026
            </div>
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="space-y-8">

          {/* SECTION */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-4">
              1. Acceptance of Terms
            </h2>

            <p className="text-gray-400 leading-8">
              By accessing, browsing, or using K in Tech, you agree
              to be bound by these Terms of Service and all
              applicable laws and regulations. If you do not agree
              with any part of these terms, you should discontinue
              use of the platform immediately.
            </p>
          </div>

          {/* SECTION */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-4">
              2. User Accounts
            </h2>

            <p className="text-gray-400 leading-8">
              Certain features may require account registration.
              You are responsible for maintaining the confidentiality
              of your account credentials and for all activities
              performed under your account.
            </p>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li>• Provide accurate account information.</li>
              <li>• Keep login credentials secure.</li>
              <li>• Notify us of unauthorized account access.</li>
              <li>• Use the platform lawfully and responsibly.</li>
            </ul>
          </div>

          {/* SECTION */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-4">
              3. User Content
            </h2>

            <p className="text-gray-400 leading-8">
              Users may publish blogs, projects, comments, notes,
              and other content. You retain ownership of your
              content, but grant K in Tech a non-exclusive license
              to display, distribute, and promote such content on
              the platform.
            </p>
          </div>

          {/* SECTION */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-4">
              4. Prohibited Activities
            </h2>

            <p className="text-gray-400 mb-6">
              Users agree not to engage in activities that may harm
              the platform, community, or other users.
            </p>

            <div className="grid md:grid-cols-2 gap-4">

              <div className="rounded-2xl bg-black border border-red-500/20 p-5">
                <h3 className="font-semibold text-red-400 mb-2">
                  Not Allowed
                </h3>

                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Illegal activities</li>
                  <li>• Spam or phishing</li>
                  <li>• Harassment or abuse</li>
                  <li>• Unauthorized access attempts</li>
                  <li>• Malware distribution</li>
                  <li>• Platform exploitation</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-black border border-green-500/20 p-5">
                <h3 className="font-semibold text-green-400 mb-2">
                  Encouraged
                </h3>

                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Knowledge sharing</li>
                  <li>• Professional collaboration</li>
                  <li>• Constructive feedback</li>
                  <li>• Open-source contributions</li>
                  <li>• Learning and growth</li>
                </ul>
              </div>

            </div>
          </div>

          {/* SECTION */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-4">
              5. Intellectual Property
            </h2>

            <p className="text-gray-400 leading-8">
              Platform branding, design, content structure, and
              proprietary materials belong to K in Tech unless
              otherwise stated. Unauthorized reproduction or
              redistribution is prohibited.
            </p>
          </div>

          {/* SECTION */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-4">
              6. Limitation of Liability
            </h2>

            <p className="text-gray-400 leading-8">
              K in Tech is provided on an "as-is" basis without
              warranties of any kind. We do not guarantee
              uninterrupted service, absolute accuracy, or
              suitability for any specific purpose.
            </p>
          </div>

          {/* SECTION */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-4">
              7. Termination
            </h2>

            <p className="text-gray-400 leading-8">
              We reserve the right to suspend or terminate access
              to the platform for violations of these terms or for
              activities that threaten platform security or user
              experience.
            </p>
          </div>

          {/* SECTION */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-4">
              8. Changes to These Terms
            </h2>

            <p className="text-gray-400 leading-8">
              We may update these Terms of Service periodically.
              Continued use of K in Tech after changes are posted
              constitutes acceptance of the updated terms.
            </p>
          </div>

          {/* CONTACT */}
          <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8">
            <h2 className="text-2xl font-bold mb-4">
              Questions?
            </h2>

            <p className="text-gray-400 leading-8">
              If you have questions regarding these Terms of
              Service, please contact us through the Contact page.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}