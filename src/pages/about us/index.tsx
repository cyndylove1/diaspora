import Banner from "../../components/banner";
import AboutSection from "../../components/aboutsection";
import ApproachSection from "../../components/approachSection";

export default function AboutPage() {
  
  return (
    <div className="bg-[#EBF7F0] text-[#0F2D18] antialiased min-h-screen">
      <Banner
        eyebrow="About Us"
        title="Driving Sustainable"
        highlightedText="Impact"
        description="Connecting the African diaspora to fund, support, and build sustainable solutions for vulnerable communities across the continent."
      />
      <AboutSection />
      <ApproachSection/>
    </div>
  );
}
