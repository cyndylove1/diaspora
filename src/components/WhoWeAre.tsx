import { Link } from "react-router-dom";
import whoWeAreImage from "../assets/about.jpeg";
import Button from "./button";



export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden bg-gradient-to-br from-[#EAF5EE] via-[#DCEFE3] to-[#CBE5D4]"
    >
      {/* Background Colorful Gradient Blobs */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#2B7044]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-[450px] h-c bg-[#A0E2B6]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Hover Effect */}
          <div className="w-full h-full flex justify-center">
            <div className="group relative w-full aspect-square max-w-[540px] rounded-3xl overflow-hidden shadow-xl shadow-[#1B4D2E]/10 hover:shadow-2xl hover:shadow-[#1B4D2E]/20 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer">
              <img
                src={whoWeAreImage}
                alt="Volunteers engaging in community environmental work"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Optional Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#184E2A]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center max-w-xl">
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#184E2A] tracking-tight mb-6">
              Who Are We?
            </h2>

            {/* Description Body */}
            <p className="text-[#2D4D38] text-base sm:text-lg leading-relaxed font-normal mb-8">
              Diaspora International Platform for Africa (DIP) is a nonprofit
              organization dedicated to uniting the African diaspora in support
              of sustainable development across Africa. DIP mobilizes
              professionals, investors, and community leaders to create lasting
              change in Africa through strategic partnerships.
            </p>

            {/* Action Button */}
            <Link to="/about">
              <Button label="Read More" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
