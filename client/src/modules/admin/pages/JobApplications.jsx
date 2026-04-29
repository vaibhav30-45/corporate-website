import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
    Download, 
    Eye, 
    Trash2, 
    Search,
    Mail,
    Phone,
    Briefcase,
    Calendar,
    User,
    FileText,
    ChevronRight,
    X
} from 'lucide-react';
import { getApplications } from '../../../services/careerService';

const ApplicationStatCard = ({ title, value, icon: Icon, color, bgColor }) => (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl ${bgColor}`}>
                <Icon size={20} className={color} />
            </div>
            <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{title}</p>
                <p className="text-3xl font-bold text-corporate-navy mt-2">{value}</p>
            </div>
        </div>
    </div>
);

const ResumeViewer = ({ application, isOpen, onClose }) => {
    if (!isOpen || !application) return null;

    const resumeUrl = application.resume?.startsWith('http') 
        ? application.resume 
        : `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${application.resume}`;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b bg-gradient-to-r from-corporate-navy to-corporate-orange">
                    <div>
                        <h2 className="text-xl font-bold text-white">{application.name}'s Resume</h2>
                        <p className="text-white/80 text-sm mt-0.5">{application.jobId?.title}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 max-h-[70vh] overflow-y-auto">
                    {application.resume ? (
                        <div className="space-y-4">
                            {/* Applicant Info */}
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Applicant Name</p>
                                        <p className="text-lg font-bold text-corporate-navy">{application.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Email</p>
                                        <p className="text-lg font-bold text-corporate-navy">{application.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Phone</p>
                                        <p className="text-lg font-bold text-corporate-navy">{application.phone || 'N/A'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Applied On</p>
                                        <p className="text-lg font-bold text-corporate-navy">
                                            {new Date(application.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            {application.message && (
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                    <p className="text-sm text-gray-500 font-medium mb-2">Application Message</p>
                                    <p className="text-gray-700">{application.message}</p>
                                </div>
                            )}

                            {/* Resume Preview */}
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center bg-gray-50">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-16 h-16 bg-corporate-orange/10 rounded-full flex items-center justify-center">
                                        <FileText className="text-corporate-orange" size={32} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">
                                            {application.resume?.split('/').pop() || 'resume.pdf'}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">PDF Resume File</p>
                                    </div>
                                    <a
                                        href={resumeUrl}
                                        download
                                        className="mt-4 flex items-center gap-2 bg-corporate-orange text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm"
                                    >
                                        <Download size={18} />
                                        Download Resume
                                    </a>
                                    {application.resume?.endsWith('.pdf') && (
                                        <p className="text-xs text-gray-500 mt-2">
                                            Open the PDF file to view the full resume in your browser
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <FileText size={48} className="text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500">No resume uploaded</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const JobApplications = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // UI State
    const [searchTerm, setSearchTerm] = useState('');
    const [filterJob, setFilterJob] = useState('All');
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [isResumeViewerOpen, setIsResumeViewerOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 8;

    // Fetch applications
    useEffect(() => {
        const fetchApplications = async () => {
            try {
                setLoading(true);
                const response = await getApplications();
                const apps = Array.isArray(response.data) ? response.data : response.data?.data || [];
                setApplications(apps);
                setError(null);
            } catch (err) {
                setError('Failed to load applications');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    // Handle URL parameters for job filtering
    useEffect(() => {
        const jobId = searchParams.get('job');
        if (jobId && applications.length > 0) {
            const job = applications.find(app => app.jobId?._id === jobId);
            if (job) {
                setFilterJob(job.jobId.title);
            }
        }
    }, [searchParams, applications]);

    // Stats calculation
    const stats = useMemo(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        return {
            total: applications.length,
            today: applications.filter(app => {
                const appDate = new Date(app.createdAt);
                appDate.setHours(0, 0, 0, 0);
                return appDate.getTime() === today.getTime();
            }).length,
            hasResume: applications.filter(app => app.resume).length,
            uniqueJobs: new Set(applications.map(app => app.jobId?._id)).size
        };
    }, [applications]);

    // Get unique jobs for filter
    const jobsList = useMemo(() => {
        const jobs = new Set(applications.map(app => app.jobId?.title).filter(Boolean));
        return ['All', ...Array.from(jobs)];
    }, [applications]);

    // Filter and search
    const filteredApplications = useMemo(() => {
        let filtered = applications.filter(app => {
            const matchesSearch = 
                app.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                app.phone?.includes(searchTerm);
            
            const matchesJob = filterJob === 'All' || app.jobId?.title === filterJob;
            
            return matchesSearch && matchesJob;
        });

        // Additional filtering by job ID from URL
        const jobId = searchParams.get('job');
        if (jobId) {
            filtered = filtered.filter(app => app.jobId?._id === jobId);
        }

        return filtered;
    }, [applications, searchTerm, filterJob, searchParams]);

    // Pagination
    const totalPages = Math.ceil(filteredApplications.length / ITEMS_PER_PAGE);
    const paginatedApplications = filteredApplications.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleViewResume = (application) => {
        setSelectedApplication(application);
        setIsResumeViewerOpen(true);
    };

    const handleDownloadResume = (resumePath) => {
        if (resumePath) {
            const url = resumePath.startsWith('http') 
                ? resumePath 
                : `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${resumePath}`;
            window.open(url, '_blank');
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-corporate-orange border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-500 font-medium">Loading applications...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto py-6 space-y-8 animate-in fade-in duration-500">
            {/* HEADER */}
            <div className="flex flex-col gap-2">
                <div>
                    <h1 className="text-2xl font-bold text-corporate-navy tracking-tight">Job Applications</h1>
                    <p className="text-gray-500 text-sm mt-2">Review and manage all job applications submitted by candidates in a consistent admin layout.</p>
                </div>
            </div>

            {/* STATS */}
            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <ApplicationStatCard 
                    title="Total Applications" 
                    value={stats.total} 
                    icon={User}
                    color="bg-blue-600"
                    bgColor="bg-blue-50"
                />
                <ApplicationStatCard 
                    title="Today" 
                    value={stats.today} 
                    icon={Calendar}
                    color="bg-green-600"
                    bgColor="bg-green-50"
                />
                <ApplicationStatCard 
                    title="With Resumes" 
                    value={stats.hasResume} 
                    icon={FileText}
                    color="bg-purple-600"
                    bgColor="bg-purple-50"
                />
                <ApplicationStatCard 
                    title="Job Positions" 
                    value={stats.uniqueJobs} 
                    icon={Briefcase}
                    color="bg-orange-600"
                    bgColor="bg-orange-50"
                />
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <ApplicationStatCard 
        title="Total Applications" 
        value={stats.total} 
        icon={User}
        color="text-blue-600"
    />

    <ApplicationStatCard 
        title="Today" 
        value={stats.today} 
        icon={Calendar}
        color="text-green-600"
    />

    <ApplicationStatCard 
        title="With Resumes" 
        value={stats.hasResume} 
        icon={FileText}
        color="text-purple-600"
    />

    <ApplicationStatCard 
        title="Job Positions" 
        value={stats.uniqueJobs} 
        icon={Briefcase}
        color="text-orange-600"
    />
</div>

            {/* MAIN CONTENT */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-6">
                
                {/* SEARCH & FILTER */}
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name, email, or phone..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-corporate-orange/20 focus:border-corporate-orange outline-none transition-all"
                        />
                    </div>
                    <select
                        value={filterJob}
                        onChange={(e) => {
                            setFilterJob(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-corporate-orange/20 focus:border-corporate-orange outline-none transition-all min-w-[200px] text-sm font-medium text-gray-600"
                    >
                        {jobsList.map(job => (
                            <option key={job} value={job}>{job}</option>
                        ))}
                    </select>
                </div>

                {/* APPLICATIONS TABLE */}
                {error ? (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                        <p className="text-red-600 font-medium">{error}</p>
                    </div>
                ) : filteredApplications.length === 0 ? (
                    <div className="text-center py-12">
                        <User size={48} className="text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 font-medium">No applications found</p>
                        <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filter criteria</p>
                    </div>
                ) : (
                    <>
                        {/* RESPONSIVE TABLE */}
                        <div className="overflow-x-auto rounded-2xl border border-gray-100">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                                    <tr>
                                        <th className="p-4 text-left font-bold">Applicant</th>
                                        <th className="p-4 text-left font-bold">Position</th>
                                        <th className="p-4 text-left font-bold">Contact</th>
                                        <th className="p-4 text-left font-bold">Applied On</th>
                                        <th className="p-4 text-center font-bold">Resume</th>
                                        <th className="p-4 text-center font-bold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {paginatedApplications.map((app, index) => (
                                        <tr key={app._id || index} className="hover:bg-gray-50 transition-colors">
                                            {/* Applicant Name */}
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-corporate-orange to-corporate-navy rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                        {app.name?.charAt(0) || 'A'}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-corporate-navy">{app.name}</p>
                                                        <p className="text-xs text-gray-500">{app.email}</p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Position */}
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <Briefcase size={16} className="text-corporate-orange" />
                                                    <span className="text-corporate-navy font-medium">{app.jobId?.title || 'N/A'}</span>
                                                </div>
                                            </td>

                                            {/* Contact */}
                                            <td className="p-4">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-gray-600">
                                                        <Mail size={14} className="text-blue-500" />
                                                        <span className="text-xs">{app.email}</span>
                                                    </div>
                                                    {app.phone && (
                                                        <div className="flex items-center gap-2 text-gray-600">
                                                            <Phone size={14} className="text-green-500" />
                                                            <span className="text-xs">{app.phone}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>

                                            {/* Applied On */}
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={16} className="text-gray-400" />
                                                    <span className="text-gray-700 font-medium">
                                                        {new Date(app.createdAt).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Resume */}
                                            <td className="p-4 text-center">
                                                {app.resume ? (
                                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                                                        <FileText size={12} />
                                                        Uploaded
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400 text-xs">—</span>
                                                )}
                                            </td>

                                            {/* Actions */}
                                            <td className="p-4 text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    {app.resume && (
                                                        <>
                                                            <button
                                                                onClick={() => handleViewResume(app)}
                                                                className="p-2 hover:bg-blue-50 rounded-lg transition-colors text-blue-600 hover:text-blue-700"
                                                                title="View Resume"
                                                            >
                                                                <Eye size={18} />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDownloadResume(app.resume)}
                                                                className="p-2 hover:bg-green-50 rounded-lg transition-colors text-green-600 hover:text-green-700"
                                                                title="Download Resume"
                                                            >
                                                                <Download size={18} />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* PAGINATION */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 pt-4">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Previous
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i + 1}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                            currentPage === i + 1
                                                ? 'bg-corporate-orange text-white shadow-md shadow-orange-500/20'
                                                : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* RESUME VIEWER MODAL */}
            <ResumeViewer 
                application={selectedApplication} 
                isOpen={isResumeViewerOpen} 
                onClose={() => setIsResumeViewerOpen(false)}
            />
        </div>
    );
};

export default JobApplications;

