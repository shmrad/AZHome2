import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Phone, MapPin, Clock, CheckCircle2, Hammer, Construction } from 'lucide-react';

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "//img1.wsimg.com/isteam/ip/a931a610-be40-4e17-907d-d49693ad4cff/2.JPG",
      title: "Professional Concrete Solutions",
      description: "Expert concrete services including foundation repair, slabs, and professional parging"
    },
    {
      image: "//img1.wsimg.com/isteam/ip/a931a610-be40-4e17-907d-d49693ad4cff/Screenshot_20250210_160438_Gallery.jpg",
      title: "Premium Interlock Installation",
      description: "Transform your outdoor space with beautiful and durable interlock designs"
    },
    {
      image: "//img1.wsimg.com/isteam/ip/a931a610-be40-4e17-907d-d49693ad4cff/1.JPG",
      title: "Quality Concrete Work",
      description: "Superior concrete solutions for residential and commercial projects"
    }
  ];

  const features = [
    {
      icon: Construction,
      title: "Expert Interlock Services",
      items: [
        "Custom patio designs",
        "Professional driveway solutions",
        "Retaining wall construction",
        "Premium material selection",
        "Competitive pricing"
      ]
    },
    {
      icon: Hammer,
      title: "Professional Concrete Work",
      items: [
        "Foundation repair & waterproofing",
        "Concrete slabs & driveways",
        "Garage floor solutions",
        "Steps & walkways",
        "Expert crack repair"
      ]
    }
  ];

  const projects = [
    {
      image: "/images/Concrete Retaining Wall And Stairs.png",
      category: "Concrete",
      title: "Professional Concrete Work"
    },
    {
      image: "/images/Interlock patio and privacy fence.png",
      category: "Interlock",
      title: "Custom Interlock Design"
    },
    {
      image: "/images/Concrete garage floor replacement.png",
      category: "Concrete",
      title: "Garage Floor Solutions"
    },
    {
      image: "/images/Interlock Driveway.jpg",
      category: "Interlock",
      title: "Premium Driveway Installation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[100svh]">
        {/* Background Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="min-h-[100svh] flex flex-col justify-center items-center text-center">
            {/* Contact Bar */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 right-0 bg-white/10 backdrop-blur-sm"
            >
              <div className="container mx-auto px-4 py-2 md:py-3 flex flex-wrap justify-center items-center gap-3 md:gap-6 text-xs md:text-sm">
                <div className="flex items-center gap-1.5">
                  <Phone className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="whitespace-nowrap">343-558-2330</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                  <span>Ontario</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3 md:h-4 md:w-4" />
                  <span>Mon-Sat: 8am-6pm</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y }}
              className="max-w-5xl mx-auto pt-16 md:pt-20 px-4"
            >
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 md:mb-8"
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-400 to-white">
                    {slides[currentSlide].title}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                  {slides[currentSlide].description}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16"
              >
                <Link
                  to="/contact"
                  className="group relative px-6 md:px-8 py-3 md:py-4 bg-primary-600 overflow-hidden rounded-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative flex items-center justify-center text-base md:text-lg font-semibold">
                    Get Free Quote
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/gallery"
                  className="group px-6 md:px-8 py-3 md:py-4 border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <span className="flex items-center justify-center text-base md:text-lg font-semibold">
                    View Our Work
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 px-4"
              >
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "500+", label: "Projects Completed" },
                  { number: "100%", label: "Satisfaction Rate" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-1 md:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900/80 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x" />
                
                <div className="relative flex flex-col h-full bg-slate-900/90 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 md:p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                      <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3 md:space-y-4 flex-grow">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300 group/item">
                        <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 mr-3 rounded-full bg-blue-500/10 group-hover/item:bg-blue-500/20 transition-colors duration-200">
                          <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-cyan-400 group-hover/item:text-cyan-300" />
                        </span>
                        <span className="text-sm md:text-base group-hover/item:text-white transition-colors duration-200">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-400 to-white"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4"
            >
              Explore our latest concrete and interlock installations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x" />
                
                <div className="relative bg-slate-900/90 rounded-xl overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                      <span className="inline-block px-3 md:px-4 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-xs md:text-sm font-semibold mb-2 md:mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-sm md:text-base text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Professional {project.category.toLowerCase()} services with exceptional attention to detail
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12 md:mt-16"
          >
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary-600 rounded-lg hover:bg-primary-700 transition-all duration-300"
            >
              <span className="text-base md:text-lg font-semibold">View All Projects</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}