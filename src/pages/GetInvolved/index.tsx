import Banner from "../../components/banner";
import get from "../../assets/get.jpeg"

export default function GetInvolved() {
  return (
    <>
     
    <Banner
        eyebrow="Get Involved"
        title="Be Part of the Change"
        highlightedText="Transforming Africa"
        description="Join a growing community of people, partners, and organizations working together to create sustainable opportunities, strengthen communities, and build a brighter future across Africa."
    />


      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-gray-100 bg-gray-100">
              <img
                src={get}
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
              Get Involved
            </h2>

            <p>
              At Diaspora International Platform for Africa (DIP), we believe that every individual, organization, and institution has a role to play in shaping Africa’s future. Our strength lies in the collective knowledge, expertise, resources, and commitment of people who share our vision of a prosperous, inclusive, and sustainable Africa.
            </p>

            <p>
             There are many ways to become part of the DIP community. Whether you are a professional looking to share your expertise, an entrepreneur seeking opportunities for collaboration, an investor interested in Africa’s growth potential, a student passionate about development, a community leader committed to positive change, or an organization seeking meaningful partnerships, there is a place for you within our global network.
            </p>

            <p>
             By getting involved with DIP, you become part of a dynamic platform that connects the African diaspora with opportunities to contribute to leadership development, trade and investment, community empowerment, education, advocacy, and sustainable development initiatives across Africa. Your participation can help strengthen institutions, inspire innovation, empower communities, and create lasting impact for present and future generations.
            </p>

            <p>
              Together, we can build stronger connections between Africa and its global diaspora, leverage our collective strengths, and create transformative solutions that advance economic growth, social progress, and sustainable development throughout the continent.
            </p>

            <div className="pt-2">
              <p className="p-4 bg-gray-50 rounded-2xl border border-[#143a22]/10 inline-block font-medium">
                Join us today and become part of a global movement dedicated to unlocking the full potential of the African diaspora for Africa’s development and prosperity. Contact us at{" "}
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
