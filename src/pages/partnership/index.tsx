import Banner from "../../components/banner";
import partnership from "../../assets/partnership.jpeg"

export default function Partnership() {
  return (
    <>
     
    <Banner
        eyebrow="Our Partnerships"
        title="Building Stronger,"
        highlightedText="Together"
        description="We collaborate with organizations, businesses, communities, and individuals who share our commitment to empowering people, strengthening communities, and advancing sustainable development across Africa."
    />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-gray-100 bg-gray-100">
              <img
                src={partnership}
                alt="Community members benefiting from local development programs"
                className="w-full h-[400px] lg:h-[580px] object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Optional subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Side: Narrative Content */}
          <div className="lg:col-span-7 space-y-5 leading-relaxed text-[#1A1A1A]">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827] leading-[1.2]">
              Partnership
            </h2>

            <p>
              At Diaspora International Platform for Africa (DIP), we recognize that meaningful and sustainable development is built on the foundation of strong partnerships, shared vision, and collective action. No single organization can address Africa’s opportunities and challenges alone. For this reason, we actively foster strategic collaborations that bring together the expertise, resources, and networks of diverse stakeholders committed to advancing Africa’s growth and transformation.
            </p>

            <p>
            We welcome partnerships with governments, international development agencies, businesses, foundations, academic institutions, civil society organizations, and diaspora communities across the world. Through these collaborations, we seek to create innovative and impactful initiatives that promote economic growth, trade and investment, leadership development, education, community empowerment, and sustainable social development.
            </p>

            <p>
             Our partnership approach is founded on mutual respect, accountability, inclusiveness, and a shared commitment to delivering measurable and lasting impact. By leveraging the strengths and capabilities of our partners, we create opportunities that empower individuals and communities, strengthen institutions, and enhance the contribution of the African diaspora to Africa’s development agenda.
            </p>
            <p>Whether through program implementation, knowledge exchange, resource mobilization, capacity building, policy engagement, investment initiatives, or community-based projects, DIP remains committed to building enduring partnerships that bridge Africa and its global diaspora. Together, we can unlock new opportunities, inspire innovation, and create transformative solutions that contribute to a more prosperous, resilient, and sustainable future for Africa and its people</p>
            <div className="pt-2">
              <p className="p-4 bg-gray-50 rounded-2xl border border-[#143a22]/10 inline-block font-medium">
                Contact us at {" "}
                <a
                  href="mailto:donate@dip4africa.org"
                  className="underline text-[#143a22] font-medium hover:opacity-80 transition-opacity"
                >
                  donate@dip4africa.org
                </a>{" "}
                to explore partnership opportunities with Diaspora International Platform for Africa (DIP).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
