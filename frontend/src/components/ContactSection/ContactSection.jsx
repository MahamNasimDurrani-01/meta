import React, { useState } from "react";
import instagram from "../../assets/instagram.png";

const ContactSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const phoneNumber = "+971566550121";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello, I'm interested in your services. Can you provide more information?"
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      const res = await fetch("http://localhost:5000/send-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        alert("🎉 Your query sent successfully!");
        setIsFormOpen(false);
      } else {
        alert("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      alert("⚠ Server error. Please try later.");
    }
  };

  return (
    <section
      id="contact-section"
      className="relative w-full py-20 px-6 md:px-20 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1e33] via-[#0d3b5c] to-[#0e4a6f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(3,114,250,0.2),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,240,255,0.15),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_10px_rgba(3,114,250,0.7)]">
            📩 Let’s Connect
          </h2>
          <p className="text-blue-100 text-lg">
            Have questions or ready to start your project? Reach out to us — we’d love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-2/3">
            <div className="rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(3,114,250,0.5)]">
              <img
                src="src\assets\ContectUs.png"
                alt="Contact us"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side Contact Box */}
          <div className="w-full lg:w-1/3">
            <div className="bg-[#0b1d2d]  backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-cyan-300">Get in Touch</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Email</h4>
                    <a
                      href="mailto:info@metameshlabs.com"
                      className="block text-blue-300 hover:text-cyan-200"
                    >
                      info@metameshlabs.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Phone</h4>
                    <a href="tel:+971566550121" className="text-blue-300 hover:text-cyan-200">
                      +971 56 655 0121
                    </a>
                  </div>
                </div>

                {/* Socials */}
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Socials</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/metameshlabs"
                      target="_blank"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20 hover:bg-blue-500/40 transition-all shadow-[0_0_10px_rgba(3,114,250,0.6)]"
                    >
                      <img src={instagram} className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">WhatsApp</h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    className="inline-block bg-gradient-to-r from-green-500 to-green-700 px-6 py-3 rounded-full text-white font-semibold shadow-[0_0_20px_rgba(34,197,94,0.7)] hover:scale-105 transition-transform"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>

                {/* HD Send Query Button */}
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="w-full mt-4 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 shadow-[0_0_25px_rgba(3,114,250,0.7)] hover:shadow-[0_0_35px_rgba(3,114,250,1)] hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">✨ Send a Query</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></span>
                </button>
              </div>

              {/* Business Hours */}
              <div className="mt-10 pt-6 border-t border-blue-400/30">
                <h4 className="font-semibold text-gray-200 mb-3">Business Hours</h4>
                <p className="text-blue-100">Mon - Fri: 9AM - 6PM</p>
                <p className="text-blue-100">Saturday: 10AM - 4PM</p>
                <p className="text-blue-100">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HD POP-UP Query Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 backdrop-blur-sm z-50">
          <div className="bg-[#0a2239]/80 backdrop-blur-2xl border border-blue-400/40 p-8 rounded-3xl shadow-[0_0_35px_rgba(3,114,250,0.6)] w-full max-w-lg animate-[fadeIn_0.3s_ease-out]">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Query</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-xl bg-[#102a49]/70 text-white border border-blue-500/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition-all"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-xl bg-[#102a49]/70 text-white border border-blue-500/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition-all"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                className="w-full p-3 rounded-xl bg-[#102a49]/70 text-white border border-blue-500/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition-all"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 shadow-[0_0_25px_rgba(3,114,250,0.7)] hover:shadow-[0_0_35px_rgba(3,114,250,1)] hover:scale-105 transition-all duration-300"
              >
                🚀 Send Message
              </button>

              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="w-full mt-3 py-2 rounded-full text-white font-semibold bg-gray-600/80 hover:bg-gray-700 hover:scale-105 transition-all"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
