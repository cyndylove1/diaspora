
import { useState } from "react";
import footerlogo from "../assets/women.jpg"
import {
  Send,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter, FaSquareInstagram } from "react-icons/fa6";
import Logo from "./logo";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");

      setTimeout(() => {
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-emerald-700 text-gray-400">
      {/* Decorative Background */}
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-700/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#D4AF37]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
          <Logo />

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-200">
              Diaspora International Platform for Africa. Connecting global
              expertise, sustainable investments, and strategic networks to
              accelerate Africa&apos;s economic transformation.
            </p>

            {/* Contact */}
            <div className="mt-7 space-y-3 text-xs">
              <div className="flex items-center gap-3 text-gray-200">
                <div className="p-2 rounded-full border border-white">
                  <Mail className="h-4 w-4" />
                </div>
                
                <span>info@dipafrica.org</span>
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                <div className="p-2 rounded-full border border-white">
                  <MapPin className="h-4 w-4"/>
                </div>
                
                <span>Connecting Africa to the Global Diaspora</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white text-gray-900 transition-all hover:border-white hover:bg-transparent hover:text-white"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white text-gray-900 transition-all hover:border-white hover:bg-transparent hover:text-white"
              >
                <FaSquareTwitter className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white text-gray-900 transition-all hover:border-white hover:bg-transparent hover:text-white"
              >
                <FaSquareInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Platform
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="/"
                  className="group flex items-center text-gray-100 gap-1 transition-colors hover:text-gray-200"
                >
                  Home
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="group flex items-center text-gray-100 gap-1 transition-colors hover:text-gray-200"
                >
                  About Us
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>

              <li>
                <a
                  href="/blog"
                  className="group flex items-center text-gray-100 gap-1 transition-colors hover:text-gray-200"
                >
                  Blog
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="group flex text-gray-100 items-center gap-1 transition-colors hover:text-gray-200"
                >
                  Contact
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>

              <li>
                <a
                  href="/donate"
                  className="group flex text-gray-100 items-center gap-1 transition-colors hover:text-gray-200"
                >
                  Donate
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="group flex text-gray-100 items-center gap-1 transition-colors hover:text-gray-200"
                >
                  Gallery
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Resources
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="/get-involved"
                  className=" text-gray-100 transition-colors hover:text-gray-200"
                >
                  Get Involved
                </a>
              </li>

              <li>
                <a
                  href="/impact"
                  className="transition-colors text-gray-100 hover:text-gray-200"
                >
                  Impact
                </a>
              </li>

              <li>
                <a
                  href="/leadership"
                  className="transition-colors text-gray-100 hover:text-gary-200"
                >
                  Leadership & Network
                </a>
              </li>

              <li>
                <a
                  href="/partnership"
                  className="transition-colors text-gray-100 hover:text-gray-200"
                >
                  Partnership
                </a>
              </li>
              <li>
                <a
                  href="/what-we-do"
                  className="transition-colors text-gray-100 hover:text-gray-200"
                >
                  What We Do
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-[#D4AF37]/15 bg-white p-6">
              <div className="mb-5">
                <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">
                  Stay Connected
                </span>

                <h4 className="font-serif text-xl font-bold text-[#1a1a1a]">
                  Join Our Community
                </h4>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Get updates about diaspora opportunities, investments,
                  partnerships, and projects across Africa.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-3 ">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNewsletterEmail(e.target.value)
                    }
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-xs text-[#1a1a1a] outline-none transition-all placeholder:text-gray-600 focus:border-emerald-700 focus:ring-1 focus:ring-[#D4AF37]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:scale-[1.01] hover:from-[#E5C65A] hover:to-[#D4AF37]"
                >
                  Subscribe
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>

              {subscribed && (
                <p className="mt-3 text-xs font-medium text-emerald-400">
                  ✓ Thank you! You&apos;re now subscribed.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 py-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-200">
            © 2026 Diaspora International Platform for Africa.
            <span className="hidden sm:inline"> All Rights Reserved.</span>
          </p>
          <div className="flex items-center gap-2">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 bg-white ">
              <img
                src={footerlogo}
                alt="Diaspora Team"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-200">
                Women Federation for World Peace
              <span className="hidden sm:inline"> All Rights Reserved.</span>
            </p>

          </div>
          

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition-colors text-gray-100 hover:text-gray-200"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors text-gray-100 hover:text-gray-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

