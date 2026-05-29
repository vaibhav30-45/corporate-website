import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NewsCard from './components/NewsCard';
import { getCombinedNewsMedia } from './data/dummyData';
import { getBlogs } from '../../../../services/blogService';
import { getAllNews } from '../../../../services/newsService';

const NewsMedia = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('all');
 const [selectedCategory, setSelectedCategory] = useState("all");
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initialize data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [blogs, news] = await Promise.all([getBlogs(), getAllNews()]);
        
        // Normalize blogs
        const normalizedBlogs = (Array.isArray(blogs) ? blogs : []).map(blog => ({
          ...blog,
          type: 'blog',
          displayId: blog.slug,
          displayImage: blog.bannerImage || blog.image,
          displayDate: new Date(blog.date || blog.createdAt).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }),
          displayExcerpt: blog.summary || (blog.content ? blog.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...' : ''),
          displayCategory: blog.category,
          displayType: 'blog'
        }));

        // Normalize news
        const normalizedNews = (Array.isArray(news) ? news : []).map(newsItem => ({
          ...newsItem,
          type: newsItem.type || 'press-release',
          displayId: newsItem.slug,
          displayImage: newsItem.image,
          displayDate: new Date(newsItem.publishedAt || newsItem.createdAt).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }),
          displayExcerpt: newsItem.summary || (newsItem.content ? newsItem.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...' : ''),
          displayCategory: newsItem.category,
          displayType: newsItem.type || 'press-release'
        }));

        // Combine and sort
        const combined = [...normalizedBlogs, ...normalizedNews]
          .sort((a, b) => new Date(b.date || b.publishedAt || b.createdAt) - new Date(a.date || a.publishedAt || a.createdAt));
        
        setNewsList(combined);
      } catch (error) {
        console.error("Error fetching news/media:", error);
        // Fallback to dummy data if API fails
        const combined = getCombinedNewsMedia();
        setNewsList(combined);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Update active tab based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('blogs')) setActiveTab('blog');
    else if (path.includes('press-releases')) setActiveTab('press-release');
    else setActiveTab('all');
  }, [location.pathname]);

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'blog', label: 'Blogs / Articles' },
    { id: 'press-release', label: 'Press Releases' },

  ];
  const categories = [
  "Industry Insights",
  "Governance Perspectives",
  "Market Commentary",
  "Whitepapers",
  "Research Notes",
  "Corridor Analysis",
];



 const filteredNews = useMemo(() => {
  return newsList.filter((item) => {
    const matchesTab =
      activeTab === "all" || item.displayType === activeTab;

    const matchesCategory =
      selectedCategory === "all" ||
      item.displayCategory === selectedCategory;

    return matchesTab && matchesCategory;
  });
}, [activeTab, selectedCategory, newsList]);

  return (
    <div className="min-h-screen bg-slate-50 mt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="News Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-corporate-navy/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-navy via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="w-full  mx-auto px-8 sm:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Insights  
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              NIOSTGROUP International shares governance-led perspectives, sector observations,  <br />
              and strategic commentary relevant to logistics, infrastructure, and cross-border platform development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
     <section className="py-8 bg-white border-b">
  <div className="w-full mx-auto px-8 sm:px-12 lg:px-20">
    <div className="flex flex-wrap items-center gap-3">

      {/* Tabs */}
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
            activeTab === tab.id
              ? "bg-corporate-orange text-white shadow-lg"
              : "bg-white text-gray-600 border border-gray-200 hover:border-corporate-orange hover:text-corporate-orange"
          }`}
        >
          {tab.label}
        </button>
      ))}

      {/* Categories */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
            selectedCategory === category
              ? "bg-corporate-orange text-white border-corporate-orange"
              : "bg-white text-gray-600 border-gray-200 hover:bg-corporate-orange hover:text-white hover:border-corporate-orange"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
</section>

      {/* Grid */}
      <section className="py-16">
        <div className="w-full  mx-auto px-8 sm:px-12 lg:px-20">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-corporate-orange"></div>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredNews.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredNews.map((item) => (
                    <NewsCard key={item.slug} item={item} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <div className="mb-6 text-gray-300">
                    <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 2v4a2 2 0 002 2h4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 9h4M10 13h4M10 17h2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-corporate-navy mb-2">No results found</h3>
                  <p className="text-gray-500">We couldn't find any news matching your criteria.</p>
                  <button 
                    onClick={() => {setActiveTab('all'); setSearchQuery('');}}
                    className="mt-6 text-corporate-orange font-semibold hover:underline"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsMedia;
