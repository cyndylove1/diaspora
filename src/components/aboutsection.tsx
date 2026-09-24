import about1 from "../assets/WhatsApp.jpeg";
import about2 from "../assets/WhatsApp Image 2026-.jpeg";

interface AboutSectionProps {
  badgeText?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  paragraph1?: string;
  paragraph2?: string;
  imageLeftUrl?: string;
  imageRightUrl?: string;
}

export default function AboutSection({
  titlePrefix = "DIP: Connecting the African Diaspora for Sustainable Development",
  titleSuffix = "",
  paragraph1 = "Diaspora International Platform for Africa fosters connections among diaspora professionals to enhance development and community impact across Africa.",
  paragraph2 = "By mobilizing global resources, knowledge, and strategic partnerships, we empower local initiatives that drive long-term social growth, economic stability, and sustainable change throughout the continent.",
  imageLeftUrl = about1,
  imageRightUrl = about2,
}: AboutSectionProps) {
  return (
    <section className="bg-[#FAF9F6] py-16 md:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-6 leading-[1.2]">
            {titlePrefix} {titleSuffix && ` ${titleSuffix}`}
          </h2>

          {/* Description Paragraphs */}
          <div className="text-[#555048] text-base md:text-lg font-normal leading-relaxed space-y-4 max-w-xl">
            <p>{paragraph1}</p>
            {paragraph2 && <p>{paragraph2}</p>}
          </div>
        </div>

        {/* Right Column: Dual Images */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end gap-4 sm:gap-4">
          {/* Image 1: Color / Staggered Down slightly */}
          <div className="w-1/2 max-w-[240px] sm:max-w-[280px] aspect-[3/4] rounded-lg overflow-hidden shadow-sm transform translate-y-4">
            <img
              src={imageLeftUrl}
              alt="Initiative beneficiaries"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2: Black & White / Tall Aspect Ratio */}
          <div className="w-1/2 max-w-[240px] sm:max-w-[280px] aspect-[3/4] rounded-lg overflow-hidden shadow-sm">
            <img
              src={imageRightUrl}
              alt="Children smiling"
              className="w-full h-full object-cover filter grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
