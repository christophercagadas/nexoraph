import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Zap, Users, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const reasons = [
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description:
        'Years of proven track record delivering excellence with security and confidentiality at the forefront.',
    },
    {
      icon: Zap,
      title: 'Fast & Efficient',
      description:
        'Quick turnaround times without compromising quality, ensuring your business stays ahead of the curve.',
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description:
        'Skilled professionals committed to understanding your business and providing personalized solutions.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description:
        'Flexible services that grow with your business, from startups to enterprises.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We deliver exceptional value through expertise, commitment, and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-700 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                <reason.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
