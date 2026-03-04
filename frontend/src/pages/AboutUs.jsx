import React from 'react';
import { FiCheck, FiAward, FiUsers, FiTruck } from 'react-icons/fi';

const AboutUs = () => {
  const stats = [
    { icon: FiUsers, number: "10,000+", label: "Happy Customers" },
    { icon: FiAward, number: "15+", label: "Years Experience" },
    { icon: FiTruck, number: "50,000+", label: "Orders Delivered" },
    { icon: FiCheck, number: "100%", label: "Quality Guaranteed" }
  ];

  const team = [
    { name: "Rajesh Patil", role: "Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" },
    { name: "Priya Sharma", role: "Operations Head", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" },
    { name: "Amit Deshmukh", role: "Quality Manager", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Bringing traditional chakki freshness to modern homes since 2009
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=800" 
              alt="Our Chakki"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Started</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              GahuAtta was born from a simple belief: everyone deserves access to fresh, 
              pure flour just like our grandparents used to make. In 2009, we started 
              with one traditional chakki and a dream to bring authentic taste to modern kitchens.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Today, we serve over 10,000 families across Maharashtra, but our commitment 
              remains the same - 100% natural, freshly ground, no compromises.
            </p>
            <div className="flex gap-4">
              <div className="bg-primary/10 px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-sm text-gray-600">Years</p>
              </div>
              <div className="bg-secondary/10 px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold text-secondary">4</p>
                <p className="text-sm text-gray-600">Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary text-2xl" />
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCheck className="text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality First</h3>
            <p className="text-gray-600">Only the best grains make it to our chakki. No compromises, ever.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUsers className="text-secondary text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Focus</h3>
            <p className="text-gray-600">Your satisfaction drives everything we do. 24/7 support.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiAward className="text-accent text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tradition</h3>
            <p className="text-gray-600">Ancient chakki methods meet modern hygiene standards.</p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;