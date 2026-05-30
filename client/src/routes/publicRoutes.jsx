import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../modules/public/layouts/PublicLayout';

// Public Pages
import Home from '../modules/public/pages/home/pages/Home';

const NewsMedia = lazy(() => import('../modules/public/pages/news-media/NewsMedia'));
const NewsDetail = lazy(() => import('../modules/public/pages/news-media/NewsDetail'));//

// import Blogs from '../modules/public/pages/news-media/Blogs';
// import BlogDetail from '../modules/public/pages/news-media/BlogDetail';

import CareersHome from '../modules/public/pages/careers/pages/CareersHome';
import JobDetail from '../modules/public/pages/careers/pages/JobDetail';
import LifeAtCompany from '../modules/public/pages/careers/pages/LifeAtCompany';

import ContactInfo from '../modules/public/pages/contact/ContactInfo';

import Governance from "../modules/public/pages/governance/pages/Governance";
import BoardOfDirectors from "../modules/public/pages/governance/pages/BoardOfDirectors";
import ESGFramework from "../modules/public/pages/governance/pages/ESGFramework";
import Policies from "../modules/public/pages/governance/pages/Policies";
import Compliance from "../modules/public/pages/governance/pages/Compliance";

import About from '../modules/public/pages/about/pages/About';
import CodeOfConduct from '../modules/public/pages/legal/CodeOfConduct';
import PrivacyPolicy from '../modules/public/pages/legal/PrivacyPolicy';
import TermsConditions from '../modules/public/pages/legal/TermsCondition';
import AntiCorruptionPolicy from '../modules/public/pages/legal/AntiCorruptionPolicy';
import CookiePolicy from '../modules/public/pages/legal/CookiePolicy';
import Disclaimer from '../modules/public/pages/legal/Disclaimer';

const SectorsPage = lazy(() => import('../modules/public/pages/sectors/Overview'));
const LogisticsPage = lazy(() => import('../modules/public/pages/sectors/logistics/Overview'));
const CaseStudyDetail = lazy(() => import('../modules/public/pages/sectors/logistics/case-studies/CaseStudyDetail'));
const CaseStudies = lazy(() => import('../modules/public/pages/sectors/logistics/case-studies/CaseStudies'));
const FinancePage = lazy(() => import('../modules/public/pages/sectors/finance/Overview'));
const FinanceInsights = lazy(() => import('../modules/public/pages/sectors/finance/insights/Insights'));
const FinanceInsightDetail = lazy(() => import('../modules/public/pages/sectors/finance/insights/InsightDetail'));
const FuturePage = lazy(() => import('../modules/public/pages/sectors/future/Overview'));
const routeFallback = <div className="pt-24 text-center text-gray-500">Loading...</div>;

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>

                {/* Home Page */}
                <Route index element={<Home />} />

                {/* About Routes (Placeholder) */}
                <Route path="about" element={<About />} />
                {/* <Route path="about/overview" element={<div className="pt-24 text-center">Company Overview</div>} />
                <Route path="about/history" element={<div className="pt-24 text-center">History / Timeline</div>} />
                <Route path="about/mission-vision" element={<div className="pt-24 text-center">Mission & Vision</div>} />
                <Route path="about/leadership" element={<div className="pt-24 text-center">Leadership</div>} /> */}

                {/* Sector Routes */}
                <Route path="sectors" element={<Suspense fallback={routeFallback}><SectorsPage /></Suspense>} />
                <Route path="sectors/logistics" element={<Suspense fallback={routeFallback}><LogisticsPage /></Suspense>} />
                <Route path="sectors/logistics/case-studies" element={<Suspense fallback={routeFallback}><CaseStudies /></Suspense>} />
                <Route path="sectors/logistics/case-studies/:id" element={<Suspense fallback={routeFallback}><CaseStudyDetail /></Suspense>} />
                <Route path="sectors/logistics/services" element={<div className="pt-24 text-center">Logistics Services</div>} />
                <Route path="sectors/finance" element={<Suspense fallback={routeFallback}><FinancePage /></Suspense>} />
                <Route path="sectors/finance/insights" element={<Suspense fallback={routeFallback}><FinanceInsights /></Suspense>} />
                <Route path="sectors/finance/insights/:id" element={<Suspense fallback={routeFallback}><FinanceInsightDetail /></Suspense>} />
                <Route path="sectors/finance/services" element={<div className="pt-24 text-center">Finance Services</div>} />
                <Route path="sectors/future" element={<Suspense fallback={routeFallback}><FuturePage /></Suspense>} />

                {/* Governance Routes */}
               <Route path="/governance" element={<Governance />} />
               <Route path="/governance/board" element={<BoardOfDirectors />} />
               <Route path="/governance/esg" element={<ESGFramework />} />
               <Route path="/governance/policies" element={<Policies />} />
               <Route path="/governance/compliance" element={<Compliance />} />

                {/*Legal Routes */}
                <Route path="legal/code-of-conduct" element={<Suspense fallback={routeFallback}><CodeOfConduct /></Suspense>} />
                <Route path="legal/privacy-policy" element={<Suspense fallback={routeFallback}><PrivacyPolicy /></Suspense>} />
                <Route path="legal/terms-and-conditions" element={<Suspense fallback={routeFallback}><TermsConditions /></Suspense>} />
                <Route path="legal/anti-corruption-policy" element={<Suspense fallback={routeFallback}><AntiCorruptionPolicy /></Suspense>} />
                <Route path="legal/cookie-policy" element={<Suspense fallback={routeFallback}><CookiePolicy /></Suspense>} />
                <Route path="legal/disclaimer" element={<Suspense fallback={routeFallback}><Disclaimer /></Suspense>} />

                {/* News & Media Routes */}
                <Route path="announcements" element={<Suspense fallback={routeFallback}><NewsMedia /></Suspense>} />
                <Route path="announcements/blogs" element={<Suspense fallback={routeFallback}><NewsMedia /></Suspense>} />
                <Route path="announcements/press-releases" element={<Suspense fallback={routeFallback}><NewsMedia /></Suspense>} />
                <Route path="announcements/announcements" element={<Suspense fallback={routeFallback}><NewsMedia /></Suspense>} />
                <Route path="announcements/blogs/:id" element={<Suspense fallback={routeFallback}><NewsDetail /></Suspense>} />
                <Route path="announcements/press-releases/:id" element={<Suspense fallback={routeFallback}><NewsDetail /></Suspense>} />
                <Route path="announcements/announcements/:id" element={<Suspense fallback={routeFallback}><NewsDetail /></Suspense>} />

                {/* Career Routes */}
                <Route path="careers" element={<CareersHome />} />
                <Route path="careers/life" element={<LifeAtCompany />} />
                <Route path="careers/:slug" element={<JobDetail />} />

                {/* Contact Route */}
                <Route path="contact" element={<ContactInfo />} />



                {/* 404 Route */}
                <Route path="*" element={<div className="pt-24 text-center text-2xl font-bold">404 - Page Not Found</div>} />
            </Route>
        </Routes>
    );
};

export default PublicRoutes;
