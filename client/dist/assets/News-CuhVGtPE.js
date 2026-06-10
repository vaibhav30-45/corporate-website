import{d as h,r as l,j as r,m as o,g as u,b as f}from"./index-B7FaWfaz.js";import{g as v}from"./dummyData-C9ywqXDW.js";const N=()=>{const c=h(),[d,p]=l.useState([]),[x,m]=l.useState(!0);return l.useEffect(()=>{(async()=>{m(!0);try{const[s,n]=await Promise.all([u(),f()]),y=(Array.isArray(s)?s:[]).map(e=>({...e,type:"blog",displayId:e.slug,displayImage:e.bannerImage||e.image,displayDate:new Date(e.date||e.createdAt).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),displayExcerpt:e.summary||(e.content?e.content.replace(/<[^>]*>/g,"").substring(0,150)+"...":""),displayCategory:e.category,displayType:"blog"})),g=(Array.isArray(n)?n:[]).map(e=>({...e,type:e.type||"press-release",displayId:e.slug,displayImage:e.image,displayDate:new Date(e.publishedAt||e.createdAt).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),displayExcerpt:e.summary||(e.content?e.content.replace(/<[^>]*>/g,"").substring(0,150)+"...":""),displayCategory:e.category,displayType:e.type||"press-release"})),a=[...y,...g].sort((e,i)=>new Date(i.date||i.publishedAt||i.createdAt)-new Date(e.date||e.publishedAt||e.createdAt)).slice(0,3);console.log("Combined Data:",a),console.log(a.map(e=>({title:e.title,displayImage:e.displayImage}))),p(a)}catch(s){console.error("Error fetching news:",s);const n=v().slice(0,3);p(n)}finally{m(!1)}})()},[]),r.jsx("section",{className:"py-16 bg-gray-100 overflow-hidden",children:r.jsxs("div",{className:"w-full px-4 sm:px-8 lg:px-14 2xl:px-24",children:[r.jsxs(o.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:`\r
            flex\r
            flex-col\r
            md:flex-row\r
            md:items-center\r
            md:justify-between\r
            gap-4\r
            mb-12\r
          `,children:[r.jsxs("div",{children:[r.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-primary mb-3",children:"Insights and Strategic Perspective"}),r.jsxs("p",{className:"text-gray-500 text-sm sm:text-base",children:["NiostGroup International shares governance-led perspectives, sector observations, ",r.jsx("br",{})," and strategic commentary relevant to logistics, infrastructure, and cross-border platform development"]})]}),r.jsx("button",{onClick:()=>c("/announcements"),className:`\r
              text-blue-500\r
              text-sm\r
              font-medium\r
              hover:text-primary\r
              transition\r
              whitespace-nowrap\r
            `,children:"View All Articles →"})]}),r.jsx(o.div,{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            lg:grid-cols-3\r
            gap-6\r
          `,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:{visible:{transition:{staggerChildren:.2}}},children:x?r.jsx("div",{className:"col-span-full flex justify-center py-16",children:r.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#B96937]"})}):d.length>0?d.map(t=>{var s;return r.jsxs(o.div,{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0}},onClick:()=>c(`/announcements/${t.displayType}s/${t.slug}`),className:`\r
                  bg-white\r
                  rounded-2xl\r
                  overflow-hidden\r
                  shadow-md\r
                  hover:shadow-2xl\r
                  transition-all\r
                  duration-300\r
                  cursor-pointer\r
                  group\r
                  flex\r
                  flex-col\r
                  h-full\r
                  min-w-0\r
                `,children:[r.jsxs("div",{className:"relative overflow-hidden",children:[r.jsx("img",{src:(s=t.displayImage)!=null&&s.startsWith("http")?t.displayImage.replace("http://localhost:5000","https://corporate-website-1-gtvc.onrender.com"):`https://corporate-website-1-gtvc.onrender.com${t.displayImage}`,alt:t.title,className:`\r
    w-full\r
    h-56\r
    object-cover\r
    group-hover:scale-110\r
    transition-transform\r
    duration-500\r
  `}),r.jsx("span",{className:`\r
                      absolute\r
                      top-4\r
                      left-4\r
                      bg-primary\r
                      text-white\r
                      text-xs\r
                      font-medium\r
                      px-3\r
                      py-1\r
                      rounded-full\r
                    `,children:t.displayCategory})]}),r.jsxs("div",{className:"p-6 flex flex-col flex-grow min-w-0",children:[r.jsx("p",{className:"text-xs text-gray-400 mb-3",children:t.displayDate}),r.jsx("h3",{className:`\r
                      text-lg\r
                      font-semibold\r
                      text-gray-800\r
                      mb-3\r
                      line-clamp-2\r
                      group-hover:text-primary-hover\r
                      transition\r
                    `,children:t.title}),r.jsx("p",{className:`\r
                      text-sm\r
                      text-gray-500\r
                      line-clamp-3\r
                      mb-5\r
                      flex-grow\r
                    `,children:t.displayExcerpt}),r.jsx("span",{className:`\r
                      text-blue-500\r
                      text-sm\r
                      font-medium\r
                      group-hover:text-primary-hover\r
                      transition\r
                    `,children:"Read More →"})]})]},t.slug)}):r.jsx("div",{className:"col-span-full text-center py-16 text-gray-500",children:"No news available"})})]})})};export{N as default};
