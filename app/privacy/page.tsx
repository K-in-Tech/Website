import {
  Shield,
  Database,
  Lock,
  Globe,
  Mail,
  Eye,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
              <Shield size={16} />
              Privacy & Security
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Privacy
              <span className="text-blue-400">
                {" "}Policy
              </span>
            </h1>

            <p className="text-gray-400 text-lg mt-6">
              At K in Tech, we value your privacy and are committed
              to protecting your personal information. This policy
              explains what data we collect, how we use it, and the
              choices you have regarding your information.
            </p>

            <p className="text-sm text-gray-500 mt-4">
              Last Updated: June 2026
            </p>

          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-6">

          {/* SECTION */}
          <PolicyCard
            icon={<Database size={22} />}
            title="Information We Collect"
          >
            <ul className="space-y-3 list-disc ml-5">
              <li>Name and profile information</li>
              <li>Email address</li>
              <li>Authentication details</li>
              <li>Problem-solving progress</li>
              <li>Learning activity and platform usage</li>
              <li>Notes, bookmarks, and saved content</li>
            </ul>
          </PolicyCard>

          {/* SECTION */}
          <PolicyCard
            icon={<Eye size={22} />}
            title="How We Use Information"
          >
            <ul className="space-y-3 list-disc ml-5">
              <li>Provide platform features and services</li>
              <li>Track coding progress and achievements</li>
              <li>Personalize learning experiences</li>
              <li>Improve platform performance</li>
              <li>Prevent abuse and maintain security</li>
              <li>Communicate important updates</li>
            </ul>
          </PolicyCard>

          {/* SECTION */}
          <PolicyCard
            icon={<Lock size={22} />}
            title="Data Security"
          >
            <p>
              We use industry-standard security practices
              to protect user data from unauthorized access,
              disclosure, alteration, or destruction.
              While no online service can guarantee absolute
              security, we continuously improve our safeguards.
            </p>
          </PolicyCard>

          {/* SECTION */}
          <PolicyCard
            icon={<Globe size={22} />}
            title="Third-Party Services"
          >
            <p>
              K in Tech may use trusted third-party services
              for authentication, analytics, hosting,
              databases, payment processing, and infrastructure.
              These providers only receive information necessary
              to perform their services.
            </p>
          </PolicyCard>

          {/* SECTION */}
          <PolicyCard
            icon={<Shield size={22} />}
            title="Cookies & Analytics"
          >
            <p>
              We may use cookies and analytics tools to
              understand usage patterns, improve performance,
              and enhance user experience. You can manage
              cookie preferences through your browser settings.
            </p>
          </PolicyCard>

          {/* SECTION */}
          <PolicyCard
            icon={<Mail size={22} />}
            title="Your Rights"
          >
            <ul className="space-y-3 list-disc ml-5">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account</li>
              <li>Opt out of non-essential communications</li>
              <li>Request information about stored data</li>
            </ul>
          </PolicyCard>

          {/* CONTACT */}
          <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8">

            <h2 className="text-2xl font-bold mb-3">
              Questions About Privacy?
            </h2>

            <p className="text-gray-400">
              If you have questions regarding this Privacy Policy
              or your personal information, please contact us
              through our Contact page.
            </p>

          </div>

        </div>

      </section>
    </main>
  );
}

function PolicyCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="flex items-center gap-4 mb-5">

        <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
          {icon}
        </div>

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

      </div>

      <div className="text-gray-400 leading-8">
        {children}
      </div>

    </div>
  );
}