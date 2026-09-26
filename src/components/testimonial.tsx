import { Quote, Star } from "lucide-react";
// import bgImage from "../assets/partners.jpg";___

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "They bridge the gap between the diaspora and local initiatives seamlessly, making them our most trusted ally for sustainable development in Africa.",
      author: "SLFF Foundation",
      rating: 5,
    },
    {
      quote:
        "Partnering with this platform allowed us to channel resources directly to grassroots projects, creating measurable change in African communities faster than ever before",
      author: "HIHF Int'l",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 px-4 md:px-6 lg:px-16 bg-gradient-to-b from-[#EAF5EE] via-[#E6F3EB] to-[#DCEFE3] text-white overflow-hidden">

      {/* Decorative Emerald Rays & Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Centered Top Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-700/20 border border-emerald-700/40 text-emerald-300 text-xs font-semibold uppercase tracking-widest">
            <Quote className="w-3.5 h-3.5 text-emerald-400" />
            <span>Partner Impact</span>
          </div> */}


          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1a1a1a] tracking-tight leading-tight">
            What Our{" "}
            <span className="">
              Partners Say
            </span>
          </h2>
        </div>

        {/* 2-Column Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white border border-emerald-700/30 hover:border-emerald-500 transition-all duration-500 shadow-2xl hover:shadow-emerald-900/30 hover:-translate-y-1.5"
            >
              {/* Giant Background Accent Quote Mark */}
              <div className="absolute top-6 right-8 text-emerald-700/10 group-hover:text-emerald-500/20 transition-colors duration-500 pointer-events-none">
                <Quote className="w-20 h-20" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[#1a1a1a] text-base sm:text-lg leading-relaxed font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-8 mt-6 border-t border-emerald-700/30 flex items-center justify-between relative z-10">
                <div>
                  <h4 className="font-bold text-white text-base tracking-wide">
                    {item.author}
                  </h4>
                  <p className="text-xs text-emerald-400 font-medium mt-0.5">
                    Verified Strategic Partner
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-emerald-700/20 border border-emerald-700/50 flex items-center justify-center text-emerald-300 text-xs font-bold">
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
