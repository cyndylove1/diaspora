import { Link } from "react-router-dom";
import heroImage from "../assets/vecteezy_hands-holding-plant-environmental-protection-concept_73062270.jpg";
import Button from "./button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F8F4] via-[#E6F3EB] to-[#D8ECE0] py-16 md:pt-[9rem] md:pb-24 px-6 sm:px-10 lg:px-16 min-h-[620px] flex items-center">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Text Column */}
        <div className="flex flex-col justify-center max-w-xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-emerald-600 inline-block" />
            <span className="text-emerald-800 text-lg sm:text-xl font-medium">
              Connecting Africa’s Diaspora
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-950 tracking-tight leading-[1.1] mb-6 flex flex-wrap items-center gap-x-3">
            <span>Connecting Africa’s Diaspora for Change</span>
          </h1>

          <p className="text-emerald-900/80 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-lg">
            Empowering the African diaspora to engage in sustainable development
            initiatives, fostering partnerships and investment for Africa’s
            future.
          </p>

          <div className="flex items-center gap-5">
            <Link to="/get-involved">
              <Button label="Get Involved" />
            </Link>
          </div>
        </div>

        {/* Right Image Column: Organic Curved Pebble Shape */}
        <div className="w-full flex items-center justify-center relative">
          <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
            {/* Offset Decorative Backing Layer */}
            <div
              className="absolute inset-0 bg-emerald-200/70 translate-x-4 translate-y-4 scale-95 shadow-inner transition-all duration-500"
              style={{
                borderRadius: "60% 40% 50% 50% / 40% 50% 50% 60%",
              }}
            />

            {/* Emerald Border Frame Layer */}
            <div
              className="absolute inset-0 bg-emerald-700 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              style={{
                borderRadius: "50% 50% 40% 60% / 50% 40% 60% 50%",
              }}
            >
              {/* Image Container with Organic Radius */}
              <div
                className="w-full h-full overflow-hidden bg-emerald-900"
                style={{
                  borderRadius: "48% 48% 38% 58% / 48% 38% 58% 48%",
                }}
              >
                <img
                  src={heroImage}
                  alt="Hands holding plant representing African environmental growth"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
