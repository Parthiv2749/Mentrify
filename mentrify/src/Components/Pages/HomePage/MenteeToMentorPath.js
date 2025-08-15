import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { GraduationCap, BookOpen, Briefcase, Users } from "lucide-react";

export default function MenteeToMentorPath() {
  const steps = [
    { icon: <GraduationCap className="w-8 h-8 text-blue-600" />, title: "Join as Mentee" },
    { icon: <BookOpen className="w-8 h-8 text-purple-600" />, title: "Learn & Grow" },
    { icon: <Briefcase className="w-8 h-8 text-yellow-600" />, title: "Achieve Goals" },
    { icon: <Users className="w-8 h-8 text-green-600" />, title: "Become a Mentor" }
  ];

  const controls = useAnimation();
  const [lineProgress, setLineProgress] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  // Detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Animate progress line
  useEffect(() => {
    if (inView) {
      let step = 0;
      const interval = setInterval(() => {
        step++;
        setLineProgress((step / (steps.length - 1)) * 100);
        if (step >= steps.length - 1) clearInterval(interval);
      }, 500);
    }
  }, [inView]);

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${lineProgress}%`, transition: { duration: 0.5, ease: "easeInOut" } });
    }
  }, [lineProgress, inView, controls]);

  return (
    <section className="bg-white py-16" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Your Path from Mentee to Mentor
        </h2>

        {/* Desktop Layout */}
        <div className="hidden md:flex relative items-center justify-between">
          {/* Background line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0" />

          {/* Animated progress line */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 z-10 rounded-full shadow-md"
            initial={{ width: "0%" }}
            animate={controls}
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center relative z-20"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.5 }}
            >
              {/* Pulse effect when line reaches step */}
              <motion.div
                className="bg-white border-2 border-gray-300 rounded-full p-4 shadow-lg"
                animate={lineProgress >= (index / (steps.length - 1)) * 100 ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                {step.icon}
              </motion.div>
              <p className="mt-2 text-sm font-medium text-gray-700">{step.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout - vertical path */}
        <div className="md:hidden relative flex flex-col items-center">
          {/* Background vertical line */}
          <div className="absolute top-0 bottom-0 w-1 bg-gray-200 left-1/2 transform -translate-x-1/2 z-0" />

          {/* Animated vertical progress line */}
          <motion.div
            className="absolute top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 left-1/2 transform -translate-x-1/2 z-10 rounded-full shadow-md"
            initial={{ height: "0%" }}
            animate={inView ? { height: `${lineProgress}%` } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center relative z-20 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.5 }}
            >
              <motion.div
                className="bg-white border-2 border-gray-300 rounded-full p-4 shadow-lg"
                animate={lineProgress >= (index / (steps.length - 1)) * 100 ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                {step.icon}
              </motion.div>
              <p className="mt-2 text-sm font-medium text-gray-700 text-center">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
