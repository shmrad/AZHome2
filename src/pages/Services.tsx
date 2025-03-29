import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Hammer, 
  Construction,
  Wrench,
  CheckCircle2,
  Shield,
  Clock
} from 'lucide-react';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mainServices = [
    {
      icon: Construction,
      title: "Interlock Design & Installation",
      description: "Professional interlock solutions with unbeatable rates",
      features: [
        "Custom patio design and installation",
        "Professional driveway solutions",
        "Retaining wall construction",
        "Premium material selection",
        "Competitive pricing guaranteed"
      ]
    },
    {
      icon: Hammer,
      title: "Concrete Solutions",
      description: "Expert concrete services for all your needs",
      features: [
        "Walkways and concrete slabs",
        "Retaining walls and steps",
        "Garage floor installation",
        "Floor restoration and resurfacing",
        "Foundation repair and parging",
        "Crack injection and waterproofing",
        "Egress window/door installation"
      ]
    },
    {
      icon: Wrench,
      title: "Interior Renovation",
      description: "Complete renovation solutions",
      features: [
        "Complete bathroom renovations",
        "Space-efficient designs",
        "Full basement transformations",
        "Special rates for 40sqft bathrooms",
        "Custom interior solutions"
      ]
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "W.S.I.B Insured",
      description: "Fully insured for your peace of mind"
    },
    {
      icon: CheckCircle2,
      title: "5 Years Warranty",
      description: "Comprehensive warranty on all work"
    },
    {
      icon: Clock,
      title: "Senior Discount",
      description: "Special rates for senior citizens"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional renovation and remodeling services with a focus on concrete and interlock solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Solutions</h2>
            <p className="text-xl text-gray-600">Expert services tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{guarantee.title}</h3>
                <p className="text-blue-100">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact us today for a free consultation and quote</p>
          <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:space-x-6">
            <a 
              href="tel:343-558-2330"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Call: 343-558-2330
            </a>
            <a 
              href="tel:613-700-3264"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Call: 613-700-3264
            </a>
            <a 
              href="mailto:info@azhomerenovation.ca"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              info@azhomerenovation.ca
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}