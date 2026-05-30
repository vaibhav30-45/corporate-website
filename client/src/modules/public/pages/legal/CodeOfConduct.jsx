import React from "react";

const CodeOfConduct = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. MINIMAL HERO SECTION (Bina Image ke Legal Style Banner) */}
      <div className="bg-gray-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-20 ">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block">
              Governance & Compliance
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950">
              Code of Conduct
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
              NIOSTGROUP International (“NIOSTGROUP”, “the Group”, “we”, “our”, or “us”) is being developed as a governance-first international holding structure founded on principles of integrity, accountability, discipline, and responsible long-term value creation.
            </p>
            <p className="text-gray-600">
              This Code of Conduct establishes the ethical and professional standards expected across the Group’s evolving operational, strategic, and governance environments. The purpose of this Code is to support:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>Responsible governance</li>
              <li>Ethical conduct</li>
              <li>Institutional discipline</li>
              <li>Operational accountability</li>
              <li>Professional business practices</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              2. Scope
            </h2>
            <p className="text-justify text-gray-600">
              This Code applies, where relevant, to: founders, directors, officers, employees, advisors, consultants, contractors, strategic partners, representatives, and associated stakeholders interacting with or representing <span className="font-medium text-gray-900">NIOSTGROUP International</span>.
            </p>
            <p className="text-gray-600">
              Third parties working with the Group are expected to uphold standards consistent with this Code.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              3. Core Principles
            </h2>
            <p className="text-gray-600">
              NIOSTGROUP International seeks to operate in accordance with the following foundational principles:
            </p>
            
            <div className="space-y-4 pl-2">
              <div>
                <h4 className="font-semibold text-gray-900 text-base">3.1 Integrity</h4>
                <p className="text-gray-600 pl-4 pt-0.5">Conduct business honestly, transparently, and ethically. Avoid misleading behavior, deceptive practices, or actions inconsistent with professional standards.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base">3.2 Accountability</h4>
                <p className="text-gray-600 pl-4 pt-0.5">Accept responsibility for actions, decisions, communications, and operational conduct. Support governance frameworks designed to maintain institutional discipline and oversight.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base">3.3 Respect</h4>
                <p className="text-gray-600 pl-4 pt-0.5">Promote respectful, professional, and fair interaction across all operational and business environments. Harassment, intimidation, discrimination, abusive conduct, or unethical treatment are inconsistent with the Group’s principles.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base">3.4 Governance Discipline</h4>
                <p className="text-gray-600 pl-4 pt-0.5">Support governance-led operational behavior, structured decision-making, policy alignment, and responsible oversight practices.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base">3.5 Responsible Growth</h4>
                <p className="text-gray-600 pl-4 pt-0.5">Encourage long-term thinking, sustainable development practices, and responsible operational conduct aligned with institutional credibility.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              4. Compliance with Laws and Regulations
            </h2>
            <p className="text-gray-600">
              Individuals associated with the Group are expected to comply with: applicable laws, regulatory obligations, governance standards, and professional requirements relevant to their activities and jurisdictions. No person acting on behalf of the Group may knowingly engage in unlawful conduct.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              5. Anti-Corruption and Ethical Conduct
            </h2>
            <p className="text-gray-600">
              NIOSTGROUP International maintains a zero-tolerance approach toward:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Bribery</li>
              <li>Corruption</li>
              <li>Fraud</li>
              <li>Improper influence</li>
              <li>Undisclosed conflicts of interest</li>
              <li>Facilitation payments</li>
              <li>Or unethical commercial conduct</li>
            </ul>
            <p className="text-gray-600 pt-1">
              Individuals must avoid actions that could compromise operational integrity, governance credibility, legal compliance, or institutional reputation. Additional requirements may be addressed through the Group’s Anti-Corruption Policy.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              6. Conflicts of Interest
            </h2>
            <p className="text-gray-600 text-justify">
              Individuals associated with the Group are expected to avoid situations where personal interests conflict, or appear to conflict, with the interests of NIOSTGROUP International. Potential conflicts should be disclosed through appropriate governance or management channels where applicable.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              7. Confidentiality and Information Protection
            </h2>
            <p className="text-gray-600 text-justify">
              Confidential, proprietary, strategic, operational, or sensitive information obtained through association with the Group should be protected responsibly. Unauthorized disclosure, misuse, or inappropriate sharing of confidential information is prohibited. This obligation may continue after the end of any professional or commercial relationship with the Group.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              8. Respectful Workplace and Professional Environment
            </h2>
            <p className="text-gray-600 text-justify">
              NIOSTGROUP International seeks to encourage professional and respectful interaction across all environments associated with the Group. The following conduct is inconsistent with this Code: discrimination, harassment, intimidation, abusive conduct, retaliation, or unethical treatment of individuals. Professional conduct is expected regardless of: nationality, background, gender, religion, ethnicity, or professional status.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              9. Responsible Communications
            </h2>
            <p className="text-gray-600">
              Public, digital, written, verbal, and online communications involving the Group should remain:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Accurate</li>
              <li>Professional</li>
              <li>Responsible</li>
              <li>And consistent with governance standards</li>
            </ul>
            <p className="text-gray-600 pt-1">
              Unauthorized public statements made on behalf of the Group are prohibited unless appropriately authorized.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              10. Protection of Assets and Resources
            </h2>
            <p className="text-gray-600 text-justify">
              Individuals associated with the Group are expected to use organizational resources responsibly and only for legitimate operational or professional purposes. Improper use, misuse, theft, unauthorized access, or negligent handling of assets, systems, infrastructure, or intellectual property is prohibited.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              11. Reporting Concerns
            </h2>
            <p className="text-gray-600">
              Individuals are encouraged to report suspected:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Misconduct</li>
              <li>Unethical behavior</li>
              <li>Compliance concerns</li>
              <li>Governance violations</li>
              <li>Corruption risks</li>
              <li>Or serious operational concerns</li>
            </ul>
            <p className="text-gray-600 pt-1">
              through appropriate communication channels where available. NIOSTGROUP International seeks to support responsible reporting conducted in good faith.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              12. Non-Retaliation Principle
            </h2>
            <p className="text-gray-600 text-justify">
              Retaliation against individuals who raise genuine concerns in good faith is inconsistent with the principles of this Code. The Group seeks to encourage responsible governance culture and ethical accountability.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              13. Third-Party Expectations
            </h2>
            <p className="text-gray-600">
              Business partners, advisors, contractors, and external representatives associated with NIOSTGROUP International are expected to operate in a manner consistent with:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Lawful conduct</li>
              <li>Ethical standards</li>
              <li>Governance discipline</li>
              <li>And professional integrity</li>
            </ul>
            <p className="text-gray-600 pt-1">
              The Group reserves the right to discontinue relationships where conduct materially conflicts with these principles.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              14. International Operations
            </h2>
            <p className="text-gray-600">
              As an internationally oriented holding structure, NIOSTGROUP International recognizes the importance of respecting:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Cross-border legal standards</li>
              <li>International governance expectations</li>
              <li>Responsible business practices</li>
              <li>And jurisdiction-specific compliance obligations</li>
            </ul>
          </section>

          {/* Section 15 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              15. Policy Evolution
            </h2>
            <p className="text-gray-600 text-justify">
              This Code of Conduct may be updated periodically as: the Group’s operational structure evolves, governance frameworks mature, regulatory expectations develop, or organizational activities expand internationally. Updated versions may be published through official communication channels.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              16. Contact Information
            </h2>
            <p className="text-gray-600">
              For governance or conduct-related inquiries:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm space-y-1 max-w-sm">
              <p className="font-bold text-gray-900">NIOSTGROUP International</p>
              <p className="text-gray-600">Website: <a href="https://www.niostgroupinternational.com" target="_blank" rel="noreferrer" className="text-orange-600 hover:underline">www.niostgroupinternational.com</a></p>
              <p className="text-gray-600">Email: <a href="mailto:info@niostgroupinternational.com" className="text-orange-600 hover:underline">info@niostgroupinternational.com</a></p>
            </div>
          </section>

          {/* Section 17 (Formation Notice) */}
          <section className="bg-orange-50/60 border-l-4 border-orange-500 p-5 rounded-r-xl space-y-2 mt-6">
            <h3 className="text-base font-bold text-orange-900 uppercase tracking-wide">
              17. Formation Notice
            </h3>
            <p className="text-orange-950 text-sm md:text-base text-justify leading-relaxed">
              NIOSTGROUP International is currently in formation. Certain governance structures, operational procedures, reporting frameworks, and institutional controls referenced in this Code may continue to evolve following formal establishment of relevant entities and operating platforms.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;