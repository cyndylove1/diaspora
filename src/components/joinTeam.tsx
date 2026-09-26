import { Check } from "lucide-react";
import changemakersImg from "../assets/impact39.jpeg";
import supportImg from "../assets/impact24.jpeg";
import Button from "./button";
import { Link } from "react-router-dom";

export default function JoinUs() {
  const changemakerPoints = [
    "Participate in community development drives and impact programs",
    "Work with local teams to empower vulnerable communities",
    "Gain hands-on field experience and make a tangible difference",
  ];

  const supportPoints = [
    "Directly fund education, healthcare, and sustainable growth initiatives",
    "Ensure transparent resource distribution for grassroots projects",
    "Receive regular impact reports on communities you empower",
  ];

  return (
    <section className=" bg-white py-16 sm:py-24 px-4 md:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl bg-[#143a22] mx-auto space-y-20 lg:space-y-28 md:p-14 p-6 rounded-2xl">
        {/* Section 1: Text Left / Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Block */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-medium text-white tracking-tight leading-tight mb-8">
              Join Our Team <br /> of Changemakers
            </h2>

            {/* Checklist */}
            <ul className="space-y-5 mb-10">
              {changemakerPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span className="text-gray-50 text-base sm:text-lg font-light leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <Link to="/get-involved">
              <Button
                label="Get Involved"
                textColor="text-[#1a1a1a]"
                bgColor="bg-white"
              />
            </Link>
          </div>

          {/* Right Image Container */}
          <div className="w-full h-[320px] sm:h-[420px] lg:h-[460px] rounded-3xl overflow-hidden shadow-lg border-2 border-white/20">
            <img
              src={changemakersImg}
              alt="Non-profit volunteers working together in a rural community"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Section 2: Image Left / Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image Container */}
          <div className="w-full h-[320px] sm:h-[420px] lg:h-[460px] rounded-3xl overflow-hidden shadow-lg border-2 border-white/20 order-2 lg:order-1">
            <img
              src={supportImg}
              alt="Hands holding young plant in soil representing support and growth"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text Block */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-medium text-white tracking-tight leading-tight mb-8">
              Your Support Makes <br /> a Lasting Difference
            </h2>

            {/* Checklist */}
            <ul className="space-y-5 mb-10">
              {supportPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span className="text-gray-50 text-base sm:text-lg font-light leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <Link to="/donate">
              <Button
                label="Donate Today"
                textColor="text-[#1a1a1a]"
                bgColor="bg-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
