import React from "react";

const CookiePolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. MINIMAL HERO SECTION (Bina Image ke Legal Style Banner) */}
      <div className="bg-gray-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-20">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block">
              Privacy & Technologies
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950">
              Cookie Policy
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 font-medium pt-1">
              <div>Effective Date: <span className="text-gray-900">28/05/2026</span></div>
              <div className="text-gray-300 hidden sm:block">|</div>
              <div>Website: <a href="https://www.niostgroupinternational.com" target="_blank" rel="noreferrer" className="text-orange-600 hover:underline">www.niostgroupinternational.com</a></div>
              <div className="text-gray-300 hidden sm:block">|</div>
              <div>Status: <span className="text-emerald-600 font-semibold">In Formation</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN TEXT LAYOUT (Clean, Simple, Text-Heavy) */}
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-20 py-12 md:py-16">
        <div className="space-y-10 text-gray-700 leading-relaxed text-sm md:text-base">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              1. Introduction
            </h2>
            <p className="text-justify text-gray-600">
              This Cookie Policy explains how NiostGroup International (“NiostGroup”, “the Group”, “we”, “our”, or “us”) uses cookies and related technologies on <span className="text-gray-900 font-medium">www.niostgroupinternational.com</span> (“Website”). This Policy should be read together with the Group’s Privacy Policy.
            </p>
            <p className="text-gray-600">
              By continuing to use the Website, users acknowledge the use of cookies and related technologies as described in this Policy, subject to applicable browser and consent settings.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              2. What Are Cookies
            </h2>
            <p className="text-justify text-gray-600">
              Cookies are small text files stored on a user’s device when visiting a website. Cookies help websites: function efficiently, recognize returning users, improve user experience, support analytics, enhance operational performance, and maintain security functionality.
            </p>
            <p className="text-gray-600">
              Cookies may be temporary (“session cookies”) or remain on a device for a defined period (“persistent cookies”).
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              3. Types of Cookies We May Use
            </h2>
            <p className="text-gray-600">
              We may use the following categories of cookies and related tracking technologies:
            </p>
            
            <div className="space-y-4 pl-2">
              <div>
                <h4 className="font-semibold text-gray-900 text-base">3.1 Essential Cookies</h4>
                <p className="text-gray-600 pl-4 pt-0.5 text-justify">
                  Essential cookies support core Website functionality and may include security-related functionality, session management, network administration, website accessibility, and operational stability. Certain essential cookies may be necessary for proper Website operation.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 text-base">3.2 Analytics and Performance Cookies</h4>
                <p className="text-gray-600 pl-4 pt-1">Analytics technologies help us understand visitor interaction, website traffic patterns, operational performance, and technical functionality. These tools may collect information including:</p>
                <ul className="list-disc pl-10 space-y-1 text-gray-600 pt-1">
                  <li>Pages visited and session duration</li>
                  <li>Browser type and device information</li>
                  <li>General geographic region</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 text-base">3.3 Security and Integrity Cookies</h4>
                <p className="text-gray-600 pl-4 pt-0.5 text-justify">
                  Certain technologies may support fraud prevention, misuse detection, operational integrity, cybersecurity monitoring, and protection of Website infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              4. Analytics and Tracking Technologies
            </h2>
            <p className="text-gray-600 text-justify">
              The Website may use analytics and monitoring technologies including <span className="font-medium text-gray-900">Google Analytics</span>, browser storage technologies, traffic monitoring systems, performance measurement tools, and session analytics systems.
            </p>
            <p className="text-gray-600 text-justify">
              These technologies help support governance-oriented operational monitoring and Website improvement. Information collected through analytics technologies is generally aggregated and used for internal operational purposes.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              5. Information Collected Through Cookies
            </h2>
            <p className="text-gray-600 text-justify">
              Cookies and related technologies may collect: IP address, browser type, operating system, device identifiers, website interaction behavior, pages viewed, session duration, navigation patterns, and technical performance data. This information may not directly identify individual users but may contribute to operational analytics and system administration.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              6. Third-Party Cookies
            </h2>
            <p className="text-gray-600 text-justify">
              Some cookies or tracking technologies may be provided by third-party services associated with analytics, infrastructure, or Website functionality. Such third parties may maintain independent privacy and cookie practices. NiostGroup International does not control third-party cookie policies and encourages users to review relevant external policies separately.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              7. Managing Cookies
            </h2>
            <p className="text-gray-600 text-justify">
              Users may manage, restrict, block, or disable cookies through browser settings. Disabling cookies may affect certain Website functionality or performance.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              8. Consent and Continued Use
            </h2>
            <p className="text-gray-600 text-justify">
              Where required under applicable laws or standards, users may be presented with cookie notifications or consent tools. Continued use of the Website may constitute acknowledgment of cookie usage in accordance with this Policy and applicable settings.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              9. International Operations
            </h2>
            <p className="text-gray-600 text-justify">
              NiostGroup International is being developed as an internationally oriented holding structure. Website technologies, analytics systems, hosting environments, or infrastructure providers may involve cross-border data processing and international operational support environments. Reasonable measures will be implemented to support responsible information handling practices.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              10. Data Protection and Privacy
            </h2>
            <p className="text-gray-600 text-justify">
              Information collected through cookies and related technologies may be processed in accordance with the Group’s Privacy Policy. Users are encouraged to review the Privacy Policy for additional information.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              11. Policy Updates
            </h2>
            <p className="text-gray-600">
              This Cookie Policy may be updated periodically to reflect:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>Technological developments and operational changes</li>
              <li>Governance updates and legal developments</li>
              <li>Website functionality changes</li>
            </ul>
            <p className="text-gray-600 pt-1">
              Updated versions may be published on the Website without prior notice. Users are encouraged to review this Policy periodically.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              12. Contact Information
            </h2>
            <p className="text-gray-600">
              For inquiries relating to this Cookie Policy:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm space-y-1 max-w-sm">
              <p className="font-bold text-gray-900">NiostGroup International</p>
              <p className="text-gray-600">Website: <a href="https://www.niostgroupinternational.com" target="_blank" rel="noreferrer" className="text-orange-600 hover:underline">www.niostgroupinternational.com</a></p>
              <p className="text-gray-600">Email: <a href="mailto:info@niostgroupinternational.com" className="text-orange-600 hover:underline">info@niostgroupinternational.com</a></p>
            </div>
          </section>

          {/* Section 13 (Formation Notice) */}
          <section className="bg-orange-50/60 border-l-4 border-orange-500 p-5 rounded-r-xl space-y-2 mt-6">
            <h3 className="text-base font-bold text-orange-900 uppercase tracking-wide">
              13. Formation Notice
            </h3>
            <p className="text-orange-950 text-sm md:text-base text-justify leading-relaxed">
              NiostGroup International is currently in formation. Certain operational, legal, governance, and technological structures referenced throughout the Website may evolve following formal establishment of relevant entities and operational platforms.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;