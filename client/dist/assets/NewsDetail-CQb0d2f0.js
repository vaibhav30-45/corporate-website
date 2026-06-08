import{n as e,s as t,t as n}from"./jsx-runtime-2UHhqg_S.js";import{t as r}from"./proxy-juyD3h56.js";import{F as i,I as a,L as o,M as s,N as c,P as l,i as u,j as d,n as f,r as p,t as m}from"./index-D1Ko_ukT.js";import{r as h,t as g}from"./dummyData-Cp-xjYM5.js";var _=t(e(),1),v=n(),y=()=>{let{id:e}=o(),t=a(),n=i(),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)([]),[C,w]=(0,_.useState)(!0),T=n.pathname.includes(`/blogs/`);if(n.pathname.includes(`/press-releases/`),n.pathname.includes(`/announcements/`),(0,_.useEffect)(()=>{window.scrollTo(0,0),(async()=>{w(!0);try{let n;n=T?await p(e):await f(e),n?b(n):t(`/news`)}catch(n){console.error(`Error fetching detail:`,n);let r;r=T?g.find(t=>t.slug===e):h.find(t=>t.slug===e),r?b(r):t(`/news`)}finally{w(!1)}})()},[e,T,t]),(0,_.useEffect)(()=>{y&&(async()=>{try{let t=[];if(T){let e=await u();t=(Array.isArray(e)?e:[]).map(e=>({...e,type:`blog`,displayImage:e.bannerImage||e.image}))}else{let e=await m();t=(Array.isArray(e)?e:[]).map(e=>({...e,type:e.type||`press-release`,displayImage:e.image}))}S(t.filter(t=>t.slug!==e).slice(0,3))}catch(t){console.error(`Error fetching related articles:`,t),S((T?g:h).filter(t=>t.slug!==e).slice(0,3).map(e=>({...e,type:e.type||(T?`blog`:`press-release`),displayImage:e.bannerImage||e.image})))}})()},[y,e,T]),C)return(0,v.jsx)(`div`,{className:`min-h-screen flex items-center justify-center`,children:(0,v.jsx)(`div`,{className:`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-corporate-orange`})});if(!y)return null;let E=y.title,D=y.bannerImage||y.image,O=new Date(y.date||y.publishedAt).toLocaleDateString(`en-GB`,{day:`2-digit`,month:`short`,year:`numeric`}),k=y.author||`Corporate Communications`,A=y.category,j=y.readTime||`5 min read`;return(0,v.jsxs)(`div`,{className:`min-h-screen bg-white mt-20`,children:[(0,v.jsxs)(`section`,{className:`relative h-[500px] md:h-[600px] overflow-hidden`,children:[(0,v.jsx)(r.img,{initial:{scale:1.1},animate:{scale:1},transition:{duration:1.5},src:D,alt:E,className:`w-full h-full object-cover`}),(0,v.jsx)(`div`,{className:`absolute inset-0 bg-corporate-navy/40`}),(0,v.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-corporate-navy via-transparent to-transparent opacity-90`}),(0,v.jsx)(`div`,{className:`absolute bottom-0 left-0 w-full p-8 md:p-16`,children:(0,v.jsx)(`div`,{className:`w-full  mx-auto px-8 sm:px-12 lg:px-20`,children:(0,v.jsxs)(r.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.2,duration:.6},className:``,children:[(0,v.jsxs)(`div`,{className:`flex items-center gap-4 mb-6`,children:[(0,v.jsx)(`span`,{className:`bg-corporate-orange text-white px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest`,children:A}),(0,v.jsxs)(`span`,{className:`text-gray-200 text-sm font-medium flex items-center`,children:[(0,v.jsx)(`svg`,{className:`w-4 h-4 mr-2`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,v.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z`})}),j]})]}),(0,v.jsx)(`h1`,{className:`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6`,children:E}),(0,v.jsxs)(`div`,{className:`flex items-center gap-4 text-gray-300`,children:[(0,v.jsx)(`div`,{className:`w-10 h-10 rounded-full bg-corporate-orange/20 flex items-center justify-center border border-corporate-orange/50`,children:(0,v.jsx)(`span`,{className:`text-corporate-orange font-bold text-lg`,children:k.charAt(0)})}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`font-bold text-white leading-none mb-1`,children:k}),(0,v.jsx)(`p`,{className:`text-xs uppercase tracking-tighter`,children:O})]})]})]})})})]}),(0,v.jsx)(`section`,{className:`py-16 md:py-24`,children:(0,v.jsx)(`div`,{className:`w-full  mx-auto px-8 sm:px-12 lg:px-20`,children:(0,v.jsxs)(`div`,{className:`flex flex-col lg:flex-row gap-16`,children:[(0,v.jsxs)(r.article,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4,duration:.8},className:`lg:w-2/3`,children:[(0,v.jsx)(`div`,{className:`rich-content`,dangerouslySetInnerHTML:{__html:y.content}}),(0,v.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
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
              `}}),(0,v.jsxs)(`div`,{className:`mt-16 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6`,children:[(0,v.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,v.jsx)(`span`,{className:`text-corporate-navy font-bold text-sm`,children:`Tags:`}),(0,v.jsx)(`div`,{className:`flex gap-2`,children:(y.tags||[`Corporate`,`News`]).map(e=>(0,v.jsxs)(`span`,{className:`px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs hover:bg-corporate-orange/10 hover:text-corporate-orange transition-colors cursor-pointer`,children:[`#`,e]},e))})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,v.jsx)(`span`,{className:`text-corporate-navy font-bold text-sm`,children:`Share:`}),(0,v.jsxs)(`div`,{className:`flex gap-3`,children:[(0,v.jsx)(`a`,{href:`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,target:`_blank`,rel:`noopener noreferrer`,className:`w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all duration-300`,children:(0,v.jsx)(d,{size:16})}),(0,v.jsx)(`a`,{href:`https://twitter.com/intent/tweet?url=${window.location.href}`,target:`_blank`,rel:`noopener noreferrer`,className:`w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all duration-300`,children:(0,v.jsx)(c,{size:16})}),(0,v.jsx)(`a`,{href:`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`,target:`_blank`,rel:`noopener noreferrer`,className:`w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all duration-300`,children:(0,v.jsx)(s,{size:16})})]})]})]})]}),(0,v.jsx)(`aside`,{className:`lg:w-1/3`,children:(0,v.jsxs)(`div`,{className:`sticky top-32 space-y-12`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsxs)(`h4`,{className:`text-xl font-bold text-corporate-navy mb-8 relative`,children:[`Recent Stories`,(0,v.jsx)(`span`,{className:`absolute -bottom-2 left-0 w-12 h-1 bg-corporate-orange rounded-full`})]}),(0,v.jsx)(`div`,{className:`space-y-6`,children:x.map(e=>(0,v.jsxs)(l,{to:`/announcements/${e.type}s/${e.slug}`,className:`flex gap-4 group`,children:[(0,v.jsx)(`div`,{className:`w-24 h-20 shrink-0 overflow-hidden rounded-lg`,children:(0,v.jsx)(`img`,{src:e.displayImage,alt:e.title,className:`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110`})}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`text-xs text-corporate-orange font-bold uppercase mb-1`,children:e.category}),(0,v.jsx)(`h5`,{className:`text-sm font-bold text-corporate-navy group-hover:text-corporate-orange transition-colors line-clamp-2`,children:e.title})]})]},e.slug))})]}),(0,v.jsxs)(`div`,{className:`bg-corporate-navy rounded-2xl p-8 text-white relative overflow-hidden`,children:[(0,v.jsxs)(`div`,{className:`relative z-10`,children:[(0,v.jsx)(`h4`,{className:`text-2xl font-bold text-black mb-4`,children:`Stay Informed`}),(0,v.jsx)(`p`,{className:`text-gray-400 text-sm mb-6`,children:`Subscribe to our newsletter for the latest updates and insights from GreenValley.`}),(0,v.jsxs)(`div`,{className:`space-y-3`,children:[(0,v.jsx)(`input`,{type:`email`,placeholder:`Email Address`,className:`\r
      w-full\r
      bg-white\r
      text-gray-900\r
      border border-gray-300\r
      rounded-lg\r
      px-4 py-3\r
      text-sm\r
      placeholder:text-gray-500\r
      focus:outline-none\r
      focus:ring-2\r
      focus:ring-primary\r
    `}),(0,v.jsx)(`button`,{className:`\r
      w-full\r
      bg-primary\r
      hover:bg-primary-hover\r
      text-white\r
      font-semibold\r
      py-3\r
      rounded-lg\r
      transition-all\r
      duration-300\r
      active:scale-95\r
    `,children:`Subscribe Now`})]})]}),(0,v.jsx)(`div`,{className:`absolute top-0 right-0 w-32 h-32 bg-corporate-orange/10 rounded-full blur-3xl -mr-16 -mt-16`})]})]})})]})})}),(0,v.jsx)(`section`,{className:`py-20 bg-slate-50`,children:(0,v.jsx)(`div`,{className:`w-full  mx-auto px-8 sm:px-12 lg:px-20 text-center`,children:(0,v.jsxs)(l,{to:`/announcements`,className:`inline-flex items-center gap-2 text-corporate-navy font-bold hover:text-corporate-orange transition-colors`,children:[(0,v.jsx)(`svg`,{className:`w-5 h-5 rotate-180`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,v.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M17 8l4 4m0 0l-4 4m4-4H3`})}),`Back to All Insights`]})})})]})};export{y as default};