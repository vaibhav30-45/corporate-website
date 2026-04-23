import React from 'react';
import { 
    Users, 
    FileText, 
    MessageSquare, 
    TrendingUp,
    ArrowUpRight,
    Briefcase
} from 'lucide-react';

const Dashboard = () => {
    const stats = [
        { label: 'Total Blogs', value: '24', icon: <FileText className="text-blue-600" />, trend: '+12%', color: 'bg-blue-50' },
        { label: 'Job Applications', value: '156', icon: <Users className="text-purple-600" />, trend: '+5%', color: 'bg-purple-50' },
        { label: 'Active Jobs', value: '8', icon: <Briefcase className="text-orange-600" />, trend: '0%', color: 'bg-orange-50' },
        { label: 'Unread Enquiries', value: '12', icon: <MessageSquare className="text-teal-600" />, trend: '-2%', color: 'bg-teal-50' },
    ];

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div>
                <h1 className="text-2xl font-bold text-corporate-navy">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back, Admin. Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`${stat.color} p-3 rounded-xl`}>
                                {stat.icon}
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                                stat.trend.startsWith('+') ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
                            }`}>
                                {stat.trend}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                            <h3 className="text-3xl font-bold text-corporate-navy mt-1">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts/Large Content Area Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-80 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        {/* <h3 className="font-bold text-corporate-navy">Traffic Analytics</h3>
                        <button className="text-corporate-orange text-xs font-bold flex items-center gap-1 hover:underline">
                            View Report <TrendingUp size={14} />
                        </button> */}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center">
                        <p className="text-gray-400 text-sm">Analytics Chart Placeholder</p>
                    </div>
                </div>

                {/* <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                    <h3 className="font-bold text-corporate-navy mb-6">Recent Enquiries</h3>
                    <div className="space-y-4 flex-1">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex gap-3 items-center p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                                <div className="w-10 h-10 rounded-full bg-corporate-navy/5 flex items-center justify-center text-corporate-navy font-bold text-xs">
                                    JS
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-corporate-navy truncate">John Smith</p>
                                    <p className="text-xs text-gray-500 truncate">Partnership Inquiry...</p>
                                </div>
                                <ArrowUpRight size={14} className="text-gray-300" />
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 py-2 text-sm font-bold text-corporate-orange hover:bg-orange-50 rounded-lg transition-colors">
                        View All
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default Dashboard;
