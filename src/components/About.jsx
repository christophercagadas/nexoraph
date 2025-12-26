import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white md:py-32 dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="overflow-hidden shadow-2xl aspect-square rounded-2xl bg-gradient-to-br from-teal-900 to-teal-600 dark:from-teal-900 dark:to-teal-800">
              <div className="flex items-center justify-center w-full h-full p-8">
                <div className="text-center">
                  <div className="mb-4 text-8xl">🚀</div>
                  <p className="text-2xl font-bold text-teal-100 dark:text-teal-100">
                    Growing Together
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              About Us
            </h2>
            <div className="mb-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <p>
                <span className="font-semibold text-teal-600 dark:text-teal-400">
                  Nexora Group PH{" "}
                </span>
                is a modern outsourcing and business support company based in
                the Philippines. We specialize in providing high-quality,
                scalable services that empower businesses to focus on growth
                while we take care of the rest.
              </p>
              <p>
                From executive assistance to technical development, our team of
                skilled professionals works as an extension of yours -
                seamlessly integrating with your systems, values, and goals.
              </p>
              <p className="mt-6 text-xl font-semibold text-teal-600 dark:text-teal-400">
                We don't just support your business—we become part of it.
              </p>
            </div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900 md:text-2xl dark:text-white">
              Our Vision
            </h3>
            <div className="mb-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              To become the preferred outsourcing partner for forward-thinking
              businesses by delivering smart, flexible and human-centered
              solutions.
            </p>
            </div>
            <h3 className="mt-6 mb-6 text-2xl font-bold text-gray-900 md:text-2xl dark:text-white">
              Our Mission
            </h3>
             <div className="mb-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              To help businesses scale with confidence by providing reliable,
              cost-effective, and tailored support across key operational areas.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
