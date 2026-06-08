import{n as e,s as t,t as n}from"./jsx-runtime-2UHhqg_S.js";import{t as r}from"./proxy-juyD3h56.js";import{I as i,i as a,t as o}from"./index-D-L5hhEA.js";import{n as s}from"./dummyData-Cp-xjYM5.js";var c=t(e(),1),l=n(),u=()=>{let e=i(),[t,n]=(0,c.useState)([]),[u,d]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{(async()=>{d(!0);try{let[e,t]=await Promise.all([a(),o()]),r=(Array.isArray(e)?e:[]).map(e=>({...e,type:`blog`,displayId:e.slug,displayImage:e.bannerImage||e.image,displayDate:new Date(e.date||e.createdAt).toLocaleDateString(`en-GB`,{day:`2-digit`,month:`short`,year:`numeric`}),displayExcerpt:e.summary||(e.content?e.content.replace(/<[^>]*>/g,``).substring(0,150)+`...`:``),displayCategory:e.category,displayType:`blog`})),i=(Array.isArray(t)?t:[]).map(e=>({...e,type:e.type||`press-release`,displayId:e.slug,displayImage:e.image,displayDate:new Date(e.publishedAt||e.createdAt).toLocaleDateString(`en-GB`,{day:`2-digit`,month:`short`,year:`numeric`}),displayExcerpt:e.summary||(e.content?e.content.replace(/<[^>]*>/g,``).substring(0,150)+`...`:``),displayCategory:e.category,displayType:e.type||`press-release`}));n([...r,...i].sort((e,t)=>new Date(t.date||t.publishedAt||t.createdAt)-new Date(e.date||e.publishedAt||e.createdAt)).slice(0,3))}catch(e){console.error(`Error fetching news:`,e),n(s().slice(0,3))}finally{d(!1)}})()},[]),(0,l.jsx)(`section`,{className:`py-16 bg-gray-100 overflow-hidden`,children:(0,l.jsxs)(`div`,{className:`w-full px-4 sm:px-8 lg:px-14 2xl:px-24`,children:[(0,l.jsxs)(r.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:`\r
            flex\r
            flex-col\r
            md:flex-row\r
            md:items-center\r
            md:justify-between\r
            gap-4\r
            mb-12\r
          `,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h2`,{className:`text-3xl sm:text-4xl font-bold text-primary mb-3`,children:`Insights and Strategic Perspective`}),(0,l.jsxs)(`p`,{className:`text-gray-500 text-sm sm:text-base`,children:[`NiostGroup International shares governance-led perspectives, sector observations, `,(0,l.jsx)(`br`,{}),` and strategic commentary relevant to logistics, infrastructure, and cross-border platform development`]})]}),(0,l.jsx)(`button`,{onClick:()=>e(`/announcements`),className:`\r
              text-blue-500\r
              text-sm\r
              font-medium\r
              hover:text-primary\r
              transition\r
              whitespace-nowrap\r
            `,children:`View All Articles →`})]}),(0,l.jsx)(r.div,{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            lg:grid-cols-3\r
            gap-6\r
          `,initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:{visible:{transition:{staggerChildren:.2}}},children:u?(0,l.jsx)(`div`,{className:`col-span-full flex justify-center py-16`,children:(0,l.jsx)(`div`,{className:`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#B96937]`})}):t.length>0?t.map(t=>(0,l.jsxs)(r.div,{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0}},onClick:()=>e(`/announcements/${t.displayType}s/${t.slug}`),className:`\r
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
                `,children:[(0,l.jsxs)(`div`,{className:`relative overflow-hidden`,children:[(0,l.jsx)(`img`,{src:t.displayImage,alt:t.title,className:`\r
                      w-full\r
                      h-56\r
                      object-cover\r
                      group-hover:scale-110\r
                      transition-transform\r
                      duration-500\r
                    `}),(0,l.jsx)(`span`,{className:`\r
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
                    `,children:t.displayCategory})]}),(0,l.jsxs)(`div`,{className:`p-6 flex flex-col flex-grow min-w-0`,children:[(0,l.jsx)(`p`,{className:`text-xs text-gray-400 mb-3`,children:t.displayDate}),(0,l.jsx)(`h3`,{className:`\r
                      text-lg\r
                      font-semibold\r
                      text-gray-800\r
                      mb-3\r
                      line-clamp-2\r
                      group-hover:text-primary-hover\r
                      transition\r
                    `,children:t.title}),(0,l.jsx)(`p`,{className:`\r
                      text-sm\r
                      text-gray-500\r
                      line-clamp-3\r
                      mb-5\r
                      flex-grow\r
                    `,children:t.displayExcerpt}),(0,l.jsx)(`span`,{className:`\r
                      text-blue-500\r
                      text-sm\r
                      font-medium\r
                      group-hover:text-primary-hover\r
                      transition\r
                    `,children:`Read More →`})]})]},t.slug)):(0,l.jsx)(`div`,{className:`col-span-full text-center py-16 text-gray-500`,children:`No news available`})})]})})};export{u as default};