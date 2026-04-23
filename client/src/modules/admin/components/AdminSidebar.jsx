import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    LayoutDashboard, 
    FileText, 
    Layers, 
    Briefcase, 
    MessageSquare,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const AdminSidebar = ({ isCollapsed, setIsCollapsed }) => {
    const menuItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Blogs', path: '/admin/blogs', icon: <FileText size={20} /> },
        { name: 'Sectors', path: '/admin/sectors', icon: <Layers size={20} /> },
        { name: 'Jobs', path: '/admin/jobs', icon: <Briefcase size={20} /> },
        { name: 'Enquiries', path: '/admin/enquiries', icon: <MessageSquare size={20} /> },
    ];

    return (
        <aside 
            className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
                isCollapsed ? 'w-20' : 'w-64'
            } flex flex-col h-screen fixed left-0 top-0 z-50`}
        >
            {/* Logo Section */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
                {!isCollapsed && (
                    <span className="text-xl font-bold text-corporate-navy">
                        Noisto <span className="text-corporate-orange">Admin</span>
                    </span>
                )}
                <button 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-500 transition-colors"
                >
                    {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                            ${isActive 
                                ? 'bg-corporate-orange text-white shadow-md shadow-corporate-orange/20' 
                                : 'text-gray-600 hover:bg-gray-50 hover:text-corporate-navy'}
                        `}
                    >
                        <span className={`${isCollapsed ? 'mx-auto' : ''}`}>
                            {item.icon}
                        </span>
                        {!isCollapsed && (
                            <span className="font-medium whitespace-nowrap">
                                {item.name}
                            </span>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* Footer / User Section */}
            {!isCollapsed && (
                <div className="p-4 border-t border-gray-100">
                    <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Signed in as</p>
                        <p className="text-sm font-medium text-corporate-navy truncate">admin@gmail.com</p>
                    </div>
                </div>
            )}
        </aside>
    );
};

export default AdminSidebar;
