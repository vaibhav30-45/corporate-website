import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-corporate-navy text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <img src={logo} alt="NIF Logo" className="h-12 w-auto object-contain brightness-0 invert" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            A global leader in investment and strategic holding, committed to sustainable growth across logistics, finance, and emerging sectors.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-corporate-orange transition-colors cursor-pointer">
                                    <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link to="/about" className="hover:text-corporate-orange transition-colors">About Us</Link></li>
                            <li><Link to="/sectors" className="hover:text-corporate-orange transition-colors">Our Sectors</Link></li>
                            <li><Link to="/governance" className="hover:text-corporate-orange transition-colors">Governance</Link></li>
                            <li><Link to="/news" className="hover:text-corporate-orange transition-colors">News & Media</Link></li>
                        </ul>
                    </div>

                    {/* Sectors */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Sectors</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link to="/sectors/logistics" className="hover:text-corporate-orange transition-colors">Logistics</Link></li>
                            <li><Link to="/sectors/finance" className="hover:text-corporate-orange transition-colors">Finance / Fintech</Link></li>
                            <li><Link to="/sectors/future" className="hover:text-corporate-orange transition-colors">Future Sectors</Link></li>
                            <li><Link to="/careers" className="hover:text-corporate-orange transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Get in Touch</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 text-corporate-orange">📍</span>
                                <span>Corporate Headquarters,<br />Financial District, Metropolis</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-corporate-orange">📞</span>
                                <span>+1 (555) 000-0000</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-corporate-orange">✉️</span>
                                <span>info@niosto-group.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
                    <p>© {currentYear} NiostoGroup Inter Foundation. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;