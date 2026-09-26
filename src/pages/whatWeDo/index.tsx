import heroImage from "../../assets/what.jpeg";
// Replace these with the actual images you are already using
import investmentImage from "../../assets/investment.jpeg";
import leadershipImage from "../../assets/development.jpeg";
import communityImage from "../../assets/community.jpeg";
import advocacyImage from "../../assets/advocacy.jpeg";
import Banner from "../../components/banner";

const impactAreas = [
  {
    number: "01",
    title: "Investment Facilitation",
    image: investmentImage,
    heading: "Connecting diaspora investors with sustainable ventures in Africa.",
    description:
      "We serve as a bridge connecting African diaspora investors with innovative and sustainable business ventures in Africa, helping to mobilize capital that drives economic growth, job creation, and long-term development in local communities.",
  },
  {
    number: "02",
    title: "Leadership Development",
    image: leadershipImage,
    heading: "Cultivating future leaders for Africa’s sustainable growth.",
    description:
      "Our leadership development programs aim to inspire, empower, and equip African diaspora professionals with the skills and resources needed to become transformative leaders in their communities, fostering a new generation of influencers committed to sustainable development across Africa.",
  },
  {
    number: "03",
    title: "Community Engagement",
    image: communityImage,
    heading: "Mobilizing diaspora for impactful community initiatives.",
    description:
      "We mobilize the African diaspora to engage actively in community-driven initiatives that promote social change, sustainability, and capacity building. By fostering partnerships with local organizations, we ensure that resources are directed effectively to create measurable impact in communities.",
  },
  {
    number: "04",
    title: "Advocacy and Policy Support",
    image: advocacyImage,
    heading: "Advocating for policies that support Africa’s development.",
    description:
      "We advocate for policies that prioritize sustainable development in Africa, engaging with key stakeholders to influence decision-making processes. Our work includes research, awareness campaigns, and strategic partnerships to ensure that the needs and voices of the diaspora are heard in policy discussions.",
  },
];

export default function WhatWeDo() {
  return (
   <div>
    <Banner
    eyebrow="What We Do"
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
            Empowering Africa Through Strategic Collaboration and Support
        </h1>
        
        </div>

        {/* Right Hero Image Card (Slots for photo) */}
        <div className="lg:col-span-6 relative">
        <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            <img
            src={heroImage}
            alt="Diaspora Team"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
        </div>
    </div>
    </section>
    <section className="bg-gradient-to-br from-[#EAF5EE] via-[#DCEFE3] to-[#CBE5D4] px-4 py-16 md:px-6 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            What We Do
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#073B4C] sm:text-5xl">
            Creating Opportunities That{" "}
            <span className="text-emerald-700">
              Drive Change
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Our work connects people, resources, leadership, and communities
            to create sustainable development opportunities across Africa.
          </p>
        </div>

        {/* Areas */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {impactAreas.map((item) => (
            <article
              key={item.number}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden sm:h-[320px]">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="h-[] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#073B4C]/80 via-transparent to-transparent" />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-emerald-700 shadow-lg">
                  {item.number}
                </div>

                {/* Title over image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">

                <h4 className="text-lg font-bold leading-7 text-[#073B4C] sm:text-xl">
                  {item.heading}
                </h4>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {item.description}
                </p>

                

              </div>
            </article>
          ))}
        </div>

      </div>
      </section>
   </div> 
  );
}