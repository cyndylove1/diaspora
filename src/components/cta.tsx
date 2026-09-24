import ctaBackgroundImg from "../assets/vecteezy_hands-holding-plant-environmental-protection-concept_73062270.jpg";
import { Sparkles } from "lucide-react";
import Button from "./button";
import { Link } from "react-router-dom";



export default function CTA() {
  return (
    <section className="py-8 sm:py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="">
        {/* Main CTA Card */}
        <div className="group relative w-full overflow-hidden shadow-xl border border-white/20 transition-all duration-500 hover:shadow-2xl">
          {/* Background Image with Zoom Effect */}
          <img
            src={ctaBackgroundImg}
            alt="Environmental protection concept hands holding plant"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          {/* Multi-Layer Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B3A]/95 via-[#143a22]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Decorative Glowing Accent Blobs */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-10 w-60 h-60 bg-[#143a22]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Compact Content Grid */}
          <div className="relative z-10 py-10 px-8 sm:py-12 sm:px-12 lg:py-14 lg:px-16 flex flex-col items-start justify-center max-w-3xl space-y-4">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white backdrop-blur-md  text-[#1a1a1a] text-[10px] font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Make an Impact Today</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Join the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-white">
                Hope for All
              </span>{" "}
              Movement
            </h2>

            {/* Supporting Description */}
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Partner with us to create sustainable opportunities, empower local
              African communities, and build a lasting legacy together.
            </p>

            {/* Interactive Button */}
            <div className="pt-1">
              <Link to="/get-involved">
                <Button label="Get Involved" textColor="text-[#1a1a1a]" bgColor="bg-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
