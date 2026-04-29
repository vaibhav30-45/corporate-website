import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Plus, 
    Search, 
    Filter, 
    Edit2, 
    Trash2, 
    X, 
    CheckCircle2, 
    AlertCircle, 
    Loader2, 
    Image as ImageIcon,
    Calendar,
    User,
    Tag,
    ChevronRight,
    ExternalLink,
    Clock,
    FileText,
    Eye,
    CheckCircle
} from 'lucide-react';
import { 
    getAdminBlogs, 
    createBlog, 
    updateBlog, 
    deleteBlog 
} from '../../../services/blogService';
import BlogEditor from '../components/BlogEditor';

const ManageBlogs = () => {
    // State
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    
    // Stats calculation
    const stats = useMemo(() => {
        return {
            total: blogs.length,
            published: blogs.filter(b => b.status === 'published').length,
            drafts: blogs.filter(b => b.status === 'draft').length,
            categories: new Set(blogs.map(b => b.category)).size
        };
    }, [blogs]);

    // Filter & Search State
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');
    const [filterStatus, setFilterStatus] = useState('All');

    // Modal State
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentBlog, setCurrentBlog] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        author: '',
        bannerImage: '',
        category: '',
        status: 'draft',
        date: new Date().toISOString().split('T')[0],
        tags: '',
        content: ''
    });

    // Fetch Blogs
    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const data = await getAdminBlogs();
            setBlogs(Array.isArray(data) ? data : []);
        } catch (err) {
            setError('Failed to load blogs. Please refresh the page.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // Derived Data
    const categories = useMemo(() => {
        const cats = new Set(blogs.map(b => b.category).filter(Boolean));
        return ['All', ...Array.from(cats)];
    }, [blogs]);

    const filteredBlogs = useMemo(() => {
        return blogs.filter(blog => {
            const matchesSearch = blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                blog.author?.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = filterCategory === 'All' || blog.category === filterCategory;
            const matchesStatus = filterStatus === 'All' || blog.status === filterStatus;
            return matchesSearch && matchesCategory && matchesStatus;
        });
    }, [blogs, searchTerm, filterCategory, filterStatus]);

    // Slug Generation
    useEffect(() => {
        if (!currentBlog && formData.title) {
            const generatedSlug = formData.title
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .trim();
            setFormData(prev => ({ ...prev, slug: generatedSlug }));
        }
    }, [formData.title, currentBlog]);

    // Handlers
    const handleOpenEditor = (blog = null) => {
        if (blog) {
            setCurrentBlog(blog);
            setFormData({
                ...blog,
                tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : blog.tags,
                date: blog.date ? new Date(blog.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
            });
        } else {
            setCurrentBlog(null);
            setFormData({
                title: '',
                slug: '',
                author: '',
                bannerImage: '',
                category: '',
                status: 'draft',
                date: new Date().toISOString().split('T')[0],
                tags: '',
                content: ''
            });
        }
        setIsEditorOpen(true);
    };

    const handleCloseEditor = () => {
        setIsEditorOpen(false);
        setSuccessMessage('');
        setError(null);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            const formattedData = {
                ...formData,
                tags: typeof formData.tags === 'string' ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : formData.tags
            };

            if (currentBlog) {
                await updateBlog(currentBlog._id, formattedData);
                setSuccessMessage('Blog updated successfully!');
            } else {
                await createBlog(formattedData);
                setSuccessMessage('Blog created successfully!');
            }

            await fetchBlogs();
            setTimeout(() => handleCloseEditor(), 1500);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to save blog. Please check all fields.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async () => {
        setSubmitting(true);
        try {
            await deleteBlog(currentBlog._id);
            await fetchBlogs();
            setIsDeleteModalOpen(false);
        } catch (err) {
            setError('Failed to delete blog.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header - Aligned with ManageNews/AdminManagement */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-corporate-navy tracking-tight">Manage Blogs</h1>
                    <p className="text-gray-500">View, add, edit or remove blogs from your website.</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleOpenEditor()}
                    className="flex items-center justify-center gap-2 bg-corporate-orange text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 active:scale-95"
                >
                    <Plus size={20} strokeWidth={2.5} />
                    Add New Blog
                </motion.button>
            </div>

            {/* Stats Section - New Attractive UI */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total Posts', value: stats.total, icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Published', value: stats.published, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
                    { label: 'Drafts', value: stats.drafts, icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
                    { label: 'Categories', value: stats.categories, icon: Tag, color: 'text-purple-600', bg: 'bg-purple-50' },
                ].map((stat, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
                    >
                        <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                            <p className="text-2xl font-bold text-corporate-navy">{stat.value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Filters Bar - Aligned with AdminManagement */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-corporate-orange/20 outline-none transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-4">
                    <select
                        className="px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-corporate-orange/20 outline-none transition-all appearance-none min-w-[140px] text-sm text-gray-600 font-medium"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="All">All Categories</option>
                        {categories.filter(c => c !== 'All').map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                    <select
                        className="px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-corporate-orange/20 outline-none transition-all appearance-none min-w-[140px] text-sm text-gray-600 font-medium"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="All">All Status</option>
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                    </select>
                </div>
            </div>

            {/* Table Area */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center gap-4">
                        <Loader2 className="animate-spin text-corporate-orange" size={40} />
                        <p className="text-gray-500 font-medium">Loading blogs...</p>
                    </div>
                ) : filteredBlogs.length === 0 ? (
                    <div className="py-20 text-center">
                        <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="text-gray-300" size={30} />
                        </div>
                        <h3 className="text-lg font-bold text-corporate-navy">No blogs found</h3>
                        <p className="text-gray-500">Try adjusting your search or add a new blog.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Blog Details</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Tags</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                <AnimatePresence mode='popLayout'>
                                    {filteredBlogs.map((blog) => (
                                        <motion.tr
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            key={blog._id}
                                            className="hover:bg-gray-50/50 transition-colors group"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={blog.bannerImage}
                                                        alt={blog.title}
                                                        className="w-12 h-12 rounded-lg object-cover"
                                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=No+Image'; }}
                                                    />
                                                    <div>
                                                        <p className="text-sm font-bold text-corporate-navy line-clamp-1">{blog.title}</p>
                                                        <p className="text-xs text-gray-500">{blog.author} • {new Date(blog.date).toLocaleDateString()}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase">
                                                    {blog.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                                                    blog.status === 'published' 
                                                    ? 'bg-green-50 text-green-600' 
                                                    : 'bg-orange-50 text-orange-600'
                                                }`}>
                                                    {blog.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-wrap gap-1">
                                                    {blog.tags?.slice(0, 2).map((tag, idx) => (
                                                        <span key={idx} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                    {blog.tags?.length > 2 && <span className="text-[10px] text-gray-400">+{blog.tags.length - 2}</span>}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        onClick={() => handleOpenEditor(blog)}
                                                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                                        title="Edit"
                                                    >
                                                        <Edit2 size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => { setCurrentBlog(blog); setIsDeleteModalOpen(true); }}
                                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Editor Modal - Centered and Enlarged */}
            <AnimatePresence>
                {isEditorOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-corporate-navy/40 backdrop-blur-sm animate-in fade-in duration-300">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                                <div>
                                    <h2 className="text-2xl font-bold text-corporate-navy">
                                        {currentBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
                                    </h2>
                                    <p className="text-gray-500 text-sm">Manage your blog content and metadata in one place.</p>
                                </div>
                                <button 
                                    onClick={handleCloseEditor}
                                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    <X size={24} className="text-gray-500" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <form onSubmit={handleFormSubmit} id="blogForm" className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                                {error && (
                                    <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-3 text-sm animate-shake">
                                        <AlertCircle size={18} />
                                        {error}
                                    </div>
                                )}

                                {successMessage && (
                                    <div className="mb-8 p-4 bg-green-50 border border-green-100 text-green-600 rounded-xl flex items-center gap-3 text-sm">
                                        <CheckCircle2 size={18} />
                                        {successMessage}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Left Main Column */}
                                    <div className="lg:col-span-2 space-y-6">
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Blog Title <span className="text-red-500">*</span></label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Enter blog title"
                                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-corporate-orange/20 focus:bg-white outline-none transition-all text-lg font-bold text-corporate-navy"
                                                    value={formData.title}
                                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                />
                                            </div>
                                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                                                <span className="text-gray-400 text-xs font-mono">Slug:</span>
                                                <input
                                                    type="text"
                                                    className="bg-transparent border-none p-0 text-xs font-mono text-corporate-orange focus:ring-0 w-full"
                                                    value={formData.slug}
                                                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Blog Content <span className="text-red-500">*</span></label>
                                            <BlogEditor 
                                                value={formData.content} 
                                                onChange={(html) => setFormData({ ...formData, content: html })} 
                                            />
                                        </div>
                                    </div>

                                    {/* Right Sidebar Column */}
                                    <div className="space-y-6">
                                        <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 space-y-5">
                                            <h3 className="font-bold text-corporate-navy text-sm flex items-center gap-2">
                                                <ChevronRight size={16} className="text-corporate-orange" />
                                                Publish Settings
                                            </h3>
                                            
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Status</label>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {['draft', 'published'].map((status) => (
                                                            <button
                                                                key={status}
                                                                type="button"
                                                                onClick={() => setFormData({ ...formData, status })}
                                                                className={`py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                                                                    formData.status === status 
                                                                    ? 'bg-corporate-navy text-white shadow-md' 
                                                                    : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-100'
                                                                }`}
                                                            >
                                                                {status}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Date</label>
                                                    <input
                                                        type="date"
                                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-corporate-orange/20 outline-none"
                                                        value={formData.date}
                                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 space-y-5">
                                            <h3 className="font-bold text-corporate-navy text-sm flex items-center gap-2">
                                                <Tag size={16} className="text-corporate-orange" />
                                                Metadata
                                            </h3>
                                            
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Author</label>
                                                    <input
                                                        type="text"
                                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-corporate-orange/20 outline-none"
                                                        placeholder="Author name"
                                                        value={formData.author}
                                                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Category</label>
                                                    <input
                                                        type="text"
                                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-corporate-orange/20 outline-none"
                                                        placeholder="Category"
                                                        value={formData.category}
                                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Tags</label>
                                                    <input
                                                        type="text"
                                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-corporate-orange/20 outline-none"
                                                        placeholder="tech, innovation"
                                                        value={formData.tags}
                                                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 space-y-5">
                                            <h3 className="font-bold text-corporate-navy text-sm flex items-center gap-2">
                                                <ImageIcon size={16} className="text-corporate-orange" />
                                                Banner Image
                                            </h3>
                                            
                                            <div className="space-y-4">
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-corporate-orange/20 outline-none"
                                                    placeholder="Banner URL"
                                                    value={formData.bannerImage}
                                                    onChange={(e) => setFormData({ ...formData, bannerImage: e.target.value })}
                                                />
                                                {formData.bannerImage && (
                                                    <div className="rounded-xl overflow-hidden aspect-video shadow-sm border border-gray-100">
                                                        <img 
                                                            src={formData.bannerImage} 
                                                            alt="Preview" 
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => { e.target.style.display = 'none'; }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            {/* Modal Footer */}
                            <div className="px-8 py-6 border-t border-gray-100 bg-white flex items-center justify-between">
                                <button 
                                    type="button"
                                    onClick={handleCloseEditor}
                                    className="px-6 py-2 text-gray-500 font-bold hover:text-corporate-navy transition-all"
                                >
                                    Cancel
                                </button>
                                <div className="flex items-center gap-4">
                                    {currentBlog && (
                                        <a 
                                            href={`/news/blogs/${formData.slug}`} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-xs font-bold text-corporate-orange hover:underline"
                                        >
                                            <ExternalLink size={14} /> View Live
                                        </a>
                                    )}
                                    <button
                                        type="submit"
                                        form="blogForm"
                                        disabled={submitting}
                                        className="bg-corporate-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-navy-900 transition-all shadow-lg shadow-corporate-navy/20 disabled:opacity-50 flex items-center gap-2"
                                    >
                                        {submitting ? (
                                            <>
                                                <Loader2 className="animate-spin" size={18} />
                                                <span>Saving...</span>
                                            </>
                                        ) : (
                                            <span>{currentBlog ? 'Save Changes' : 'Publish Blog'}</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Delete Modal */}
            <AnimatePresence>
                {isDeleteModalOpen && (
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-corporate-navy/40 backdrop-blur-sm animate-in fade-in duration-300">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 text-center"
                        >
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Trash2 className="text-red-600" size={30} />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-navy mb-2">Delete Blog?</h3>
                            <p className="text-gray-500 mb-8">
                                Are you sure you want to delete <span className="font-bold">"{currentBlog?.title}"</span>? This action cannot be undone.
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setIsDeleteModalOpen(false)}
                                    className="flex-1 px-6 py-3 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDelete}
                                    disabled={submitting}
                                    className="flex-1 px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                                >
                                    {submitting ? <Loader2 className="animate-spin" size={18} /> : 'Delete Now'}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{ __html: `
                .animate-shake {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
                }
                @keyframes shake {
                    10%, 90% { transform: translate3d(-1px, 0, 0); }
                    20%, 80% { transform: translate3d(2px, 0, 0); }
                    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                    40%, 60% { transform: translate3d(4px, 0, 0); }
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #cbd5e1;
                }
            `}} />
        </div>
    );
};

export default ManageBlogs;
