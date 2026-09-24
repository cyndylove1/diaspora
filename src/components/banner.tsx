import React from "react";

interface BannerProps {
  eyebrow: string;
  title: string;
  highlightedText?: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({
  eyebrow,
  title,
  highlightedText,
  description,
}) => {
  return (
    <section className="relative min-h-[400px] py-20 overflow-hidden bg-gradient-to-b from-[#F2F8F4] via-[#E6F3EB] to-[#a5d0bf] ">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#e7f1ec_0%,#d8e9e1_45%,#c3e5d7_100%)]" />

      {/* Soft glow */}
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#bfe8d8]/40 blur-3xl" />

      {/* Grid - right side */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[45%] opacity-[0.28]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(0, 96, 69, 0.22) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(0, 96, 69, 0.22) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Grid fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[50%] bg-gradient-to-r from-[#dcece4] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[400px] max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Eyebrow */}
        <div className="pt-10 flex items-center gap-4">
          <span className="h-px w-16 bg-[#006045]" />

          <span className="text-sm font-semibold uppercase tracking-[0.45em] text-[#006045]">
            {eyebrow}
          </span>

          <span className="h-px w-16 bg-[#006045]" />
        </div>

        {/* Heading */}
        <h1 className="max-w-3xl text-3xl font-medium leading-[1.05] tracking-[-0.035em] text-[#003c31] sm:text-6xl md:text-7xl lg:text-5xl pt-4">
          {title}{" "}
          {highlightedText && (
            <span className="text-[#006045]">{highlightedText}.</span>
          )}
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[#287467] sm:text-xl md:text-[22px]">
          {description}
        </p>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-[-180px] left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[#bfe8d8]/50 blur-3xl" />
    </section>
  );
};

export default Banner;
