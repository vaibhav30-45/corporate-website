import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import EnquiryModal from "../pages/home/components/EnquiryModal";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
    const [open, setOpen] = useState(false); 
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
        setActiveMobileDropdown(null);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'About',
            path: '/about',
            dropdown: [
                { name: 'Company Overview', path: '/about#overview' },
                { name: 'History / Timeline', path: '/about#history' },
                { name: 'Mission & Vision', path: '/about#mission' },
                { name: 'Leadership', path: '/about#leadership' },
            ]
        },
        {
           
    name: "Sectors",
    path: "/sectors",
    dropdown: [
        {
            name: "Logistics",
            path: "/sectors/logistics",   // logistics page open
            items: [
                {
                    name: "Overview",
                    path: "/sectors/logistics#overview"
                },
                {
                    name: "Services",
                    path: "/sectors/logistics#services"
                },
                {
                    name: "Case Studies",
                    path: "/sectors/logistics#case-studies"
                }
            ]
        },
        {
            name: "Finance",
            path: "/sectors/finance",   // finance page open
            items: [
                {
                    name: "Overview",
                    path: "/sectors/finance#overview"
                },
                {
                    name: "Services",
                    path: "/sectors/finance#services"
                },
                {
                    name: "Insights",
                    path: "/sectors/finance#insights"
                }
            ]
        },
        {
            name: "Future Sectors",
            path: "/sectors/future",   // future sector page open
            items: [
                {
                    name: "Overview",
                    path: "/sectors/future#overview"
                },
                {
                    name: "Focus Areas",
                    path: "/sectors/future#focus-areas"
                }
            ]
        }
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
                // { name: 'Job Listings', path: '/careers/listings' },
                { name: 'Life at Company', path: '/careers/life' },
            ]
        },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleMobileDropdown = (name) => {
        if (activeMobileDropdown === name) {
            setActiveMobileDropdown(null);
        } else {
            setActiveMobileDropdown(name);
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
            
            <div className="w-full max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:pr-8 lg:pl-20 lg:pr-12 flex items-center justify-between">

                <Link to="/" className="flex items-center">
                    <img src={logo} alt="NIF Logo" className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" />
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
                                <div className="absolute left-0 top-full pt-4 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 min-w-[280px] z-50">
                                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                                        <div className="py-3">
                                        

                                            {link.dropdown.map((item, idx) => (
    <div
        key={idx}
        className="group relative"
        onMouseEnter={() => item.items && setActiveSection(item.name)}
    >
        <Link
            to={item.path}
            className="block w-full px-6 py-3 text-sm font-semibold text-corporate-navy hover:bg-slate-50 hover:text-corporate-orange transition cursor-pointer"
        >
            {item.name}
        </Link>

        {item.items && activeSection === item.name && (
            <div className="bg-slate-50 border-t border-slate-200">
                {item.items.map((sub, i) => (
                    <Link
                        key={i}
                        to={sub.path}
                        className="block w-full px-9 py-2 text-sm text-gray-600 hover:text-corporate-orange hover:bg-white transition cursor-pointer"
                    >
                        {sub.name}
                    </Link>
                ))}
            </div>
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
                    className="lg:hidden text-corporate-navy p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* ✅ MOBILE MENU IMPROVED */}
            <div className={`lg:hidden bg-white border-t transition-all duration-300 overflow-y-auto ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-6 space-y-2">
                    {navLinks.map((link) => (
                        <div key={link.name} className="border-b border-gray-50 last:border-none pb-2">
                            <div className="flex items-center justify-between py-2">
                                <NavLink to={link.path} className={({isActive}) => `text-base font-semibold ${isActive ? 'text-corporate-orange' : 'text-corporate-navy'}`}>
                                    {link.name}
                                </NavLink>
                                {link.dropdown && (
                                    <button 
                                        onClick={() => toggleMobileDropdown(link.name)}
                                        className="p-2 text-corporate-navy"
                                    >
                                        <svg className={`w-4 h-4 transition-transform ${activeMobileDropdown === link.name ? 'rotate-180' : ''}`} viewBox="0 0 24 24">
                                            <path d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            
                            {link.dropdown && activeMobileDropdown === link.name && (
                                <div className="pl-4 pb-2 space-y-2 bg-slate-50 rounded-lg mt-1 py-2">
                                    {link.dropdown.map((item, idx) => (
                                        <div key={idx}>
                                            <Link to={item.path} className="block py-2 text-sm font-medium text-gray-700 hover:text-corporate-orange">
                                                {item.name}
                                            </Link>
                                            {item.items && (
                                                <div className="pl-4 space-y-1 border-l border-gray-200 ml-1">
                                                    {item.items.map((sub, i) => (
                                                        <Link key={i} to={sub.path} className="block py-1 text-xs text-gray-500 hover:text-corporate-orange">
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="pt-4">
                        <button
                            onClick={() => setOpen(true)}
                            className="w-full bg-corporate-orange text-white py-4 rounded-lg font-bold shadow-lg"
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>

            {/* ✅ MODAL */}
            <EnquiryModal isOpen={open} onClose={() => setOpen(false)} />

        </nav>
    );
};

export default Navbar;
