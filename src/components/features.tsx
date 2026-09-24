import { Globe, Handshake, Sparkles } from "lucide-react";

export default function Features() {
  const featureList = [
    {
      title: "Global Network Hub",
      desc: "Join a powerful network of diaspora professionals and leaders who are committed to driving change and opportunities in Africa through partnership and collaboration.",
      icon: Globe,
    },
    {
      title: "Sustainable Investment",
      desc: "We prioritize initiatives that promote economic growth and sustainability, ensuring that your contributions lead to meaningful change within African communities.",
      icon: Sparkles,
    },
    {
      title: "Strategic Partnerships",
      desc: "Our organization fosters strategic alliances between diaspora members and local entities, maximizing resources and expertise for impactful community development.",
      icon: Handshake,
    },
  ];

  return (
    <section
      id="features"
      className="py-20 relative bg-[#F4FAF6] overflow-hidden"
    >
      {/* Colorful Background Ambient Blobs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#A2E0B8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#E2F1A7]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#184E2A] tracking-tight">
            Why We Make A Difference
          </h2>
          <p className="text-[#2D4D38] max-w-2xl mx-auto pt-4">
            With a focus on collaboration, trust, and impactful initiatives, we
            bridge the gap between the diaspora and Africa’s development
            opportunities.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featureList.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2ECE5] shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#184E2A]/10 hover:border-[#BCE3C8] group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-[#C1EAD0]/60 flex items-center justify-center mb-8 group-hover:bg-[#C1EAD0] transition-colors duration-300">
                    <IconComp className="w-7 h-7 text-[#184E2A]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-2xl font-semibold text-[#184E2A] mb-4 tracking-tight">
                    {feat.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-gray-600 text-base leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
