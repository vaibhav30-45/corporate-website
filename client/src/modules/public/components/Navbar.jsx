// import React, { useState, useEffect } from 'react';
// import { NavLink, Link, useLocation } from 'react-router-dom';
// import logo from '../../../assets/logo.png';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null);
//     const location = useLocation();

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 20);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Close mobile menu on route change
//     useEffect(() => {
//         setIsMenuOpen(false);
//         setActiveDropdown(null);
//     }, [location]);

//     const navLinks = [
//         { name: 'Home', path: '/' },
//         {
//             name: 'About',
//             path: '/about',
//             dropdown: [
//                 { name: 'Company Overview', path: '/about/overview' },
//                 { name: 'History / Timeline', path: '/about/history' },
//                 { name: 'Mission & Vision', path: '/about/mission-vision' },
//                 { name: 'Leadership', path: '/about/leadership' },
//             ]
//         },
//         {
//             name: 'Sectors',
//             path: '/sectors',
//             dropdown: [
//                 {
//                     name: 'Logistics',
//                     items: [
//                         { name: 'Overview', path: '/sectors/logistics' },
//                         { name: 'Services', path: '/sectors/logistics/services' },
//                         { name: 'Case Studies', path: '/sectors/logistics/case-studies' },
//                     ]
//                 },
//                 {
//                     name: 'Finance',
//                     items: [
//                         { name: 'Overview', path: '/sectors/finance' },
//                         { name: 'Services', path: '/sectors/finance/services' },
//                         { name: 'Insights', path: '/sectors/finance/insights' },
//                     ]
//                 },
//                 { name: 'Future Sectors', path: '/sectors/future' },
//             ]
//         },
//         {
//             name: 'Governance',
//             path: '/governance',
//             dropdown: [
//                 { name: 'Board of Directors', path: '/governance/board' },
//                 { name: 'ESG Framework', path: '/governance/esg' },
//                 { name: 'Policies', path: '/governance/policies' },
//                 { name: 'Compliance', path: '/governance/compliance' },
//             ]
//         },
//         {
//             name: 'News & Media',
//             path: '/news',
//             dropdown: [
//                 { name: 'Blogs / Articles', path: '/news/blogs' },
//                 { name: 'Press Releases', path: '/news/press-releases' },
//                 { name: 'Announcements', path: '/news/announcements' },
//             ]
//         },
//         {
//             name: 'Careers',
//             path: '/careers',
//             dropdown: [
//                 { name: 'Job Listings', path: '/careers/listings' },
//                 { name: 'Life at Company', path: '/careers/life' },
//             ]
//         },
//         { name: 'Contact', path: '/contact' },
//     ];

//     return (
//         <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
//             <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
//                 {/* Logo */}
//                 <Link to="/" className="flex items-center">
//                     <img src={logo} alt="NIF Logo" className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" />
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <div className="hidden lg:flex items-center space-x-6">
//                     {navLinks.map((link) => (
//                         <div
//                             key={link.name}
//                             className="relative group"
//                             onMouseEnter={() => setActiveDropdown(link.name)}
//                             onMouseLeave={() => setActiveDropdown(null)}
//                         >
//                             <NavLink
//                                 to={link.path}
//                                 className={({ isActive }) => `
//                                     flex items-center text-[15px] font-semibold transition-colors duration-200 py-2
//                                     ${isActive ? 'text-corporate-orange border-b-2 border-corporate-orange' : 'text-corporate-navy hover:text-corporate-orange'}
//                                 `}
//                             >
//                                 {link.name}
//                                 {link.dropdown && (
//                                     <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                                     </svg>
//                                 )}
//                             </NavLink>

//                             {/* Dropdown Menu */}
//                             {link.dropdown && (
//                                 <div className={`
//                                     absolute left-0 top-full pt-4 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 min-w-[260px]
//                                 `}>
//                                     <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden ring-1 ring-black ring-opacity-5">
//                                         <div className="py-3">
//                                             {link.dropdown.map((item, idx) => (
//                                                 <div key={idx} className="relative">
//                                                     {item.items ? (
//                                                         <div className="my-2">
//                                                             <h3 className="px-6 py-2 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{item.name}</h3>
//                                                             <div className="space-y-0.5">
//                                                                 {item.items.map((subItem, sIdx) => (
//                                                                     <Link
//                                                                         key={sIdx}
//                                                                         to={subItem.path}
//                                                                         className="group/sub block px-8 py-2 text-[14px] text-corporate-navy hover:bg-gray-50 flex items-center transition-all duration-200"
//                                                                     >
//                                                                         <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/sub:bg-corporate-orange mr-3 transition-colors"></span>
//                                                                         <span className="group-hover/sub:text-corporate-orange transform group-hover/sub:translate-x-1 transition-transform">{subItem.name}</span>
//                                                                     </Link>
//                                                                 ))}
//                                                             </div>
//                                                         </div>
//                                                     ) : (
//                                                         <Link
//                                                             to={item.path}
//                                                             className="block px-6 py-2.5 text-[14px] text-corporate-navy hover:bg-gray-50 hover:text-corporate-orange transition-all duration-200 flex items-center group/item"
//                                                         >
//                                                             <span className="transform group-hover/item:translate-x-1 transition-transform">{item.name}</span>
//                                                         </Link>
//                                                     )}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Right Side Actions */}
//                 <div className="hidden lg:flex items-center">
//                     <Link
//                         to="/contact"
//                         className="relative overflow-hidden bg-corporate-orange text-white px-7 py-3 rounded-lg font-bold text-sm transition-all shadow-[0_4px_14px_0_rgba(255,122,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,122,0,0.23)] hover:scale-[1.02] active:scale-[0.98]"
//                     >
//                         Get in Touch
//                     </Link>
//                 </div>

//                 {/* Mobile Menu Toggle */}
//                 <button
//                     className="lg:hidden text-corporate-navy"
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 >
//                     {isMenuOpen ? (
//                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     ) : (
//                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     )}
//                 </button>
//             </div>

//             {/* Mobile Navigation */}
//             <div className={`
//                 lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out
//                 ${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}
//             `}>
//                 <div className="container mx-auto px-4 py-6 overflow-y-auto max-h-[75vh]">
//                     <div className="flex flex-col space-y-4">
//                         {navLinks.map((link) => (
//                             <div key={link.name} className="flex flex-col">
//                                 {link.dropdown ? (
//                                     <>
//                                         <button
//                                             onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
//                                             className="flex items-center justify-between py-2 text-corporate-navy font-semibold"
//                                         >
//                                             {link.name}
//                                             <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                                             </svg>
//                                         </button>
//                                         <div className={`
//                                             pl-4 space-y-2 overflow-hidden transition-all duration-300
//                                             ${activeDropdown === link.name ? 'max-h-[500px] py-2' : 'max-h-0'}
//                                         `}>
//                                             {link.dropdown.map((item, idx) => (
//                                                 <div key={idx}>
//                                                     {item.items ? (
//                                                         <div className="py-2">
//                                                             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.name}</span>
//                                                             <div className="pl-2 mt-1 space-y-1">
//                                                                 {item.items.map((sub, sIdx) => (
//                                                                     <Link
//                                                                         key={sIdx}
//                                                                         to={sub.path}
//                                                                         className="block py-1.5 text-sm text-gray-600 hover:text-corporate-orange"
//                                                                     >
//                                                                         • {sub.name}
//                                                                     </Link>
//                                                                 ))}
//                                                             </div>
//                                                         </div>
//                                                     ) : (
//                                                         <Link
//                                                             to={item.path}
//                                                             className="block py-1.5 text-sm text-gray-600 hover:text-corporate-orange"
//                                                         >
//                                                             {item.name}
//                                                         </Link>
//                                                     )}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </>
//                                 ) : (
//                                     <NavLink
//                                         to={link.path}
//                                         className={({ isActive }) => `
//                                             py-2 font-semibold transition-colors
//                                             ${isActive ? 'text-corporate-orange' : 'text-corporate-navy'}
//                                         `}
//                                     >
//                                         {link.name}
//                                     </NavLink>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="pt-4">
//                             <Link
//                                 to="/contact"
//                                 className="block w-full text-center bg-corporate-orange text-white py-3 rounded-md font-bold shadow-md"
//                             >
//                                 Get in Touch
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


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