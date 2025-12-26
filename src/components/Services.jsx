import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Briefcase,
  FileText,
  Headphones,
  Target,
  Database,
  Settings,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      icon: Briefcase,
      title: 'Executive Assistance',
      description:
        'Streamline your daily operations with professional executive support, calendar management, and administrative coordination.',
    },
    {
      icon: FileText,
      title: 'Back Office Support',
      description:
        'Efficient handling of documentation, data entry, bookkeeping, and other essential back-office functions.',
    },
    {
      icon: Headphones,
      title: 'Customer Service',
      description:
        '24/7 customer support via phone, email, and chat to ensure your clients receive timely and professional assistance.',
    },
    {
      icon: Target,
      title: 'Lead Generation',
      description:
        'Strategic outreach and qualification to help you build a robust pipeline of qualified prospects and opportunities.',
    },
    {
      icon: Database,
      title: 'Data Processing',
      description:
        'Accurate and efficient data management, analysis, and reporting to transform raw information into actionable insights.',
    },
    {
      icon: Settings,
      title: 'Technical Support',
      description:
        'Expert technical assistance for your products and services, ensuring customer satisfaction and issue resolution.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions designed to scale with your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-teal-400 dark:hover:border-teal-600">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
