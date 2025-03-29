import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Header */}
      <header 
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="relative group shrink-0"
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500"
                initial={false}
                animate={{ scale: [0.95, 1], opacity: [0, 0.2] }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500">
                AZ
                <span className="text-xl md:text-2xl font-bold text-gray-700">
                  {" "}Home Renovation
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 text-base lg:text-lg font-medium transition-all duration-200 rounded-lg group ${
                    location.pathname === item.path
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-blue-50 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 rounded-lg bg-blue-600 text-white font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get Free Quote
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-100"
            >
              <nav className="bg-white shadow-lg">
                <div className="px-4 py-2 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-4 rounded-xl text-lg font-medium transition-all duration-200 ${
                        location.pathname === item.path
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="p-4 mt-4 bg-gray-50 rounded-xl space-y-4">
                    <Link
                      to="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 text-lg font-medium"
                    >
                      Get Free Quote
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                    <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                      <a href="tel:343-558-2330" className="flex items-center text-gray-600 hover:text-blue-600">
                        <Phone className="h-5 w-5 mr-3" />
                        343-558-2330
                      </a>
                      <a href="tel:613-700-3264" className="flex items-center text-gray-600 hover:text-blue-600">
                        <Phone className="h-5 w-5 mr-3" />
                        613-700-3264
                      </a>
                      <a href="mailto:info@azhomerenovation.ca" className="flex items-center text-gray-600 hover:text-blue-600">
                        <Mail className="h-5 w-5 mr-3" />
                        info@azhomerenovation.ca
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">AZ Home Renovation</h3>
              <p className="text-gray-400">
                Quality craftsmanship and professional service for all your renovation needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  343-558-2330
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  613-700-3264
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@AZHomeRenovation.ca
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>Copyright © {new Date().getFullYear()} AZ Home Renovation - All Rights Reserved.</p>
            <div className="mt-4 text-sm">
              <button className="hover:text-white transition-colors">
                This website uses cookies. By accepting, your data will be aggregated with all other user data.
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}