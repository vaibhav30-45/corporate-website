import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FileText,
    MessageSquare,
    Users,
    Briefcase,
    ArrowUpRight,
    Newspaper,
    Plus,
    CheckCircle2,
    Clock,
    ChevronRight,
    LayoutDashboard
} from 'lucide-react';

// Services
import { getAdminBlogs } from '../../../services/blogService';
import { getAdminNews } from '../../../services/newsService';
import { getAllEnquiries } from '../../../services/enquiryService';
import { getApplications, getAdminJobs } from '../../../services/careerService';

const Dashboard = () => {
    const [stats, setStats] = useState({
        blogs: 0,
        news: 0,
        enquiries: 0,
        applications: 0,
        activeJobs: 0,
        unreadEnquiries: 0
    });
    const [recentEnquiries, setRecentEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                const [blogs, news, enquiries, applications, jobs] = await Promise.all([
                    getAdminBlogs(),
                    getAdminNews(),
                    getAllEnquiries(),
                    getApplications(),
                    getAdminJobs()
                ]);

                const unreadEnquiries = enquiries.filter(e => !e.isRead).length;

                setStats({
                    blogs: blogs.length,
                    news: news.length,
                    enquiries: enquiries.length,
                    applications: applications.length,
                    activeJobs: jobs.length,
                    unreadEnquiries
                });

                setRecentEnquiries(enquiries.slice(0, 5));
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const statCards = [
        { 
            label: 'Total Blogs', 
            value: stats.blogs, 
            icon: <FileText className="text-blue-600" />, 
            color: 'bg-blue-50',
            link: '/admin/blogs'
        },
        { 
            label: 'News Updates', 
            value: stats.news, 
            icon: <Newspaper className="text-indigo-600" />, 
            color: 'bg-indigo-50',
            link: '/admin/news'
        },
        { 
            label: 'Job Applications', 
            value: stats.applications, 
            icon: <Users className="text-purple-600" />, 
            color: 'bg-purple-50',
            link: '/admin/jobs'
        },
        { 
            label: 'New Enquiries', 
            value: stats.unreadEnquiries, 
            icon: <MessageSquare className="text-teal-600" />, 
            color: 'bg-teal-50',
            link: '/admin/enquiries',
            badge: stats.unreadEnquiries > 0 ? `${stats.unreadEnquiries} New` : null
        },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-corporate-orange border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-500 font-medium animate-pulse">Synchronizing dashboard data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-corporate-orange mb-1">
                        <LayoutDashboard size={18} />
                        <span className="text-sm font-bold uppercase tracking-wider">Control Panel</span>
                    </div>
                    <h1 className="text-2xl font-bold text-corporate-navy tracking-tight">Performance Overview</h1>
                    <p className="text-gray-500 mt-1">Real-time statistics and management tools for your platform.</p>
                </div>
                <div className="flex gap-3">
                    <Link 
                        to="/admin/blogs" 
                        className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all shadow-sm active:scale-95"
                    >
                        <Plus size={18} />
                        New Content
                    </Link>
                    <Link 
                        to="/admin/enquiries" 
                        className="flex items-center gap-2 bg-corporate-navy text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-navy-800 transition-all shadow-md shadow-navy-100 active:scale-95"
                    >
                        Review Enquiries
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, index) => (
                    <Link 
                        key={index} 
                        to={stat.link}
                        className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight size={20} className="text-gray-300 group-hover:text-corporate-orange" />
                        </div>
                        <div className="flex justify-between items-start mb-5">
                            <div className={`${stat.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                                {stat.icon}
                            </div>
                            {stat.badge && (
                                <span className="bg-orange-100 text-corporate-orange text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter">
                                    {stat.badge}
                                </span>
                            )}
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{stat.label}</p>
                            <h3 className="text-4xl font-black text-corporate-navy mt-1 tabular-nums">
                                {stat.value}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Recent Activity / Enquiries */}
                <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-8 border-b border-gray-50 flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-bold text-corporate-navy">Recent Inquiries</h3>
                            <p className="text-sm text-gray-400 mt-0.5">Stay updated with your latest business leads</p>
                        </div>
                        <Link to="/admin/enquiries" className="text-corporate-orange text-sm font-bold flex items-center gap-1 hover:underline">
                            View All Inquiries <ChevronRight size={16} />
                        </Link>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {recentEnquiries.length > 0 ? (
                            recentEnquiries.map((enquiry, index) => (
                                <div key={enquiry._id || index} className="p-6 hover:bg-gray-50 transition-colors group cursor-pointer flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg ${
                                            index % 3 === 0 ? 'bg-blue-50 text-blue-600' : 
                                            index % 3 === 1 ? 'bg-purple-50 text-purple-600' : 'bg-teal-50 text-teal-600'
                                        }`}>
                                            {enquiry.name?.charAt(0) || 'E'}
                                        </div>
                                        <div>
                                            <p className="font-bold text-corporate-navy group-hover:text-corporate-orange transition-colors">{enquiry.name}</p>
                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                                    <Clock size={12} />
                                                    {new Date(enquiry.createdAt).toLocaleDateString()}
                                                </span>
                                                <span className="text-[10px] py-0.5 px-2 bg-gray-100 text-gray-500 rounded-md font-bold uppercase tracking-tight">
                                                    {enquiry.subject || 'General Inquiry'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {enquiry.isRead ? (
                                            <CheckCircle2 size={18} className="text-green-500" />
                                        ) : (
                                            <div className="w-2 h-2 bg-corporate-orange rounded-full"></div>
                                        )}
                                        <ChevronRight size={20} className="text-gray-200 group-hover:text-gray-400 transition-colors" />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-12 text-center">
                                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                                    <MessageSquare size={32} />
                                </div>
                                <h4 className="text-gray-900 font-bold">No recent enquiries</h4>
                                <p className="text-gray-500 text-sm mt-1">Check back later for new business leads.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Quick Actions / System Status */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-corporate-navy rounded-3xl p-8 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-2">Management Tools</h3>
                            <p className="text-blue-200/70 text-sm mb-6">Quick shortcuts to manage your platform resources.</p>
                            
                            <div className="space-y-3">
                                <Link to="/admin/blogs" className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors">
                                    <span className="font-medium">Publish New Blog</span>
                                    <Plus size={18} className="text-corporate-orange" />
                                </Link>
                                <Link to="/admin/news" className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors">
                                    <span className="font-medium">Post News Update</span>
                                    <Plus size={18} className="text-corporate-orange" />
                                </Link>
                                <Link to="/admin/jobs" className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors">
                                    <span className="font-medium">Open Career Position</span>
                                    <Plus size={18} className="text-corporate-orange" />
                                </Link>
                            </div>
                        </div>
                        {/* Abstract background element */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-corporate-orange/20 rounded-full blur-3xl"></div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-corporate-navy mb-4">Platform Health</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-600">API Status</span>
                                </div>
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">Operational</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-600">Database</span>
                                </div>
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">Connected</span>
                            </div>
                            <div className="pt-4 mt-4 border-t border-gray-50">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-400">Server Location</span>
                                    <span className="text-gray-600 font-bold">Cloud (Production)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
