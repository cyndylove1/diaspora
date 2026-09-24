import approach1 from "../assets/WhatsApp Image 2026-09-21 at 14.39.42.jpeg";
import approach2 from "../assets/WhatsApp Image.jpeg";
import {
  Target,
  Eye,
  Heart,
  Users,
  Compass,
  Award,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";




interface ApproachValuesProps {
  approachImageUrl?: string;
  missionVisionImageUrl?: string;
}

export default function ApproachValuesSection({
  approachImageUrl = approach1,
  missionVisionImageUrl = approach2,
}: ApproachValuesProps) {
  return (
    <div className="bg-gradient-to-br from-[#EAF5EE] via-[#DCEFE3] to-[#CBE5D4] py-20 px-6 sm:px-10 lg:px-16 space-y-24 overflow-hidden text-[#111827]">
      {/* 1. OUR APPROACH SECTION */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D2B3A] mb-4">
            Our Approach
          </h2>
          <div className="w-12 h-1 bg-[#0D2B3A] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            At Diaspora International Platform for Africa (DIP4), we believe
            that the African diaspora represents a catalyst for sustainable
            development and economic growth across the continent. Our approach
            centers on creating a structured, inclusive platform where African
            professionals, entrepreneurs, and allies can contribute their
            skills, expertise, and resources to empower local communities.
            Through strategic partnerships, capacity-building initiatives,
            advocacy, and direct investment, we bridge the gap between the
            diaspora and local stakeholders to drive long-term, scalable impact
            across the continent.
          </p>
        </div>

        {/* Approach Showcase Card with Hover Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-emerald-900/10 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#0D2B3A]/30 transition-all duration-300 group">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-[#0D2B3A] group-hover:text-emerald-700 transition-colors duration-300">
              Driving Scalable & Sustainable Impact
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We empower African diaspora members to become key drivers in
              Africa's growth trajectory. By creating pathways for knowledge
              exchange and direct collaborative action, our platform guarantees
              that continental growth is locally rooted and globally supported.
            </p>
          </div>
          <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
            <img
              src={approachImageUrl}
              alt="Our Approach Image"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 2. OUR MISSION & VISION SECTION */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Mission & Vision Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Mission Card with Hover */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-900/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#0D2B3A]/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#0D2B3A]/10 rounded-2xl text-[#0D2B3A] group-hover:bg-[#0D2B3A] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D2B3A]">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To connect, empower, and mobilize the African diaspora to drive
                sustainable development, economic self-reliance, and social
                advancement across Africa. We facilitate knowledge transfer,
                trade, and investment, supporting local solutions to African
                challenges while building a strong, unified diaspora network.
              </p>
            </div>

            {/* Vision Card with Hover */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-900/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#0D2B3A]/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#0D2B3A]/10 rounded-2xl text-[#0D2B3A] group-hover:bg-[#0D2B3A] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D2B3A]">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To be the leading global network that unlocks the power of the
                African Diaspora to drive sustainable development, economic
                growth, and social innovation across Africa. We envision an
                empowered continent actively shaping its own future through
                strong, enduring partnerships between the diaspora and local
                communities.
              </p>
            </div>
          </div>

          {/* Dedicated Section Image Slot with Image Zoom Hover */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-lg border-4 border-white min-h-[300px] group">
            <img
              src={missionVisionImageUrl}
              alt="Mission and Vision"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D2B3A] mb-3">
            Core Values
          </h2>
          <div className="w-12 h-1 bg-[#0D2B3A] mx-auto rounded-full" />
        </div>

        {/* 6 Grid Cards with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Value 1 */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#0D2B3A]/40 transition-all duration-300 group">
            <div className="p-3 bg-[#0D2B3A]/10 rounded-xl text-[#0D2B3A] w-fit mb-4 group-hover:bg-[#0D2B3A] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#0D2B3A] mb-2 group-hover:text-emerald-700 transition-colors">
              Collaboration
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              We believe in the power of partnership and collective action to
              achieve maximum impact.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#0D2B3A]/40 transition-all duration-300 group">
            <div className="p-3 bg-[#0D2B3A]/10 rounded-xl text-[#0D2B3A] w-fit mb-4 group-hover:bg-[#0D2B3A] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#0D2B3A] mb-2 group-hover:text-emerald-700 transition-colors">
              Integrity
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              We operate with transparency, accountability, and standard of
              ethics in everything we do.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#0D2B3A]/40 transition-all duration-300 group">
            <div className="p-3 bg-[#0D2B3A]/10 rounded-xl text-[#0D2B3A] w-fit mb-4 group-hover:bg-[#0D2B3A] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#0D2B3A] mb-2 group-hover:text-emerald-700 transition-colors">
              Excellence
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              We are committed to delivering high-quality programming that
              creates long-term value for communities.
            </p>
          </div>

          {/* Value 4 */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#0D2B3A]/40 transition-all duration-300 group">
            <div className="p-3 bg-[#0D2B3A]/10 rounded-xl text-[#0D2B3A] w-fit mb-4 group-hover:bg-[#0D2B3A] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#0D2B3A] mb-2 group-hover:text-emerald-700 transition-colors">
              Inclusion
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              We value diverse perspectives and ensure equal participation
              across gender, generation, and geography.
            </p>
          </div>

          {/* Value 5 */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#0D2B3A]/40 transition-all duration-300 group">
            <div className="p-3 bg-[#0D2B3A]/10 rounded-xl text-[#0D2B3A] w-fit mb-4 group-hover:bg-[#0D2B3A] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#0D2B3A] mb-2 group-hover:text-emerald-700 transition-colors">
              Empowerment
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              We equip individuals and organizations with resources to drive
              local solutions to local, national, and regional challenges.
            </p>
          </div>

          {/* Value 6 */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#0D2B3A]/40 transition-all duration-300 group">
            <div className="p-3 bg-[#0D2B3A]/10 rounded-xl text-[#0D2B3A] w-fit mb-4 group-hover:bg-[#0D2B3A] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#0D2B3A] mb-2 group-hover:text-emerald-700 transition-colors">
              Sustainability
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              We prioritize initiatives that create lasting, self-sustaining
              economic and social impact across generations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
