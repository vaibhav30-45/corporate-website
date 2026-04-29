import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogData, newsData } from './data/dummyData';
import { getBlogBySlug, getBlogs } from '../../../../services/blogService';
import { getNewsBySlug, getAllNews } from '../../../../services/newsService';

const NewsDetail = () => {
  const { id: slug } = useParams(); // Using 'id' parameter as slug
  const navigate = useNavigate();
  const location = useLocation();
  const [item, setItem] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const isBlog = location.pathname.includes('/blogs/');
  const isPressRelease = location.pathname.includes('/press-releases/');
  const isAnnouncement = location.pathname.includes('/announcements/');

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchItem = async () => {
      setLoading(true);
      try {
        let data;
        if (isBlog) {
          data = await getBlogBySlug(slug);
        } else {
          data = await getNewsBySlug(slug);
        }
        
        if (data) {
          setItem(data);
        } else {
          navigate('/news');
        }
      } catch (error) {
        console.error("Error fetching detail:", error);
        // Fallback to dummy data
        let foundItem;
        if (isBlog) {
          foundItem = blogData.find(b => b.slug === slug);
        } else {
          foundItem = newsData.find(n => n.slug === slug);
        }
        
        if (foundItem) {
          setItem(foundItem);
        } else {
          navigate('/news');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [slug, isBlog, navigate]);

  // Fetch related articles
  useEffect(() => {
    if (!item) return;

    const fetchRelated = async () => {
      try {
        let allArticles = [];
        if (isBlog) {
          const blogs = await getBlogs();
          allArticles = (Array.isArray(blogs) ? blogs : []).map(blog => ({
            ...blog,
            type: 'blog',
            displayImage: blog.bannerImage || blog.image
          }));
        } else {
          const news = await getAllNews();
          allArticles = (Array.isArray(news) ? news : []).map(n => ({
            ...n,
            type: n.type || 'press-release',
            displayImage: n.image
          }));
        }

        const related = allArticles
          .filter(i => i.slug !== slug)
          .slice(0, 3);
        
        setRelatedArticles(related);
      } catch (error) {
        console.error("Error fetching related articles:", error);
        // Fallback to dummy data
        let allArticles = isBlog ? blogData : newsData;
        const related = allArticles
          .filter(i => i.slug !== slug)
          .slice(0, 3)
          .map(a => ({
            ...a,
            type: a.type || (isBlog ? 'blog' : 'press-release'),
            displayImage: a.bannerImage || a.image
          }));
        setRelatedArticles(related);
      }
    };

    fetchRelated();
  }, [item, slug, isBlog]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-corporate-orange"></div>
    </div>
  );

  if (!item) return null;

  // Map fields based on model type
  const displayTitle = item.title;
  const displayImage = item.bannerImage || item.image;
  const displayDate = new Date(item.date || item.publishedAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  const displayAuthor = item.author || 'Corporate Communications';
  const displayCategory = item.category;
  const readTime = item.readTime || '5 min read';

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Hero Banner */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={displayImage}
          alt={displayTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-corporate-navy/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy via-transparent to-transparent opacity-90"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-corporate-orange text-white px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest">
                  {displayCategory}
                </span>
                <span className="text-gray-200 text-sm font-medium flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {displayTitle}
              </h1>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-corporate-orange/20 flex items-center justify-center border border-corporate-orange/50">
                  <span className="text-corporate-orange font-bold text-lg">{displayAuthor.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-bold text-white leading-none mb-1">{displayAuthor}</p>
                  <p className="text-xs uppercase tracking-tighter">{displayDate}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column: Article Body */}
            <motion.article 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:w-2/3"
            >
              <div 
                className="rich-content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
              
              <style dangerouslySetInnerHTML={{ __html: `
                .rich-content h1, .rich-content h2, .rich-content h3 { 
                  color: #001a3d; 
                  font-weight: 700; 
                  margin-top: 2rem; 
                  margin-bottom: 1rem; 
                }
                .rich-content h1 { font-size: 2.25rem; }
                .rich-content h2 { font-size: 1.875rem; }
                .rich-content h3 { font-size: 1.5rem; }
                .rich-content p { 
                  color: #4b5563; 
                  line-height: 1.8; 
                  margin-bottom: 1.5rem; 
                  font-size: 1.1rem;
                }
                .rich-content blockquote {
                  border-left: 4px solid #ff7a00;
                  background: #fff9f5;
                  padding: 2rem;
                  font-style: italic;
                  margin: 2.5rem 0;
                  border-radius: 0 1rem 1rem 0;
                  color: #001a3d;
                  font-size: 1.25rem;
                }
                .rich-content ul, .rich-content ol {
                  margin-left: 1.5rem;
                  margin-bottom: 1.5rem;
                  color: #4b5563;
                  line-height: 1.8;
                }
                .rich-content ul { list-style-type: disc; }
                .rich-content ol { list-style-type: decimal; }
                .rich-content li {
                  margin-bottom: 0.75rem;
                  padding-left: 0.5rem;
                }
                .rich-content strong {
                  color: #001a3d;
                  font-weight: 700;
                }
                .rich-content a {
                  color: #ff7a00;
                  text-decoration: underline;
                  font-weight: 600;
                }
                .rich-content img {
                  border-radius: 1rem;
                  margin: 2.5rem 0;
                  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
                  width: 100%;
                }
                .rich-content pre {
                  background: #001a3d;
                  color: #e2e8f0;
                  padding: 1.5rem;
                  border-radius: 1rem;
                  overflow-x: auto;
                  margin: 2rem 0;
                  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                  font-size: 0.9rem;
                }
                .rich-content code {
                  background: #f1f5f9;
                  color: #ef4444;
                  padding: 0.2rem 0.4rem;
                  border-radius: 0.375rem;
                  font-family: monospace;
                }
                .rich-content pre code {
                  background: transparent;
                  color: inherit;
                  padding: 0;
                }
              `}} />
              
              {/* Social Share / Tags */}
              <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-corporate-navy font-bold text-sm">Tags:</span>
                  <div className="flex gap-2">
                    {(item.tags || ['Corporate', 'News']).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs hover:bg-corporate-orange/10 hover:text-corporate-orange transition-colors cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-corporate-navy font-bold text-sm">Share:</span>
                  <div className="flex gap-3">
                    {['facebook', 'twitter', 'linkedin'].map(platform => (
                      <button key={platform} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-corporate-orange hover:border-corporate-orange transition-all duration-300">
                        <i className={`fab fa-${platform}`}></i>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Right Column: Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-32 space-y-12">
                {/* Related Posts */}
                <div>
                  <h4 className="text-xl font-bold text-corporate-navy mb-8 relative">
                    Recent Stories
                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-corporate-orange rounded-full"></span>
                  </h4>
                  <div className="space-y-6">
                    {relatedArticles.map(related => (
                      <Link key={related.slug} to={`/news/${related.type}s/${related.slug}`} className="flex gap-4 group">
                        <div className="w-24 h-20 shrink-0 overflow-hidden rounded-lg">
                          <img 
                            src={related.displayImage} 
                            alt={related.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <p className="text-xs text-corporate-orange font-bold uppercase mb-1">{related.category}</p>
                          <h5 className="text-sm font-bold text-corporate-navy group-hover:text-corporate-orange transition-colors line-clamp-2">
                            {related.title}
                          </h5>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Box */}
                <div className="bg-corporate-navy rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-4">Stay Informed</h4>
                    <p className="text-gray-400 text-sm mb-6">
                      Subscribe to our newsletter for the latest updates and insights from GreenValley.
                    </p>
                    <div className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-corporate-orange"
                      />
                      <button className="w-full bg-corporate-orange text-white font-bold py-3 rounded-lg text-sm transition-transform active:scale-95 shadow-lg shadow-corporate-orange/10">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-corporate-orange/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      
      {/* Newsletter / CTA Section (Alternative) */}
      <section className="py-20 bg-slate-50">
        <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 text-center">
            <Link 
                to="/news"
                className="inline-flex items-center gap-2 text-corporate-navy font-bold hover:text-corporate-orange transition-colors"
            >
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Back to All News
            </Link>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
