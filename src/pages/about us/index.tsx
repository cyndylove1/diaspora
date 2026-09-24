import {
  Check,
  Target,
  Eye,
  Heart,
  Shield,
  Award,
  Sparkles,
  Globe2,
} from "lucide-react";

import aboutHeroImg from "../../assets/about.jpeg";
import introSectionImg from "../../assets/pexels-akh-taufiq-202388902-15311442.jpg";
import missionVisionImg from "../../assets/vecteezy_hands-holding-plant-environmental-protection-concept_73062270.jpg";
import Banner from "../../components/banner";
import AboutSection from "../../components/aboutsection";
import ApproachValuesSection from "../../components/approachSection";
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
