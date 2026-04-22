import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0c2438] text-white pt-12 pb-6">
      
      {/* ✅ ONLY THIS LINE CHANGED */}
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 grid md:grid-cols-4 gap-10">

        {/* LOGO + SOCIAL */}
        
<div className="flex flex-col items-start">

  {/* Logo Box */}
  <div className="bg-white rounded-2xl p-1 mb-6 w-20 h-20 flex items-center justify-center">
  <img
    src={logo}
    alt="logo"
    className="w-full h-full object-contain"
  />
</div>

  {/* Social Icons */}
  <div className="flex gap-5 text-2xl text-gray-300">
    <a href="#" className="hover:text-white transition">
      <FaFacebookF />
    </a>
    <a href="#" className="hover:text-white transition">
      <FaTwitter />
    </a>
    <a href="#" className="hover:text-white transition">
      <FaInstagram />
    </a>
  </div>

</div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
            <li><Link to="/sectors" className="hover:text-orange-400">Sectors</Link></li>
            <li><Link to="/governance" className="hover:text-orange-400">Governance</Link></li>
            <li><Link to="/news" className="hover:text-orange-400">News & Media</Link></li>
            <li><Link to="/careers" className="hover:text-orange-400">Careers</Link></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/faq" className="hover:text-orange-400">FAQs</Link></li>
            <li><Link to="/blogs" className="hover:text-orange-400">Blogs / Insights</Link></li>
            <li><Link to="/case-studies" className="hover:text-orange-400">Case Studies</Link></li>
            <li><Link to="/privacy" className="hover:text-orange-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-orange-400">Terms Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MdLocationOn /> 123 Street, city, Country
            </li>
            <li className="flex items-center gap-2">
              <MdPhone /> +91 9XXXXXXXXX
            </li>
            <li className="flex items-center gap-2">
              <MdEmail /> info@corporate.com
            </li>
          </ul>
        </div>
      </div>

      {/* LINE */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-400 text-sm">
        <p>© 2026 NiostoGroup Inter Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;