import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../modules/public/layouts/PublicLayout';

// Public Pages
import Home from '../modules/public/pages/home/pages/Home';
import Blogs from '../modules/public/pages/news-media/Blogs';
import BlogDetail from '../modules/public/pages/news-media/BlogDetail';
import JobListings from '../modules/public/pages/careers/JobListings';
import JobDetail from '../modules/public/pages/careers/JobDetail';
import BoardOfDirectors from '../modules/public/pages/governance/BoardOfDirectors';
import ContactInfo from '../modules/public/pages/contact/ContactInfo';
import PressReleases from '../modules/public/pages/news-media/PressReleases';

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>

                {/* Home Page */}
                <Route index element={<Home />} />

                {/* About Routes (Placeholder) */}
                <Route path="about" element={<div className="pt-24 text-center">About Us Overview</div>} />
                <Route path="about/overview" element={<div className="pt-24 text-center">Company Overview</div>} />
                <Route path="about/history" element={<div className="pt-24 text-center">History / Timeline</div>} />
                <Route path="about/mission-vision" element={<div className="pt-24 text-center">Mission &amp; Vision</div>} />
                <Route path="about/leadership" element={<div className="pt-24 text-center">Leadership</div>} />

                {/* Sector Routes */}
                <Route path="sectors" element={<div className="pt-24 text-center">Sectors Overview</div>} />
                <Route path="sectors/logistics" element={<div className="pt-24 text-center">Logistics Overview</div>} />
                <Route path="sectors/logistics/services" element={<div className="pt-24 text-center">Logistics Services</div>} />
                <Route path="sectors/finance" element={<div className="pt-24 text-center">Finance Overview</div>} />
                <Route path="sectors/future" element={<div className="pt-24 text-center">Future Sectors</div>} />

                {/* Governance Routes */}
                <Route path="governance" element={<BoardOfDirectors />} />
                <Route path="governance/board" element={<BoardOfDirectors />} />
                <Route path="governance/esg" element={<div className="pt-24 text-center">ESG Framework</div>} />

                {/* News & Media Routes */}
                <Route path="news" element={<PressReleases />} />
                <Route path="news/blogs" element={<Blogs />} />
                <Route path="news/blogs/:id" element={<BlogDetail />} />
                <Route path="news/press-releases" element={<PressReleases />} />

                {/* Career Routes */}
                <Route path="careers" element={<JobListings />} />
                <Route path="careers/listings" element={<JobListings />} />
                <Route path="careers/life" element={<div className="pt-24 text-center">Life at Company</div>} />
                <Route path="careers/:id" element={<JobDetail />} />

                {/* Contact Route */}
                <Route path="contact" element={<ContactInfo />} />

                {/* 404 Route */}
                <Route path="*" element={<div className="pt-24 text-center text-2xl font-bold">404 - Page Not Found</div>} />
            </Route>
        </Routes>
    );
};

export default PublicRoutes;
