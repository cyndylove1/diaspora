import Hero from "../../components/hero";
import WhoWeAre from "../../components/WhoWeAre";
import ImpactMetrics from "../../components/impactMetrics";
import Features from "../../components/features";
import JoinTeam from "../../components/joinTeam";
import ImpactStories from "../../components/impactStories";
import Testimonials from "../../components/testimonial";


export default function Home() {
  
  return (
    <>
      <main>
        <Hero/>
        <ImpactMetrics />
        <WhoWeAre />
        <Features />
        <JoinTeam />
        <ImpactStories />
        <Testimonials/>
      </main>
    </>
  );
}

