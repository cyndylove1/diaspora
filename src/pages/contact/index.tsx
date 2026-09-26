import React, { useState } from "react";
import contactImage from "../../assets/contactimage.jpeg";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter, FaSquareInstagram } from "react-icons/fa6";
import Banner from "../../components/banner";
import Button from "../../components/button";
import LocationMap from "../../components/locationMap";

interface ContactSectionProps {
  heroTitle?: string;
  heroSubtitle?: string;
  heroImageUrl?: string;
  phone?: string;
  email?: string;
  address?: string;
}

export default function Contact({
  heroTitle = "We’d Love to Hear from You Today",
  heroSubtitle = "Connect with us to learn more about our initiatives, partnership opportunities, or any inquiries you may have. Your feedback and support are vital to our mission of driving sustainable development across Africa.",
  heroImageUrl = contactImage,
  phone = "+1 571 405 8621",
  email = "info@dip4africa.org",
  address = "22936 Fleet Terrace Sterling, VA 20166 United States",
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submit logic
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="text-[#111827]">
      <Banner
        eyebrow="Contact Us"
        title="Let’s Build a Brighter"
        highlightedText="Future Together"
        description="Have questions, partnership ideas, or want to get involved? Reach out to our team today and help us drive lasting change across Africa."
      />
      {/* 1. HERO BANNER SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Title */}
          <div className="lg:col-span-6 space-y-4">
            {/* <span className="inline-block bg-[#0D2B3A]/10 text-[#0D2B3A] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Contact Us
            </span> */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0D2B3A] leading-tight tracking-tight">
              {heroTitle}
            </h1>
            <p className="text-[#555048] text-base sm:text-lg max-w-xl leading-relaxed">
              Have questions or want to collaborate? Reach out to our team today
              and let's make an impact together.
            </p>
          </div>

          {/* Right Hero Image Card (Slots for photo) */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src={heroImageUrl}
                alt="Diaspora Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FORM & CONTACT DETAILS SECTION */}
      <section className="bg-gradient-to-br from-[#EAF5EE] via-[#DCEFE3] to-[#CBE5D4]">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-3xl border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#0D2B3A]/10 rounded-2xl text-[#0D2B3A]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0D2B3A]">
                  Send Us a Message
                </h3>
                <p className="text-xs text-gray-500">
                  Fill out the form below and we will respond shortly.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-[#FAF9F6] border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D2B3A] focus:bg-white focus:outline-none transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-[#FAF9F6] border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D2B3A] focus:bg-white focus:outline-none transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-[#FAF9F6] border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D2B3A] focus:bg-white focus:outline-none transition-all text-sm resize-none"
                  required
                />
              </div>

              <Button label="Submit" className="w-full" />
            </form>
          </div>

          {/* Right Column: Contact Information */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0D2B3A] mb-3">
                Get in Touch
              </h2>
              <div className="w-12 h-1 bg-emerald-700 rounded-full mb-6" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {heroSubtitle}
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="p-3 bg-[#008080]/10 text-[#008080] rounded-xl group-hover:bg-emerald-700 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Phone
                  </h4>
                  <a
                    href={`tel:${phone}`}
                    className="text-base font-bold text-[#0D2B3A] hover:text-[#008080] transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="p-3 bg-[#008080]/10 text-[#008080] rounded-xl group-hover:bg-emerald-700 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Email
                  </h4>
                  <a
                    href={`mailto:${email}`}
                    className="text-base font-bold text-[#0D2B3A] hover:text-[#008080] transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="p-3 bg-[#008080]/10 text-[#008080] rounded-xl group-hover:bg-emerald-700 group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Address
                  </h4>
                  <p className="text-base font-bold text-[#0D2B3A] leading-snug">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-md font-bold text-[#0D2B3A] mb-4">
                Follow us:
              </h4>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="#"
                  className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-white hover:bg-emerald-700 hover:-translate-y-1 transition-all shadow-sm flex items-center justify-center shrink-0"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5 shrink-0" />
                </a>

                <a
                  href="#"
                  className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-white hover:bg-emerald-700 hover:-translate-y-1 transition-all shadow-sm flex items-center justify-center shrink-0"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5 shrink-0" />
                </a>

                <a
                  href="#"
                  className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-white hover:bg-emerald-700 hover:-translate-y-1 transition-all shadow-sm flex items-center justify-center shrink-0"
                  aria-label="X / Twitter"
                >
                  <FaSquareTwitter className="w-5 h-5 shrink-0" />
                </a>

                <a
                  href="#"
                  className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-white hover:bg-emerald-700 hover:-translate-y-1 transition-all shadow-sm flex items-center justify-center shrink-0"
                  aria-label="Instagram"
                >
                  <FaSquareInstagram className="w-5 h-5 shrink-0" />
                </a>

                <a
                  href="#"
                  className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-white hover:bg-emerald-700 hover:-translate-y-1 transition-all shadow-sm flex items-center justify-center shrink-0"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <LocationMap/>
    </div>
  );
}
