import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award, Heart, Star, IndianRupee, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  const breeds = [
    {
      name: 'Labrador Retriever',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
      description: 'Friendly, outgoing, and active companions perfect for Indian families',
      traits: ['Loyal', 'Intelligent', 'Active', 'Family-Friendly'],
      popularity: '95%',
      climate: 'Adaptable to Indian climate with proper care',
      specialCare: 'Regular exercise and cooling during summers'
    },
    {
      name: 'Golden Retriever',
      image: 'https://images.pexels.com/photos/552616/pexels-photo-552616.jpeg',
      description: 'Intelligent, friendly, and devoted - perfect therapy dogs',
      traits: ['Gentle', 'Smart', 'Friendly', 'Patient'],
      popularity: '92%',
      climate: 'Needs extra care during Indian summers',
      specialCare: 'Daily grooming and air conditioning access'
    },
    {
      name: 'Pug',
      image: 'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg',
      description: 'Charming, mischievous, and loving apartment companions',
      traits: ['Playful', 'Charming', 'Sociable', 'Compact'],
      popularity: '88%',
      climate: 'Sensitive to heat - indoor breed for India',
      specialCare: 'Breathing support and temperature control'
    },
    {
      name: 'German Shepherd',
      image: 'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg',
      description: 'Confident, courageous, and smart working dogs',
      traits: ['Brave', 'Versatile', 'Smart', 'Protective'],
      popularity: '90%',
      climate: 'Good adaptation with proper shelter',
      specialCare: 'Mental stimulation and joint care'
    },
    {
      name: 'Indian Pariah Dog',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg',
      description: 'Indigenous Indian breed - perfectly adapted to local climate',
      traits: ['Hardy', 'Intelligent', 'Loyal', 'Low-Maintenance'],
      popularity: '85%',
      climate: 'Perfectly suited for Indian weather',
      specialCare: 'Minimal grooming, natural immunity'
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % breeds.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [breeds.length, isHovered]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % breeds.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + breeds.length) % breeds.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen font-poppins">
      {/* Enhanced Hero Section with Vibrant Colors */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Vibrant Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-fuchsia-600 to-orange-600 opacity-95 animate-gradient"></div>
        
        {/* Dynamic Background Images with Enhanced Parallax */}
        {breeds.map((breed, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 transform ${
              index === currentSlide 
                ? 'opacity-100 scale-115 rotate-1' 
                : 'opacity-0 scale-100 rotate-0'
            }`}
            style={{
              backgroundImage: `url(${breed.image})`,
              transform: `scale(${index === currentSlide ? 1.15 : 1}) translateX(${
                index === currentSlide ? 0 : direction * 150
              }px) rotate(${index === currentSlide ? 1 : 0}deg)`,
              filter: 'brightness(0.8) contrast(1.3) saturate(1.2)'
            }}
          />
        ))}
        
        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-40 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2.5}s`,
                animationDuration: `${2.5 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Navigation Arrows with Popping Colors */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-full p-3 hover:from-fuchsia-700 hover:to-pink-700 transition-all duration-300 hover:scale-115 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-full p-3 hover:from-fuchsia-700 hover:to-pink-700 transition-all duration-300 hover:scale-115 shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Main Content with Bold Fonts and Colors */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="transform animate-pulse">
            <Heart className="w-24 h-24 mx-auto mb-6 text-orange-300 animate-bounce" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500 tracking-tight drop-shadow-lg animate-fade-in">
            Welcome to <span className="italic font-cursive text-yellow-300">PetSpree</span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 font-medium text-blue-100 tracking-wide drop-shadow-md animate-slide-up">
            Premium Pet Care for Indian Pet Parents
          </p>
          
          {/* Enhanced Breed Information Card */}
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 mb-8 transform transition-all duration-500 hover:scale-105 hover:bg-opacity-25 border border-orange-300 border-opacity-40 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 tracking-tight">
                  Featured: {breeds[currentSlide].name}
                </h3>
                <p className="text-lg mb-4 text-blue-100 font-medium tracking-wide">
                  {breeds[currentSlide].description}
                </p>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center mb-2">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-300 font-semibold tracking-wide">
                      Popularity: {breeds[currentSlide].popularity}
                    </span>
                  </div>
                  <div className="text-sm text-blue-200 font-medium">
                    <strong>Climate:</strong> {breeds[currentSlide].climate}
                  </div>
                  <div className="text-sm text-green-200 font-medium">
                    <strong>Care:</strong> {breeds[currentSlide].specialCare}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap justify-center gap-3">
                  {breeds[currentSlide].traits.map((trait, index) => (
                    <span 
                      key={index} 
                      className="bg-gradient-to-r from-orange-500 to-pink-600 px-4 py-2 rounded-full text-sm font-semibold text-white transform hover:scale-110 transition-transform duration-200 cursor-pointer shadow-md"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action Buttons with Vibrant Colors */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/food"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-orange-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-md"
            >
              <IndianRupee className="mr-2 w-5 h-5" />
              Shop Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 border border-white border-opacity-50 shadow-md"
            >
              Expert Advice <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
        
        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {breeds.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-14 h-4 bg-gradient-to-r from-orange-500 to-pink-600 scale-125 shadow-md' 
                  : 'w-4 h-4 bg-white bg-opacity-60 hover:bg-opacity-80 hover:scale-110'
              }`}
            />
          ))}
        </div>
        
        {/* Progress Bar with Vibrant Colors */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-30">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-pink-600 transition-all duration-4000 ease-linear"
            style={{ width: `${((currentSlide + 1) / breeds.length) * 100}%` }}
          />
        </div>
      </section>

      {/* Enhanced Features Section with Bold Colors */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-600 mb-4 tracking-tight drop-shadow-lg">
              Why Choose PetSpree?
            </h2>
            <p className="text-xl text-gray-700 font-medium tracking-wide">Designed for Indian Pet Parents</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Indian Climate Specific',
                description: 'Products curated for Indian weather - from summer cooling vests to monsoon protection.',
                color: 'from-blue-600 to-cyan-600'
              },
              {
                icon: Truck,
                title: 'Pan-India Delivery',
                description: 'Fast delivery across all major Indian cities with free shipping on orders above ₹999.',
                color: 'from-green-600 to-emerald-600'
              },
              {
                icon: Award,
                title: 'Breed Expert Guidance',
                description: 'Advice from veterinarians familiar with Indian pet care challenges and breed needs.',
                color: 'from-orange-500 to-pink-600'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-orange-50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group border border-gray-100"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-fuchsia-600 transition-colors tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Pet Care Awareness Section with Vibrant Colors */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-600 mb-4 tracking-tight drop-shadow-lg">
              Pet Care in India
            </h2>
            <p className="text-xl text-gray-700 font-medium tracking-wide">Essential Knowledge for Indian Pet Parents</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-orange-200">
                <img
                  src="https://images.pexels.com/photos/4587955/pexels-photo-4587955.jpeg"
                  alt="Summer pet care"
                  className="w-full h-48 object-cover rounded-xl mb-6 hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600 tracking-tight">
                  <span className="text-3xl mr-3">🌞</span>
                  Summer Care Essentials
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Indian summers can be harsh on pets. Learn about cooling mats, proper hydration, 
                  timing walks during cooler hours, and recognizing heat stroke symptoms. 
                  Special attention needed for flat-faced breeds like Pugs and Bulldogs.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-orange-200">
                <img
                  src="https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg"
                  alt="Monsoon pet care"
                  className="w-full h-48 object-cover rounded-xl mb-6 hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600 tracking-tight">
                  <span className="text-3xl mr-3">🌧️</span>
                  Monsoon Protection
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Monsoon brings unique challenges - waterproof gear, paw care, preventing fungal infections, 
                  and maintaining exercise routines indoors. Essential tick and flea prevention during humid months.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-orange-200">
                <img
                  src="https://images.pexels.com/photos/6816861/pexels-photo-6816861.jpeg"
                  alt="Indian breed care"
                  className="w-full h-48 object-cover rounded-xl mb-6 hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600 tracking-tight">
                  <span className="text-3xl mr-3">🇮🇳</span>
                  Indian Breed Advantages
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Consider adopting Indian Pariah dogs - they're naturally adapted to local climate, 
                  have fewer health issues, and are incredibly intelligent and loyal. 
                  Support local breeds while getting a perfect companion.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-orange-200">
                <img
                  src="https://images.pexels.com/photos/4498300/pexels-photo-4498300.jpeg"
                  alt="Nutrition in India"
                  className="w-full h-48 object-cover rounded-xl mb-6 hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600 tracking-tight">
                  <span className="text-3xl mr-3">🥘</span>
                  Nutrition & Local Foods
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Understanding which Indian foods are safe for pets, importance of breed-specific nutrition, 
                  and choosing between imported vs. local pet food brands. Quality nutrition adapted to Indian conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section with Vibrant Colors */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-fuchsia-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Ready to Give Your Pet the Best?
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-medium tracking-wide">
            Browse our breed-specific collections with Indian pricing and fast delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/food"
              className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-orange-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center shadow-md"
            >
              <IndianRupee className="mr-2 w-5 h-5" />
              Shop Pet Food
            </Link>
            <Link
              to="/accessories"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center shadow-md"
            >
              Browse Accessories
            </Link>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-lg font-medium">🚚 Free delivery on orders above ₹999 | 🏥 Vet consultation available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;