import {
  Mail,
  MessageSquare,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
              <MessageSquare size={16} />
              Get In Touch
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              We'd Love To
              <span className="text-blue-400">
                {" "}Hear From You
              </span>
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-2xl">
              Have questions, feedback, feature requests,
              partnership opportunities, or just want to say
              hello? Reach out and we'll get back to you.
            </p>

          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10">

          {/* FORM */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-3xl font-bold mb-2">
              Send a Message
            </h2>

            <p className="text-gray-400 mb-8">
              Fill out the form below and we'll respond
              as soon as possible.
            </p>

            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black
                    px-4
                    py-4
                    outline-none
                    transition
                    focus:border-blue-500
                  "
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black
                    px-4
                    py-4
                    outline-none
                    transition
                    focus:border-blue-500
                  "
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black
                    px-4
                    py-4
                    outline-none
                    transition
                    focus:border-blue-500
                  "
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  rows={7}
                  placeholder="Tell us more..."
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black
                    px-4
                    py-4
                    outline-none
                    transition
                    resize-none
                    focus:border-blue-500
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-4
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-700
                  transition
                  font-semibold
                "
              >
                Send Message
                <ArrowRight size={18} />
              </button>

            </form>

          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <Mail
                  size={22}
                  className="text-blue-400"
                />
              </div>

              <h3 className="font-bold text-xl mb-2">
                Email Support
              </h3>

              <p className="text-gray-400">
                ktechsols26@gmail.com
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <MessageSquare
                  size={22}
                  className="text-purple-400"
                />
              </div>

              <h3 className="font-bold text-xl mb-2">
                Community
              </h3>

              <p className="text-gray-400">
                Join our developer community and
                connect with other learners.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                <Clock
                  size={22}
                  className="text-green-400"
                />
              </div>

              <h3 className="font-bold text-xl mb-2">
                Response Time
              </h3>

              <p className="text-gray-400">
                We typically respond within
                24–48 hours.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-lg">
                Can I contribute content?
              </h3>

              <p className="text-gray-400 mt-2">
                Yes. We welcome blogs, tutorials,
                resources and project showcases.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                How do I report an issue?
              </h3>

              <p className="text-gray-400 mt-2">
                Use the contact form above and include
                as much detail as possible.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Do you accept partnerships?
              </h3>

              <p className="text-gray-400 mt-2">
                Absolutely. Reach out through the form
                for collaboration opportunities.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}