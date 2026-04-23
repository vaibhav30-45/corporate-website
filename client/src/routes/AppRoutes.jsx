// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import MainLayout from '../layouts/MainLayout';

// // Modular Pages
// import Home from '../modules/home/pages/Home';
// import BlogList from '../modules/blog/pages/BlogList';

// import BlogDetail from '../modules/blog/pages/BlogDetail';
// import SectorList from '../modules/sector/pages/SectorList';
// import SectorDetail from '../modules/sector/pages/SectorDetail';
// import JobList from '../modules/careers/pages/JobList';
// import JobDetail from '../modules/careers/pages/JobDetail';
// import GovernancePage from '../modules/governance/pages/GovernancePage';
// import ContactPage from '../modules/contact/pages/ContactPage';
// import MediaGallery from '../modules/media/pages/MediaGallery';

// const AppRoutes = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<MainLayout />}>

//                 {/* Home Page */}
//                 <Route index element={<Home />} />


//                 {/* About Routes (Placeholder) */}
//                 <Route path="about" element={<div className="pt-24 text-center">About Us Overview</div>} />
//                 <Route path="about/overview" element={<div className="pt-24 text-center">Company Overview</div>} />
//                 <Route path="about/history" element={<div className="pt-24 text-center">History / Timeline</div>} />
//                 <Route path="about/mission-vision" element={<div className="pt-24 text-center">Mission & Vision</div>} />
//                 <Route path="about/leadership" element={<div className="pt-24 text-center">Leadership</div>} />

//                 {/* Sector Routes */}
//                 <Route path="sectors" element={<SectorList />} />
//                 <Route path="sectors/:id" element={<SectorDetail />} />
//                 <Route path="sectors/logistics" element={<SectorDetail />} />
//                 <Route path="sectors/logistics/services" element={<div className="pt-24 text-center">Logistics Services</div>} />
//                 <Route path="sectors/finance" element={<SectorDetail />} />
//                 <Route path="sectors/future" element={<div className="pt-24 text-center">Future Sectors</div>} />

//                 {/* Governance Routes */}
//                 <Route path="governance" element={<GovernancePage />} />
//                 <Route path="governance/board" element={<div className="pt-24 text-center">Board of Directors</div>} />
//                 <Route path="governance/esg" element={<div className="pt-24 text-center">ESG Framework</div>} />

//                 {/* News & Media Routes */}
//                 <Route path="news" element={<MediaGallery />} />
//                 {/* <Route path="news/blogs" element={<BlogList />} /> */}
//                 <Route path="news/blogs/:id" element={<BlogDetail />} />
//                 <Route path="news/press-releases" element={<div className="pt-24 text-center">Press Releases</div>} />

//                 {/* Career Routes */}
//                 <Route path="careers" element={<JobList />} />
//                 <Route path="careers/listings" element={<JobList />} />
//                 <Route path="careers/life" element={<div className="pt-24 text-center">Life at Company</div>} />
//                 <Route path="careers/:id" element={<JobDetail />} />

//                 {/* Contact Route */}
//                 <Route path="contact" element={<ContactPage />} />

//                 {/* 404 Route */}
//                 <Route path="*" element={<div className="pt-24 text-center text-2xl font-bold">404 - Page Not Found</div>} />
//             </Route>
//         </Routes>
//     );
// };

// export default AppRoutes;

