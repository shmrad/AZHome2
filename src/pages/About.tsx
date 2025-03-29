import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  Clock, 
  CheckCircle2,
  TrendingUp,
  Heart,
  Target,
  Shield,
  Star
} from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    { year: 2008, title: "Company Founded", description: "Started with residential renovations in Ontario" },
    { year: 2013, title: "Service Expansion", description: "Added specialized concrete and interlock services" },
    { year: 2018, title: "Team Growth", description: "Expanded our professional team and service area" },
    { year: 2023, title: "Market Leader", description: "Over 500 successful projects completed" }
  ];

  const values = [
    { 
      icon: Shield, 
      title: "W.S.I.B Insured", 
      description: "Full insurance coverage for your peace of mind" 
    },
    { 
      icon: CheckCircle2, 
      title: "5 Years Warranty", 
      description: "Comprehensive warranty on all our work" 
    },
    { 
      icon: Star, 
      title: "Senior Discount", 
      description: "Special rates for our senior citizens" 
    },
    { 
      icon: Heart, 
      title: "Customer Focus", 
      description: "Your satisfaction is our priority" 
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "500+", label: "Projects Completed", icon: TrendingUp },
    { number: "100%", label: "Client Satisfaction", icon: Users }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-400"
            >
              About AZ Home Renovation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Delivering excellence in concrete and interlock solutions since 2008
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
              Our Commitments
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              What sets us apart in the industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x" />
                <div className="relative p-6 bg-slate-900/90 backdrop-blur-sm rounded-lg border border-white/10">
                  <value.icon className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
              Our Journey
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Building trust and excellence over the years
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-0 relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 md:hidden" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex md:items-center md:justify-center"
              >
                <div className="flex-1 ml-8 md:ml-0 md:w-full md:flex md:justify-center">
                  <div className="relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/20 md:max-w-md">
                    <div className="absolute left-0 top-6 -ml-11 md:hidden">
                      <div className="w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-50 blur group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-6 bg-slate-900/90 backdrop-blur-sm rounded-lg text-center">
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}