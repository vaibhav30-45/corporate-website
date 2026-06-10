import{c as E,d as S,u as R,r as d,j as e,m as p,F as z,e as F,f as D,L as y,h as M,i as T,g as B,b as $}from"./index-D5pHijZl.js";import{b as j,n as w}from"./dummyData-C9ywqXDW.js";const v="https://corporate-website-1-gtvc.onrender.com",H=()=>{const{id:l}=E(),m=S(),h=R(),[s,x]=d.useState(null),[N,g]=d.useState([]),[k,f]=d.useState(!0),i=h.pathname.includes("/blogs/");if(h.pathname.includes("/press-releases/"),h.pathname.includes("/announcements/"),d.useEffect(()=>{window.scrollTo(0,0),(async()=>{f(!0);try{let r;i?r=await M(l):r=await T(l),r?x(r):m("/news")}catch(r){console.error("Error fetching detail:",r);let n;i?n=j.find(o=>o.slug===l):n=w.find(o=>o.slug===l),n?x(n):m("/news")}finally{f(!1)}})()},[l,i,m]),d.useEffect(()=>{if(!s)return;(async()=>{try{let r=[];if(i){const o=await B();r=(Array.isArray(o)?o:[]).map(a=>({...a,type:"blog",displayImage:a.bannerImage||a.image}))}else{const o=await $();r=(Array.isArray(o)?o:[]).map(a=>({...a,type:a.type||"press-release",displayImage:a.image}))}const n=r.filter(o=>o.slug!==l).slice(0,3);g(n)}catch(r){console.error("Error fetching related articles:",r);const o=(i?j:w).filter(a=>a.slug!==l).slice(0,3).map(a=>({...a,type:a.type||(i?"blog":"press-release"),displayImage:a.bannerImage||a.image}));g(o)}})()},[s,l,i]),k)return e.jsx("div",{className:"min-h-screen flex items-center justify-center",children:e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-corporate-orange"})});if(!s)return null;const u=s.title,c=s.bannerImage||s.image;console.log("DISPLAY IMAGE:",c),console.log("ITEM:",s);const I=new Date(s.date||s.publishedAt).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),b=s.author||"Corporate Communications",A=s.category,L=s.readTime||"5 min read";return e.jsxs("div",{className:"min-h-screen bg-white mt-20",children:[e.jsxs("section",{className:"relative h-[500px] md:h-[600px] overflow-hidden",children:[e.jsx(p.img,{initial:{scale:1.1},animate:{scale:1},transition:{duration:1.5},src:c!=null&&c.startsWith("http")?c:`${v}${c}`,alt:u,className:"w-full h-full object-cover",onError:t=>{console.log("FAILED HERO:",c),console.log("FINAL HERO URL:",t.target.src)}}),e.jsx("div",{className:"absolute inset-0 bg-corporate-navy/40"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-corporate-navy via-transparent to-transparent opacity-90"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-full p-8 md:p-16",children:e.jsx("div",{className:"w-full  mx-auto px-8 sm:px-12 lg:px-20",children:e.jsxs(p.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.2,duration:.6},className:"",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("span",{className:"bg-corporate-orange text-white px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest",children:A}),e.jsxs("span",{className:"text-gray-200 text-sm font-medium flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),L]})]}),e.jsx("h1",{className:"text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6",children:u}),e.jsxs("div",{className:"flex items-center gap-4 text-gray-300",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-corporate-orange/20 flex items-center justify-center border border-corporate-orange/50",children:e.jsx("span",{className:"text-corporate-orange font-bold text-lg",children:b.charAt(0)})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-white leading-none mb-1",children:b}),e.jsx("p",{className:"text-xs uppercase tracking-tighter",children:I})]})]})]})})})]}),e.jsx("section",{className:"py-16 md:py-24",children:e.jsx("div",{className:"w-full  mx-auto px-8 sm:px-12 lg:px-20",children:e.jsxs("div",{className:"flex flex-col lg:flex-row gap-16",children:[e.jsxs(p.article,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4,duration:.8},className:"lg:w-2/3",children:[e.jsx("div",{className:"rich-content",dangerouslySetInnerHTML:{__html:s.content}}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
              `}}),e.jsxs("div",{className:"mt-16 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-corporate-navy font-bold text-sm",children:"Tags:"}),e.jsx("div",{className:"flex gap-2",children:(s.tags||["Corporate","News"]).map(t=>e.jsxs("span",{className:"px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs hover:bg-corporate-orange/10 hover:text-corporate-orange transition-colors cursor-pointer",children:["#",t]},t))})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-corporate-navy font-bold text-sm",children:"Share:"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("a",{href:`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all duration-300",children:e.jsx(z,{size:16})}),e.jsx("a",{href:`https://twitter.com/intent/tweet?url=${window.location.href}`,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all duration-300",children:e.jsx(F,{size:16})}),e.jsx("a",{href:`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all duration-300",children:e.jsx(D,{size:16})})]})]})]})]}),e.jsx("aside",{className:"lg:w-1/3",children:e.jsxs("div",{className:"sticky top-32 space-y-12",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-xl font-bold text-corporate-navy mb-8 relative",children:["Recent Stories",e.jsx("span",{className:"absolute -bottom-2 left-0 w-12 h-1 bg-corporate-orange rounded-full"})]}),e.jsx("div",{className:"space-y-6",children:N.map(t=>{var r;return e.jsxs(y,{to:`/announcements/${t.type}s/${t.slug}`,className:"flex gap-4 group",children:[e.jsx("div",{className:"w-24 h-20 shrink-0 overflow-hidden rounded-lg",children:e.jsx("img",{src:(r=t.displayImage)!=null&&r.startsWith("http")?t.displayImage:`${v}${t.displayImage}`,alt:t.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",onError:n=>{console.log("FAILED RELATED:",t.displayImage),console.log("FINAL URL:",n.target.src)}})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-corporate-orange font-bold uppercase mb-1",children:t.category}),e.jsx("h5",{className:"text-sm font-bold text-corporate-navy group-hover:text-corporate-orange transition-colors line-clamp-2",children:t.title})]})]},t.slug)})})]}),e.jsxs("div",{className:"bg-corporate-navy rounded-2xl p-8 text-white relative overflow-hidden",children:[e.jsxs("div",{className:"relative z-10",children:[e.jsx("h4",{className:"text-2xl font-bold text-black mb-4",children:"Stay Informed"}),e.jsx("p",{className:"text-gray-400 text-sm mb-6",children:"Subscribe to our newsletter for the latest updates and insights from GreenValley."}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("input",{type:"email",placeholder:"Email Address",className:`\r
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
    `}),e.jsx("button",{className:`\r
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
    `,children:"Subscribe Now"})]})]}),e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-corporate-orange/10 rounded-full blur-3xl -mr-16 -mt-16"})]})]})})]})})}),e.jsx("section",{className:"py-20 bg-slate-50",children:e.jsx("div",{className:"w-full  mx-auto px-8 sm:px-12 lg:px-20 text-center",children:e.jsxs(y,{to:"/announcements",className:"inline-flex items-center gap-2 text-corporate-navy font-bold hover:text-corporate-orange transition-colors",children:[e.jsx("svg",{className:"w-5 h-5 rotate-180",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})}),"Back to All Insights"]})})})]})};export{H as default};
