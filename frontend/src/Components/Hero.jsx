import React from "react";
import heroImg from '../assets/hero.png';
import { BsFire } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { Fingerprint } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#d8eefe] to-[#e1f3fd] py-16 px-6 sm:px-12 md:px-20 flex items-center justify-between gap-8 flex-col sm:flex-row-reverse">

      {/* Right Side: Text & CTA */}
      <div className="max-w-xl text-center sm:text-left">
        <h5 className="flex items-center justify-center sm:justify-start gap-x-2 text-secondary uppercase text-sm sm:text-base md:text-lg mb-2">
          Modern Collection <BsFire />
        </h5>
    
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800 mb-4">
          Every Click <span className="text-secondary">–</span> Shop Now
        </h1>
    
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Discover the best look and upgrade your style effortlessly.
        </p>
      </div>
    
      {/* Left Side: Model Image */}
      <div className="relative">
        <img 
          src={heroImg} 
          alt="Fashionable model showcasing our collection" 
          className="rounded-xl w-[250px] sm:w-[300px] md:w-[360px] shadow-lg"
        />
        {/* Optional Play Button Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link to="/collection" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg relative cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <span className="absolute h-full w-full bg-secondary opacity-20 rounded-full animate-pulse"></span>
              <Fingerprint className="text-secondary relative z-10 w-5 h-5 transition-all duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
