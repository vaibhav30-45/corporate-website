import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NewsCard = ({ item }) => {
  const getBadgeColor = () => {
  return 'bg-[#B96937]';
};
  // const getBadgeColor = (type) => {
  //   switch (type) {
  //     case 'blog':
  // return 'bg-[#B96937]';
  //     case 'press-release':
  //       return 'bg-amber-600';
  //     case 'announcement':
  //       return 'bg-red-500';
  //     default:
  //       return 'bg-gray-500';
  //   }
  // };

  // Use normalized fields from dummyData or API service
  const { 
    slug, 
    displayType, 
    displayImage, 
    displayCategory, 
    displayDate, 
    title, 
    displayExcerpt 
  } = item;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-corporate-orange/20 group"
    >
      <Link to={`/announcements/${displayType}s/${slug}`} className="block relative aspect-video overflow-hidden">
       <img
  src={
    displayImage?.startsWith("http")
      ? displayImage
      : `${import.meta.env.VITE_API_URL}${displayImage}`
  }
  alt={title}
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
        <div className={`absolute top-4 left-4 px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-wider ${getBadgeColor(displayType)}`}>
          {displayCategory}
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {displayDate}
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-3 line-clamp-2 hover:text-corporate-orange transition-colors">
          <Link to={`/announcements/${displayType}s/${slug}`}>{title}</Link>
        </h3>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          {displayExcerpt}
        </p>

        <Link
          to={`/announcements/${displayType}s/${slug}`}
          className="inline-flex items-center text-corporate-navy font-bold text-sm hover:text-corporate-orange transition-colors group"
        >
          Read More
          <svg
            className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default NewsCard;
