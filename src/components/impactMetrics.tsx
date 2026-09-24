import { useState, useEffect, useRef } from "react";

export default function ImpactMetrics() {
  const [counts, setCounts] = useState({
    lives: 0,
    meals: 0,
    student: 0,
    homes: 0,
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      lives: 107,
      meals: 1100,
      student: 457,
      homes: 82,
    };
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        lives: Math.floor(targets.lives * progress),
        meals: Math.floor(targets.meals * progress),
        student: Math.floor(targets.student * progress),
        homes: Math.floor(targets.homes * progress),
      });

      if (step >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  const metrics = [
    {
      label: "Lives Transformed",
      count: counts.lives,
    },
    {
      label: "Meals Distributed",
      count: counts.meals,
    },
    {
      label: "Students Sponsored",
      count: counts.student,
    },
    {
      label: "Homes Built",
      count: counts.homes,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="py-12 bg-white px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto bg-emerald-700 rounded-[2rem] p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-center">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center"
            >
              <p className="text-white text-3xl sm:text-5xl lg:text-5xl font-semibold tracking-tight mb-3">
                {item.count}+
              </p>
              <p className="text-gray-100 text-sm sm:text-base font-light leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
