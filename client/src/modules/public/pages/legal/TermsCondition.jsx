import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. MINIMAL HERO SECTION (Bina Image ke Legal Style Banner) */}
      <div className="bg-gray-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-20">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block">
              Legal & Compliance
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950">
              Terms & Conditions
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
              These Terms & Conditions (“Terms”) govern access to and use of the website <span className="text-gray-900 font-medium">www.niostgroupinternational.com</span> (“Website”) operated by NIOSTGROUP International (“NIOSTGROUP”, “the Group”, “we”, “our”, or “us”).
            </p>
            <p className="text-gray-600">
              By accessing, browsing, or using this Website, users acknowledge that they have read, understood, and agreed to comply with these Terms. If a user does not agree with these Terms, the Website should not be used.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              2. Corporate Status and Formation Notice
            </h2>
            <p className="text-justify text-gray-600">
              NIOSTGROUP International is currently in formation as a governance-first international holding structure. Certain information presented throughout the Website may reference intended operational structures, strategic sectors, governance objectives, future platforms, or development initiatives that remain subject to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>Corporate formation processes</li>
              <li>Regulatory considerations and Jurisdictional approvals</li>
              <li>Commercial feasibility and Strategic review</li>
              <li>Operational development</li>
            </ul>
            <p className="text-gray-600 pt-1">
              Information may evolve as relevant entities and structures become formally established.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              3. Informational Purpose Only
            </h2>
            <p className="text-justify text-gray-600">
              All materials, statements, references, commentary, sector discussions, strategic positioning, and governance-related content presented on this Website are provided solely for general informational and corporate communication purposes.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              4. No Financial Services Offering
            </h2>
            <p className="text-gray-600">
              References to financial infrastructure, FinTech, governance-led financial structures, strategic financial sectors, and cross-border platform development are descriptive and strategic in nature only.
            </p>
            <p className="text-gray-600 border-l-2 border-orange-400 pl-4 italic">
              NIOSTGROUP International does not currently provide regulated financial services through this Website.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              5. Website Use
            </h2>
            <p className="text-gray-600">
              Users agree to use the Website lawfully, responsibly, and in a manner consistent with these Terms. Users shall not:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>Use the Website for unlawful purposes or disrupt Website operations</li>
              <li>Attempt unauthorized access to systems, infrastructure, or extract restricted data</li>
              <li>Introduce malicious code, harmful software, or use automated scraping tools without authorization</li>
              <li>Misrepresent affiliations with the Group or submit false or misleading information</li>
              <li>Interfere with security measures</li>
            </ul>
            <p className="text-gray-600 pt-1">
              NIOSTGROUP International reserves the right to restrict or terminate access where misuse is identified.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              6. Intellectual Property Rights
            </h2>
            <p className="text-gray-600">
              Unless otherwise stated, all Website materials are the intellectual property of NIOSTGROUP International or its licensors, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>Brand identity, logos, text, graphics, and design elements</li>
              <li>Strategic frameworks and governance materials</li>
              <li>Website architecture and visual assets</li>
              <li>Research content and publications</li>
            </ul>
            <p className="text-gray-600 pt-1 text-justify">
              No material may be copied, reproduced, modified, distributed, republished, or commercially exploited without prior written authorization. Limited personal and non-commercial viewing is permitted solely for informational purposes.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              7. Forward-Looking Statements
            </h2>
            <p className="text-gray-600 text-justify">
              The Website may contain forward-looking statements relating to strategic objectives, planned sectors, governance frameworks, international development, market positioning, future operations, platform development, and corporate intentions. Such statements are inherently subject to uncertainty, operational risks, regulatory developments, market conditions, and evolving strategic considerations.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              8. Third-Party Links and External Resources
            </h2>
            <p className="text-gray-600 text-justify">
              The Website may contain references or links to third-party websites, platforms, resources, or services. Such references are provided for convenience only and do not constitute endorsement, partnership, verification, approval, or responsibility for external content. NIOSTGROUP International is not responsible for the availability, accuracy, legality, or practices of third-party platforms. Users access external resources at their own risk.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-600 text-justify">
              To the maximum extent permitted under applicable law, NIOSTGROUP International shall not be liable for any direct, indirect, incidental, consequential, special, or commercial damages arising from use of the Website, reliance on Website content, technical interruptions, inaccuracies, omissions, security incidents, or unavailability.
            </p>
            <p className="text-gray-900 font-semibold bg-gray-50 p-3 rounded-lg border border-gray-100 mt-2">
              ⚠️ Disclaimer: The Website and its contents are provided on an “as-is” and “as-available” basis without warranties of any kind.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              10. Privacy and Data Handling
            </h2>
            <p className="text-gray-600 text-justify">
              Use of the Website may involve collection and processing of information in accordance with the Group’s Privacy Policy and Cookie Policy. Users are encouraged to review those policies separately.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              11. International Nature of Operations
            </h2>
            <p className="text-gray-600 text-justify">
              NIOSTGROUP International is being developed with an international orientation involving multiple jurisdictions and strategic market interests. Website access from different jurisdictions is undertaken at the user’s own initiative and responsibility. Users are responsible for compliance with applicable local laws where relevant.
            </p>
          </section>

          {/* Section 12 & 13 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              12. Modification of Terms
            </h2>
            <p className="text-gray-600 text-justify">
              NIOSTGROUP International reserves the right to modify, update, revise, or replace these Terms at any time without prior notice. Updated versions may be published on the Website. Continued use of the Website following updates constitutes acceptance of revised Terms.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              13. Suspension or Termination
            </h2>
            <p className="text-gray-600 text-justify">
              The Group reserves the right to suspend, restrict, modify, or terminate Website access at its discretion and without prior notice where necessary for operational, security, legal, governance, or administrative reasons.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              14. Governing Principles
            </h2>
            <p className="text-gray-600 text-justify">
              These Terms shall be interpreted in accordance with applicable legal principles relevant to the Group’s evolving governance structure and international operational framework. Nothing contained in these Terms shall be interpreted as establishing a regulated financial relationship or formal commercial undertaking.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              15. Contact Information
            </h2>
            <p className="text-gray-600">
              For inquiries relating to these Terms:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm space-y-1 max-w-sm">
              <p className="font-bold text-gray-900">NIOSTGROUP International</p>
              <p className="text-gray-600">Website: <a href="https://www.niostgroupinternational.com" target="_blank" rel="noreferrer" className="text-orange-600 hover:underline">www.niostgroupinternational.com</a></p>
              <p className="text-gray-600">Email: <a href="mailto:info@niostgroupinternational.com" className="text-orange-600 hover:underline">info@niostgroupinternational.com</a></p>
            </div>
          </section>

          {/* Section 17 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              16. Entire Understanding
            </h2>
            <p className="text-gray-600 text-justify">
              These Terms constitute the entire understanding relating to Website use and supersede prior informal understandings relating to access and usage of the Website.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsConditions;