import Banner from "../../components/banner";
import leaders from "../../assets/leaders.jpeg"
import leaders1 from "../../assets/leadership1.jpeg"
import founderImageOne from "../../assets/goal.jpeg";
import founderImageTwo from "../../assets/story.jpeg";
import { leadershipTeam } from "../../galleryConstant";




export default function Leadership() {
  return (
    <>
     
    <Banner
        eyebrow="Our Leadership"
        title="Leading With Purpose,"
        highlightedText="Serving With Impact"
        description="Meet the dedicated leaders and changemakers guiding DIP Africa’s mission to empower communities, strengthen partnerships, and create sustainable opportunities across Africa."
    />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-gray-100 bg-gray-100">
              <img
                src={leaders}
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
              Leadership & Networks
            </h2>

            <p>
              Diaspora International Platform for Africa (DIP) is driven by visionary leadership and strengthened by a dynamic global network of diaspora professionals, entrepreneurs, investors, community leaders, and partner organizations committed to Africa’s sustainable development.
            </p>

            <p>
             Our leadership provides strategic direction, governance, and oversight, ensuring that DIP remains focused on its mission of connecting and mobilizing the African diaspora for meaningful impact. Through collaboration, innovation, and accountability, our leaders work to create opportunities that advance economic growth, leadership development, and community transformation across Africa.
            </p>

            <p>
             Our network represents a diverse and growing community of individuals and organizations united by a shared commitment to Africa’s progress. By leveraging collective expertise, resources, and global connections, we foster partnerships and initiatives that empower communities, promote investment, and drive sustainable development throughout the continent and its diaspora communities worldwide.
            </p>

          </div>
        </div>
      </div>
       <section className="px-4 pb-20 md:px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Meet Our Leaders
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The People Behind{" "}
              <span className="text-emerald-700">
                DIP Africa
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {leadershipTeam.map((leader, index) => (
    <article
      key={index}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-[360px] shrink-0 overflow-hidden bg-gray-100">
        <img
          src={leader.image}
          alt={leader.name}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-gray-900">
          {leader.name}
        </h3>

        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-emerald-700">
          {leader.position}
        </p>

        <p className="mt-4 text-sm leading-6 text-gray-500">
          {leader.details}
        </p>

        <p className="mt-4 text-sm leading-6 text-gray-500">
          {leader.role}
        </p>

        <p className="mt-4 text-sm leading-6 text-gray-500">
          {leader.member}
        </p>

        <p className="mt-4 text-sm leading-6 text-gray-500">
          {leader.country}
        </p>
      </div>
    </article>
  ))}
</div>
          {/* ================================
    FOUNDER'S BIO
================================ */}
<section className="mt-24 border-t border-gray-200 pt-20">

  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="mb-12">
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">
        Leadership & Vision
      </span>

      <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#073B4C] sm:text-5xl">
        Our Founder’s{" "}
        <span className="text-emerald-700">
          Bio
        </span>
      </h2>

      <div className="mt-5 h-1 w-16 rounded-full bg-emerald-700" />
    </div>

    {/* Founder Introduction */}
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">

      {/* Founder Image */}
      <div className="lg:col-span-5">
        <div className="group relative overflow-hidden rounded-[2rem] bg-gray-100 shadow-xl">

          <img
            src={leaders1}
            alt="Dr. Seah Matilda Banga"
            className="h-[500px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 sm:h-[600px]"
          />

          {/* Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#073B4C]/80 to-transparent" />

          {/* Founder Label */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Founder & President
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              Dr. Seah Matilda Banga
            </h3>
          </div>

        </div>
      </div>

      {/* Founder Bio */}
      <div className="flex flex-col justify-center lg:col-span-7">

        <div className="space-y-5 text-sm leading-8 text-gray-600 sm:text-base">

          <p>
            Dr. Seah Matilda Banga is a transformational leader and a voice of our times. She is passionate about Africa and women’s empowerment. She has earned many awards for her advocacy in the USA and internationally. She is an author, and her new book, the untold side of her story of the Sierra Leone war, where she adopted the alias Sia Domingo, is out and ready for grabs. In addition, Chief Dr Pastor Matty is the Overseer of Destiny House Global Ministries, Corporate Governance – African Ambassadors Economic Forum, President – Diaspora International Platform. Notary Public – Commonwealth of Virginia, Host – This Time Africa Media Fellow – Obama Advocacy Fellowship, Certified Human Rights Consultant – USDIHR
          </p>

          <p>
            Throughout her career, Seah has focused on leadership, advocacy, governance, community engagement, public relations, and organizational development. As the Founder and President of the Diaspora International Platform, a U.S.-registered 501(c)(3) nonprofit organization, she has worked extensively with leaders and organizations representing more than twenty African countries to promote collaboration, civic engagement, economic empowerment, and strategic partnerships.
          </p>

          <p>
            I am particularly passionate about strengthening connections between Africa and the diaspora, promoting sustainable development, and creating opportunities that empower communities and future generations.
          </p>

        </div>

      </div>
    </div>

    {/* Founder Credentials */}
    <div className="mt-14 rounded-3xl bg-gradient-to-br from-[#EAF5EE] via-[#DCEFE3] to-[#CBE5D4] p-7 sm:p-10">

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <div>
          <p className="text-lg font-bold text-[#073B4C]">
            Dr. Seah Matilda Banga
          </p>
        </div>

        <div>
          <p className="text-sm leading-7 text-gray-600">
            Corporate Governance – African Ambassadors Economic Forum
          </p>
        </div>

        <div>
          <p className="text-sm leading-7 text-gray-600">
            President – Diaspora International Platform
          </p>
        </div>

        <div>
          <p className="text-sm leading-7 text-gray-600">
            Notary Public – Commonwealth of Virginia
          </p>
        </div>

        <div>
          <p className="text-sm leading-7 text-gray-600">
            Host – This Time Africa Media
          </p>
        </div>

        <div>
          <p className="text-sm leading-7 text-gray-600">
            Fellow – Obama Advocacy Fellowship
          </p>
        </div>

        <div>
          <p className="text-sm leading-7 text-gray-600 sm:col-span-2 lg:col-span-3">
            Certified Human Rights Consultant – USDIHR
          </p>
        </div>

      </div>

    </div>

    {/* Two Founder Images */}
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">

      {/* Image One */}
      <div className="group relative overflow-hidden rounded-3xl bg-gray-100">
        <img
          src={founderImageOne}
          alt="Dr. Seah Matilda Banga"
          className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[450px]"
        />
      </div>

      {/* Image Two */}
      <div className="group relative overflow-hidden rounded-3xl bg-gray-100">
        <img
          src={founderImageTwo}
          alt="Dr. Seah Matilda Banga"
          className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[450px]"
        />
      </div>

    </div>

  </div>

</section>
        </div>
      </section>

    </>
  );
}
