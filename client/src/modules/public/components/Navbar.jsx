import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import EnquiryModal from "../pages/home/components/EnquiryModal";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [open, setOpen] = useState(false); // ✅ ADD
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'About',
            path: '/about',
            dropdown: [
                { name: 'Company Overview', path: '/about/overview' },
                { name: 'History / Timeline', path: '/about/history' },
                { name: 'Mission & Vision', path: '/about/mission-vision' },
                { name: 'Leadership', path: '/about/leadership' },
            ]
        },
        {
            name: 'Sectors',
            path: '/sectors',
            dropdown: [
                {
                    name: 'Logistics',
                    items: [
                        { name: 'Overview', path: '/sectors/logistics' },
                        { name: 'Services', path: '/sectors/logistics/services' },
                        { name: 'Case Studies', path: '/sectors/logistics/case-studies' },
                    ]
                },
                {
                    name: 'Finance',
                    items: [
                        { name: 'Overview', path: '/sectors/finance' },
                        { name: 'Services', path: '/sectors/finance/services' },
                        { name: 'Insights', path: '/sectors/finance/insights' },
                    ]
                },
                { name: 'Future Sectors', path: '/sectors/future' },
            ]
        },
        {
            name: 'Governance',
            path: '/governance',
            dropdown: [
                { name: 'Board of Directors', path: '/governance/board' },
                { name: 'ESG Framework', path: '/governance/esg' },
                { name: 'Policies', path: '/governance/policies' },
                { name: 'Compliance', path: '/governance/compliance' },
            ]
        },
        {
            name: 'News & Media',
            path: '/news',
            dropdown: [
                { name: 'Blogs / Articles', path: '/news/blogs' },
                { name: 'Press Releases', path: '/news/press-releases' },
                { name: 'Announcements', path: '/news/announcements' },
            ]
        },
        {
            name: 'Careers',
            path: '/careers',
            dropdown: [
                { name: 'Job Listings', path: '/careers/listings' },
                { name: 'Life at Company', path: '/careers/life' },
            ]
        },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
            
            <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 flex items-center justify-between">

                <Link to="/" className="flex items-center">
                    <img src={logo} alt="NIF Logo" className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => `
                                    flex items-center text-[15px] font-semibold transition-colors duration-200 py-2
                                    ${isActive ? 'text-corporate-orange border-b-2 border-corporate-orange' : 'text-corporate-navy hover:text-corporate-orange'}
                                `}
                            >
                                {link.name}
                                {link.dropdown && (
                                    <svg className={`ml-1 w-4 h-4 ${activeDropdown === link.name ? 'rotate-180' : ''}`} viewBox="0 0 24 24">
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </NavLink>

                            {/* DROPDOWN SAME */}
                            {link.dropdown && (
                                <div className="absolute left-0 top-full pt-4 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 min-w-[260px]">
                                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                                        <div className="py-3">
                                            {link.dropdown.map((item, idx) => (
                                                <div key={idx}>
                                                    {item.items ? (
                                                        <>
                                                            <h3 className="px-6 py-2 text-xs text-gray-400">{item.name}</h3>
                                                            {item.items.map((sub, i) => (
                                                                <Link key={i} to={sub.path} className="block px-6 py-2">
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </>
                                                    ) : (
                                                        <Link to={item.path} className="block px-6 py-2">
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* ✅ DESKTOP BUTTON FIX */}
                <div className="hidden lg:flex items-center">
                    <button
                        onClick={() => setOpen(true)}
                        className="bg-corporate-orange text-white px-7 py-3 rounded-lg font-bold text-sm"
                    >
                        Get in Touch
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-corporate-navy"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* ✅ MOBILE MENU FIX (ADD BUTTON HERE) */}
            <div className={`lg:hidden bg-white border-t transition-all ${isMenuOpen ? 'max-h-[80vh]' : 'max-h-0 overflow-hidden'}`}>
                <div className="px-6 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <NavLink key={link.name} to={link.path} className="block">
                            {link.name}
                        </NavLink>
                    ))}

                    {/* ✅ MOBILE BUTTON */}
                    <button
                        onClick={() => setOpen(true)}
                        className="w-full bg-corporate-orange text-white py-3 rounded-lg font-bold"
                    >
                        Get in Touch
                    </button>
                </div>
            </div>

            {/* ✅ MODAL */}
            <EnquiryModal isOpen={open} onClose={() => setOpen(false)} />

        </nav>
    );
};

export default Navbar;