import React, { useEffect, useRef, useState } from "react";
import { assets_manager } from "../../assets/assets_manager";
import Button from "../ReusableComponents/Button";


const stats = [
  { value: 10, suffix: "+", label: "years of experience"},
  { value: 50, suffix: "+", label: "properties purchased"},
  { value: 120, suffix: "+", label: "happy clients"},
  { value: 200, suffix: "+", label: "properties analysed"},
];

const AnimatedNumber = ({ value, suffix = "", duration = 1800, start, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp = null;
    let animationFrame;
    let timeoutId;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const springBoost = Math.sin(progress * Math.PI) * 0.04;
      const animatedValue = Math.min(easedProgress + springBoost, 1);

      setCount(Math.floor(animatedValue * value));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    timeoutId = window.setTimeout(() => {
      animationFrame = window.requestAnimationFrame(step);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [start, value, duration, delay]);

  return(
    <span>
      {count}
      {suffix}
    </span>
  );
};

const HomePageAbout = () => {

  const statsRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const element = statsRef.current;
    if(!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [startCounting]);

  return (
    <section
      id="AboutIntro"
      className="w-full bg-(--color-bg-gray) overflow-hidden"
    >
      {/** px = horizontal (left + right) */}
      {/** py = vertical (top + bottom) */}
      <div className="max-w-7xl sm:mx-auto py-12 sm:py-10 px-6 lg:px-8">
        <h2 className="text-(--color-text-dark) text-2xl sm:text-4xl lg:text-5xl mb-10">
          Founder
        </h2>

        <div className="flex flex-col md:flex-row lg:gap-10">
          {/** Left Side - Image */}
          <div className="w-full md:w-1/2 lg:w-2/5 order-2 lg:order-1 sm:mx-5 flex justify-center md:justify-start">
            <div className="relative w-full max-w-80 md:max-w-90 lg:max-w-112.5 rounded overflow-hidden">
              <img
                src={assets_manager.home_founder}
                alt="Founder"
                className="block w-full h-auto rounded"
              />
            </div>
          </div>

          {/* RIGHT SIDE - Text */}

          <div className="w-full lg:w-1/2 order-1 md:order-2 flex flex-col sm:mx-5">
            <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-4xl mb-10">
              Timur Khismatullin
            </h2>

            <div className="space-y-4 text-gray-800 flex flex-col flex-1 gap-4 text-base sm:text-xl">
              <p className="leading-relaxed">
                Expert and mentor in buying and investing in UK property.
              </p>

              <p className="leading-relaxed">
                Property is one of the most powerful ways to build long-term
                wealth. I help individuals and investors make smarter decisions
                when purchasing property in the UK — whether it’s for living,
                business, or investment.
              </p>

              <p className="leading-relaxed">
                My goal is simple: help you choose the right property and avoid
                the mistakes many buyers make.
              </p>

              <div className="mt-auto mb-10 text-base">
                <Button title="Read More" link={"/about"} />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center transform transition-all duration-700 ease-out ${
                startCounting
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <span className="text-3xl sm:text-5xl font-normal text-(--color-brand-primary)">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  start={startCounting}
                  delay={index * 180}
                />
              </span>
              <span className="text-2xl text-gray-500 mt-2">
                {stat.label}
              </span> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageAbout;
