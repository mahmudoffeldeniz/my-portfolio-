// CircularSkills.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const CircularSkill = ({
  skill,
  percentage = "0%",
  size = 140,
  strokeWidth = 12,
  trackColor = "#2b2b2b",
  progressColor = "#f59e0b",
}) => {
  const numeric = parseInt(String(percentage).replace("%", ""), 10) || 0;

  // intersection observer: triggerOnce: false means it will animate each time it enters view
  const [ref, inView] = useInView({
    threshold: 0.35,
    triggerOnce: false,
  });

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - numeric / 100);

  // animation settings for framer-motion
  const circleTransition = { duration: 1.1, ease: "easeOut" };

  return (
    <div ref={ref} className="w-full p-4 flex flex-col items-center">
      <div
        style={{ width: size, height: size }}
        className="relative flex items-center justify-center"
        aria-hidden="false"
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* background track (like tyre rim) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={trackColor}
            strokeWidth={strokeWidth}
            fill="none"
            className="opacity-60"
          />

          {/* animated progress */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={progressColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={inView ? offset : circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: inView ? offset : circumference }}
            transition={circleTransition}
            style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
          />

          {/* optional inner rim to look more like tire (subtle) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius - strokeWidth * 0.6}
            fill="transparent"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth={1}
          />
        </svg>

        {/* center label: animated count */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-white text-lg font-semibold">
            {/* use key to re-render CountUp each time inView toggles */}
            {inView ? (
              <CountUp
                key={String(inView) + skill}
                start={0}
                end={numeric}
                duration={1.1}
                suffix="%"
              />
            ) : (
              "0%"
            )}
          </div>
          <div className="text-xs text-neutral-300 mt-1 text-center px-2">
            {skill}
          </div>
        </div>
      </div>
    </div>
  );
};

const CircularSkillsGroup = () => {
  return (
    <section id="skills" className="container mx-auto px-4 py-14">
      <h2 className="h2 text-accent text-center mb-8">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
        <CircularSkill
          skill="HTML"
          percentage="80%"
          size={150}
          strokeWidth={14}
          progressColor="#576de7"
          trackColor="#1f2911"
        />
        <CircularSkill
          skill="CSS / SCSS"
          percentage="70%"
          size={150}
          strokeWidth={14}
          progressColor="#576de7"
          trackColor="#1f2911"
        />
        <CircularSkill
          skill="JavaScript"
          percentage="60%"
          size={150}
          strokeWidth={14}
          progressColor="#576de7"
          trackColor="#1f2911"
        />
        <CircularSkill
          skill="React / Redux"
          percentage="55%"
          size={150}
          strokeWidth={14}
          progressColor="#576de7"
          trackColor="#1f2911"
        />
        <CircularSkill
          skill="Next.js"
          percentage="35%"
          size={150}
          strokeWidth={14}
          progressColor="#576de7"
          trackColor="#1f2911"
        />
        <CircularSkill
          skill="TypeScript"
          percentage="30%"
          size={150}
          strokeWidth={14}
          progressColor="#576de7"
          trackColor="#1f2911"
        />
        <CircularSkill
          skill="Git / GitHub"
          percentage="50%"
          size={150}
          strokeWidth={14}
          progressColor="#576de7"
          trackColor="#1f2911"
        />
        <CircularSkill
          skill="Figma"
          percentage="65%"
          size={150}
          strokeWidth={14}
          progressColor="#576de7"
          trackColor="#1f2911"
        />
      </div>
    </section>
  );
};

export default CircularSkillsGroup;
