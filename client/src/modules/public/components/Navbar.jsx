import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../../assets/NiostGroup-logo.png";
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

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setActiveMobileDropdown(null);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },

    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Company Overview", path: "/about#overview" },
        // { name: "History / Timeline", path: "/about#history" },
        { name: "Mission & Vision", path: "/about#mission" },
        { name: "Leadership", path: "/about#leadership" },
      ],
    },

   {
  name: "Sectors",
  path: "/sectors",
  dropdown: [
    {
  name: "Logistics",
  path: "/sectors#logistics",
},
{
  name: "Maritime & Port",
  path: "/sectors#maritime",
},
{
  name: "Agro-Industrial Manufacturing",
  path: "/sectors#agro-industrial",
},
{
  name: "Financial Infrastructure / FinTech",
  path: "/sectors#fintech",
},
  ],
},
    {
      name: "Governance",
      path: "/governance",
      // dropdown: [
      //   { name: "Board of Directors", path: "/governance/board" },
      //   { name: "ESG Framework", path: "/governance/esg" },
      //   { name: "Policies", path: "/governance/policies" },
      //   { name: "Compliance", path: "/governance/compliance" },
      // ],
    },

    {
      name: "Insights",
      path: "/announcements",
      // dropdown: [
      //   { name: "Blogs / Articles", path: "/announcements/blogs" },
      //   { name: "Press Releases", path: "/announcements/press-releases" },
      // ],
    },

    {
      name: "Careers",
      path: "/careers",
      // dropdown: [{ name: "Life at Company", path: "/careers/life" }],
    },

    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileDropdown = (name) => {
    if (activeMobileDropdown === name) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(name);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* NAVBAR */}
      <div className="w-full mx-auto h-[72px] sm:h-[78px] flex items-center justify-between pl-4 pr-4 sm:pl-8 sm:pr-8 lg:pl-20 lg:pr-12">
        {/* LOGO */}
        <Link to="/" className="flex items-center shrink-0">
  <img
    src={logo}
    alt="NIF Logo"
    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
  />
</Link>
        {/* DESKTOP NAVIGATION */}
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
                                    ${
                                      isActive
  ? "text-[#B96937] border-b-2 border-[#B96937]"
  : "text-corporate-navy hover:text-[#B96937]"
                                    }
                                `}
              >
                {link.name}

                {link.dropdown && (
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === link.name ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </NavLink>

              {/* DESKTOP DROPDOWN */}
              {link.dropdown && (
                <div className="absolute left-0 top-full pt-4 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 min-w-[280px] z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="py-3">
                      {link.dropdown.map((item, idx) => (
                        <div
                          key={idx}
                          className="group relative"
                          onMouseEnter={() =>
                            item.items && setActiveSection(item.name)
                          }
                        >
                          <Link
                            to={item.path}
                            className="block w-full px-6 py-3 text-sm font-semibold text-corporate-navy hover:bg-slate-50 hover:text-[#B96937] transition cursor-pointer"
                          >
                            {item.name}
                          </Link>

                          {item.items && activeSection === item.name && (
                            <div className="bg-slate-50 border-t border-slate-200">
                              {item.items.map((sub, i) => (
                                <Link
                                  key={i}
                                  to={sub.path}
                                  className="block w-full px-9 py-2 text-sm text-gray-600 hover:text-[#B96937] hover:bg-white transition cursor-pointer"
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

        {/* DESKTOP BUTTON */}
        <div className="hidden lg:flex items-center shrink-0">
         <button
  onClick={() => setOpen(true)}
  className="bg-gradient-to-r from-[#A04F23] via-[#B96937] to-[#D3854D] text-white px-7 py-3 rounded-lg font-bold text-sm hover:scale-105 transition"
>
  Get in Touch
</button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-corporate-navy p-1 flex items-center justify-center shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden bg-white transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen
            ? "max-h-[1000px] opacity-100 border-t"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-2">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="border-b border-gray-50 last:border-none pb-2"
            >
              <div className="flex items-center justify-between py-2">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-semibold ${
                      isActive ? "text-[#B96937]" : "text-corporate-navy"
                    }`
                  }
                >
                  {link.name}
                </NavLink>

                {link.dropdown && (
                  <button
                    onClick={() => toggleMobileDropdown(link.name)}
                    className="p-2 text-corporate-navy"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        activeMobileDropdown === link.name ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M19 9l-7 7-7-7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {link.dropdown && activeMobileDropdown === link.name && (
                <div className="pl-4 pb-2 space-y-2 bg-slate-50 rounded-lg mt-1 py-2">
                  {link.dropdown.map((item, idx) => (
                    <div key={idx}>
                      <Link
                        to={item.path}
                        className="block py-2 text-sm font-medium text-gray-700 hover:text-[#B96937]"
                      >
                        {item.name}
                      </Link>

                      {item.items && (
                        <div className="pl-4 space-y-1 border-l border-gray-200 ml-1">
                          {item.items.map((sub, i) => (
                            <Link
                              key={i}
                              to={sub.path}
                              className="block py-1 text-xs text-gray-500 hover:text-[#B96937]"
                            >
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

          {/* MOBILE BUTTON */}
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

      {/* MODAL */}
      <EnquiryModal isOpen={open} onClose={() => setOpen(false)} />
    </nav>
  );
};

export default Navbar;
