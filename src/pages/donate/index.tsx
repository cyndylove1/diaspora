import Banner from "../../components/banner";
import donate from "../../assets/donate.jpeg"

export default function Donate() {
  return (
    <>
      <Banner
        eyebrow="Support Our Cause"
        title="Empower Communities Through"
        highlightedText="Generosity"
        description="Your donation directly funds sustainable development projects, education, and essential resources that restore dignity and transform lives across Africa."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-gray-100 bg-gray-100">
              <img
                src={donate}
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
              Donate
            </h2>

            <p>
              At Diaspora International Platform for Africa (DIP), we believe
              that meaningful change happens when people come together with a
              shared commitment to creating opportunities and transforming
              lives. Your support enables us to strengthen diaspora engagement,
              develop leaders, promote trade and investment, empower
              communities, and advance sustainable development initiatives
              across Africa.
            </p>

            <p>
              Every contribution to DIP is an investment in people,
              partnerships, and progress. Through your generosity, we can expand
              our programs, support capacity-building initiatives, facilitate
              educational and leadership opportunities, foster innovation and
              entrepreneurship, and create platforms that connect the African
              diaspora with impactful development opportunities throughout the
              continent.
            </p>

            <p>
              Your donation also helps us build stronger institutions, mobilize
              resources for community-based projects, organize forums and
              engagement initiatives, and create pathways for individuals and
              organizations to contribute their expertise and resources toward
              Africa’s growth and development. Together, we can inspire positive
              change, strengthen communities, and promote long-term solutions
              that benefit present and future generations.
            </p>

            <p>
              No contribution is too small. Every act of giving brings us one
              step closer to our vision of a globally connected diaspora working
              together to advance a prosperous, resilient, and sustainable
              Africa.
            </p>

            <div className="pt-2">
              <p className="p-4 bg-gray-50 rounded-2xl border border-[#143a22]/10 inline-block font-medium">
                Support our mission today by making a donation and become a
                valued partner in driving transformative change across Africa.
                Contact us at{" "}
                <a
                  href="mailto:donate@dip4africa.org"
                  className="underline text-[#143a22] font-medium hover:opacity-80 transition-opacity"
                >
                  donate@dip4africa.org
                </a>{" "}
                to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
