import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from '../components/AdminNavbar';

const AdminLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

            {/* Main Content Area */}
            <div
                className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
                    isCollapsed ? 'ml-20' : 'ml-64'
                }`}
            >
                {/* Navbar */}
                <AdminNavbar setIsCollapsed={setIsCollapsed} />

                {/* Main Page Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>

                {/* Footer */}
                <footer className="py-4 px-6 border-t border-gray-100 text-center text-xs text-gray-400 bg-white">
                    &copy; {new Date().getFullYear()} Noisto Cooperative. Admin Management Panel.
                </footer>
            </div>
        </div>
    );
};

export default AdminLayout;
