import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Layout
import AdminLayout from '../modules/admin/layouts/AdminLayout';

// Admin Pages
import Login from '../modules/account/pages/Login';
import Dashboard from '../modules/admin/pages/Dashboard';
import ManageBlogs from '../modules/admin/pages/ManageBlogs';
import ManageCareers from '../modules/admin/pages/ManageCareers';
import JobApplications from '../modules/admin/pages/JobApplications';
import ManageEnquiries from '../modules/admin/pages/ManageEnquiries';
import ManageNews from '../modules/admin/pages/ManageNews';
import AdminProfile from '../modules/admin/pages/AdminProfile';
    
// Protected Route Component
const ProtectedAdminRoute = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

const AdminRoutes = () => {
    return (
        <Routes>
            {/* Public Admin Routes */}
            <Route path="login" element={<Login />} />

            {/* Protected Admin Routes managed under AdminLayout */}
            <Route
                path="/"
                element={
                    <ProtectedAdminRoute>
                        <AdminLayout />
                    </ProtectedAdminRoute>
                }
            >
                {/* Redirect /admin to /admin/dashboard */}
                <Route index element={<Navigate to="dashboard" replace />} />

                <Route path="dashboard" element={<Dashboard />} />
                <Route path="blogs" element={<ManageBlogs />} />

                <Route path="jobs" element={<ManageCareers />} />
                <Route path="applications" element={<JobApplications />} />
                <Route path="enquiries" element={<ManageEnquiries />} />
                <Route path="news" element={<ManageNews />} />
                <Route path="profile" element={<AdminProfile />} />
            </Route>

            {/* Fallback to login for any unknown admin sub-routes */}
            {/* <Route path="*" element={<Navigate to="/admin/login" replace />} /> */}
        </Routes>
    );
};

export default AdminRoutes;


