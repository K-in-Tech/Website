"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setMessage("Successfully subscribed!");
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full sm:w-72 rounded-xl border border-white/10 bg-black/50 px-4 py-3 outline-none focus:border-blue-500"
      />

      <button
        onClick={handleSubscribe}
        disabled={loading}
        className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600 transition disabled:opacity-50"
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>

      {message && (
        <p className="text-sm text-gray-300 sm:ml-3">{message}</p>
      )}
    </div>
  );
}