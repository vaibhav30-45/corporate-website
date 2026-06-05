import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. MINIMAL HERO SECTION (Bina Image ke Legal Style Banner) */}
      <div className="bg-gray-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-20">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block">
              Terms & Disclosures
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950">
              Disclaimer
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
              This Disclaimer governs the use of the website <span className="text-gray-900 font-medium">www.niostgroupinternational.com</span> (“Website”) operated by NiostGroup International (“NIOSTGROUP”, “the Group”, “we”, “our”, or “us”).
            </p>
            <p className="text-gray-600">
              By accessing or using this Website, users acknowledge and accept the terms of this Disclaimer. If a user does not agree with this Disclaimer, the Website should not be used.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              2. Formation Status
            </h2>
            <p className="text-justify text-gray-600">
              NiostGroup International is currently in formation as a governance-first international holding structure. Information presented on this Website may include references to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>Intended governance structures and strategic sectors</li>
              <li>Operational objectives and platform development concepts</li>
              <li>International growth plans, infrastructure positioning, and logistics activities</li>
              <li>Financial infrastructure interests and future commercial initiatives</li>
            </ul>
            <p className="text-gray-600 pt-1 text-justify">
              Certain legal, regulatory, operational, structural, and organizational details remain subject to ongoing development, review, establishment, and formalization.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              3. Informational Purpose Only
            </h2>
            <p className="text-justify text-gray-600">
              All Website content is provided solely for general informational purposes, corporate communication, strategic positioning, governance-related presentation, and institutional overview purposes.
            </p>
            <p className="text-gray-900 font-semibold bg-gray-50 p-3 rounded-lg border border-gray-100 mt-2">
              ⚠️ Important: Users should seek independent professional advice before relying on any Website content.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              4. No Regulated Financial Services
            </h2>
            <p className="text-gray-600 border-l-2 border-orange-400 pl-4 italic text-justify">
              References to financial infrastructure, FinTech, or strategic financial sectors are descriptive and strategic in nature only. NiostGroup International does not currently provide regulated financial services through this Website.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              5. Forward-Looking Statements
            </h2>
            <p className="text-gray-600 text-justify">
              The Website may contain forward-looking statements relating to: strategic objectives, governance models, operational plans, market positioning, international growth, infrastructure development, future sectors, partnerships, and anticipated activities. Actual outcomes may differ materially from expectations or projections. NiostGroup International undertakes no obligation to update forward-looking statements except where legally required.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              6. Third-Party Content and External Links
            </h2>
            <p className="text-gray-600 text-justify">
              The Website may contain references or links to third-party websites, organizations, platforms, or external resources. Such references do not constitute endorsement, partnership, verification, sponsorship, or approval.
            </p>
            <p className="text-gray-600 pt-1">
              NiostGroup International is not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>External content or third-party services</li>
              <li>Independent privacy practices and external policies</li>
              <li>Or third-party operational conduct</li>
            </ul>
            <p className="text-gray-600 pt-1">
              Users interact with external resources at their own risk.
            </p>
          </section>

          {/* Section 10 (Numbered as 7 for continuity) */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              7. International Operations and Jurisdictions
            </h2>
            <p className="text-gray-600 text-justify">
              NiostGroup International is being developed with an international orientation involving multiple jurisdictions and strategic market interests. Website references to countries, markets, sectors, or international operations are informational only and do not necessarily indicate:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>Operational presence or active market participation</li>
              <li>Regulatory approval or commercial establishment</li>
            </ul>
            <p className="text-gray-600 pt-1">
              Users are responsible for compliance with local laws applicable within their jurisdictions.
            </p>
          </section>

          {/* Section 11 (Numbered as 8) */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              8. Intellectual Property
            </h2>
            <p className="text-gray-600 text-justify">
              All Website content, branding, governance materials, strategic frameworks, logos, graphics, text, and related materials remain the intellectual property of NiostGroup International unless otherwise stated. Unauthorized use, reproduction, or distribution is prohibited.
            </p>
          </section>

          {/* Section 12 (Numbered as 9) */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              9. Regulatory and Compliance Positioning
            </h2>
            <p className="text-gray-600 text-justify">
              References to governance, ESG, compliance, institutional structure, or strategic oversight reflect the Group’s intended operational philosophy and development direction. Such references should not be interpreted as confirmation of: certification, regulatory endorsement, licensing, governmental approval, or operational authorization unless expressly stated.
            </p>
          </section>

          {/* Section 13 (Numbered as 10) */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              10. Website Availability
            </h2>
            <p className="text-gray-600 text-justify">
              The Website may be modified, suspended, restricted, or discontinued without prior notice for operational, technical, governance, legal, or administrative reasons.
            </p>
          </section>

          {/* Section 14 (Numbered as 11) */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              11. Updates to this Disclaimer
            </h2>
            <p className="text-gray-600 text-justify">
              This Disclaimer may be modified, revised, updated, or replaced periodically without prior notice. Updated versions may be published on the Website. Continued use of the Website constitutes acknowledgment of revised terms.
            </p>
          </section>

          {/* Section 15 (Numbered as 12) */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              12. Contact Information
            </h2>
            <p className="text-gray-600">
              For inquiries relating to this Disclaimer:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm space-y-1 max-w-sm">
              <p className="font-bold text-gray-900">NiostGroup International</p>
              <p className="text-gray-600">Website: <a href="https://www.niostgroupinternational.com" target="_blank" rel="noreferrer" className="text-orange-600 hover:underline">www.niostgroupinternational.com</a></p>
              <p className="text-gray-600">Email: <a href="mailto:info@niostgroupinternational.com" className="text-orange-600 hover:underline">info@niostgroupinternational.com</a></p>
            </div>
          </section>

          {/* Section 16 (Numbered as 13 - Formation Notice) */}
          <section className="bg-orange-50/60 border-l-4 border-orange-500 p-5 rounded-r-xl space-y-2 mt-6">
            <h3 className="text-base font-bold text-orange-900 uppercase tracking-wide">
              13. Formation Notice
            </h3>
            <p className="text-orange-950 text-sm md:text-base text-justify leading-relaxed">
              NiostGroup International is currently in formation. Certain legal entities, governance frameworks, operational structures, strategic initiatives, and sector participation references described on this Website may evolve following formal incorporation, regulatory review, operational development, and institutional establishment processes.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Disclaimer;