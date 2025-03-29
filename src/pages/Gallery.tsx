import React from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from '../components/ImageCarousel';

export default function Gallery() {
  const projectImages = {
    featured: [
      {
        url: '/images/Concrete Retaining Wall And Stairs.png',
        alt: 'Concrete Retaining Wall and Stairs',
        title: 'Custom Concrete Solutions',
        description: 'Professional retaining wall and stair installation'
      },
      {
        url: '/images/Interlock patio and privacy fence.png',
        alt: 'Interlock Patio with Privacy Fence',
        title: 'Premium Interlock Design',
        description: 'Custom patio installation with integrated privacy features'
      },
      {
        url: '/images/Concrete garage floor replacement.png',
        alt: 'Garage Floor Replacement',
        title: 'Garage Floor Solutions',
        description: 'Complete garage floor replacement and finishing'
      }
    ],
    interlock: [
      {
        url: '/images/Interlock Driveway.jpg',
        alt: 'Interlock Driveway',
        title: 'Custom Interlock Driveway',
        description: 'Premium driveway installation with detailed patterns'
      },
      {
        url: '/images/Interlock patio and steps .png',
        alt: 'Interlock Patio and Steps',
        title: 'Integrated Patio Design',
        description: 'Seamless integration of patio and steps'
      },
      {
        url: '/images/Interlock Patio.png',
        alt: 'Interlock Patio',
        title: 'Custom Patio Solutions',
        description: 'Beautiful and functional outdoor living spaces'
      },
      {
        url: '/images/Interlock raised garden and retaining wall.png',
        alt: 'Interlock Raised Garden',
        title: 'Landscape Integration',
        description: 'Raised gardens with retaining wall features'
      },
      {
        url: '/images/Interlock Walkway.png',
        alt: 'Interlock Walkway',
        title: 'Elegant Walkway Design',
        description: 'Custom walkway solutions for your home'
      }
    ],
    concrete: [
      {
        url: '/images/Concrete Retaining Wall And Stairs.png',
        alt: 'Concrete Retaining Wall and Stairs',
        title: 'Retaining Wall Excellence',
        description: 'Professional retaining wall and stair installation'
      },
      {
        url: '/images/Concrete Slabs.jpg',
        alt: 'Concrete Slabs',
        title: 'Custom Concrete Slabs',
        description: 'Professional concrete slab installation'
      },
      {
        url: '/images/Concrete steps and landing.png',
        alt: 'Concrete Steps and Landing',
        title: 'Steps and Landing Design',
        description: 'Custom concrete steps and landing solutions'
      },
      {
        url: '/images/Concrete steps and landing 2.png',
        alt: 'Additional Concrete Steps',
        title: 'Premium Steps Installation',
        description: 'Expert concrete step craftsmanship'
      },
      {
        url: '/images/Concrete Walk Way.png',
        alt: 'Concrete Walkway',
        title: 'Walkway Solutions',
        description: 'Professional concrete walkway installation'
      }
    ],
    garageFloors: [
      {
        url: '/images/Concrete garage floor replacement.png',
        alt: 'Garage Floor Replacement',
        title: 'Complete Floor Replacement',
        description: 'Professional garage floor installation'
      },
      {
        url: '/images/Concrete garage floor resurfacing.png',
        alt: 'Garage Floor Resurfacing',
        title: 'Floor Resurfacing',
        description: 'Expert garage floor restoration'
      }
    ],
    specialtyWork: [
      {
        url: '/images/Concrete crack injection and waterproofing.jpg',
        alt: 'Crack Injection and Waterproofing',
        title: 'Waterproofing Solutions',
        description: 'Professional crack repair and waterproofing'
      },
      {
        url: '/images/Egress window installation Before.jpg',
        alt: 'Egress Window Before',
        title: 'Egress Window Installation',
        description: 'Before: Preparation for egress window'
      },
      {
        url: '/images/Egress window installation And After.jpg',
        alt: 'Egress Window After',
        title: 'Completed Egress Window',
        description: 'After: Professional window installation'
      }
    ]
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Project Gallery</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of concrete and interlock projects, showcasing quality craftsmanship and attention to detail
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Projects */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
            <ImageCarousel images={projectImages.featured} />
          </div>

          {/* Interlock */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Interlock Design & Installation</h2>
            <ImageCarousel images={projectImages.interlock} />
          </div>

          {/* Concrete Work */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Concrete Solutions</h2>
            <ImageCarousel images={projectImages.concrete} />
          </div>

          {/* Garage Floors */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Garage Floor Solutions</h2>
            <ImageCarousel images={projectImages.garageFloors} />
          </div>

          {/* Specialty Work */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Specialty Services</h2>
            <ImageCarousel images={projectImages.specialtyWork} />
          </div>
        </div>
      </section>
    </div>
  );
}