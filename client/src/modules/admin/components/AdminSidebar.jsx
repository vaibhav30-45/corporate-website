import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    Layers,
    Briefcase,
    MessageSquare,
    Users,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const AdminSidebar = ({ isCollapsed, setIsCollapsed }) => {
    const menuItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Blogs', path: '/admin/blogs', icon: <FileText size={20} /> },
        { name: 'News', path: '/admin/news', icon: <Layers size={20} /> },
        { name: 'Jobs', path: '/admin/jobs', icon: <Briefcase size={20} /> },
        { name: 'Job Applications', path: '/admin/applications', icon: <Users size={20} /> },
        { name: 'Enquiries', path: '/admin/enquiries', icon: <MessageSquare size={20} /> },
    ];

    return (
        <aside
            className={`
                fixed left-0 top-16
                ${isCollapsed ? 'w-20' : 'w-64'}
                h-[calc(100vh-4rem)]
                bg-white border-r border-gray-200
                transition-all duration-300 ease-in-out
                flex flex-col z-40
            `}
        >
            {/* Menu */}
            <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">

                {/* Dashboard + Toggle SAME LINE */}
                <div className="flex items-center justify-between px-3 py-2.5">
                    <NavLink
                        to="/admin/dashboard"
                        className="flex items-center gap-3"
                    >
                        <LayoutDashboard size={20} />
                        {!isCollapsed && (
                            <span className="text-sm font-semibold">
                                Dashboard
                            </span>
                        )}
                    </NavLink>

                    {/* Toggle Button */}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-1.5 rounded-lg hover:bg-gray-100"
                    >
                        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </button>
                </div>

                {/* Rest Menu */}
                {menuItems.slice(1).map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all
                            ${isActive
                                ? 'bg-orange-500 text-white'
                                : 'text-gray-600 hover:bg-gray-100'}
                        `}
                    >
                        <span className="flex justify-center w-6">
                            {item.icon}
                        </span>

                        {!isCollapsed && (
                            <span className="text-sm font-medium">
                                {item.name}
                            </span>
                        )}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default AdminSidebar;