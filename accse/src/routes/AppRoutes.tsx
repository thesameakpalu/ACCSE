import {Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import News from "../pages/News";
import AppGallery from "../components/Gallery";
import OurImpacts from "../pages/OurImpact";
import News5 from "../components/News/news5";
import News4 from "../components/News/news4";
import News3 from "../components/News/news3";
import News2 from "../components/News/news2";
import News1 from "../components/News/news1";
import ScrollToTop from "../scrollToTop";
import ScrollToHashElement from "../components/scrollToHash";

const  routeTitles: Record<string, string> = {
    '/': 'Home | ACCSE',
    '/About': 'About | ACCSE',
    '/Gallery': 'Gallery | ACCSE',
    '/Our_Impacts': 'Impacts | ACCSE',
    '/support': 'Support | YClip',
    '_projects': 'Projects | YClip',
    '/Contact': 'Contact | ACCSE',
    '/News': 'News | ACCSE',
      };

      function TitleManager() {
        const location = useLocation();
        const path = location.pathname.toLowerCase();
      
        useEffect(() => {
          let matchedTitle = 'YClip'; // default title
      
          // 1. Exact match
          if (routeTitles[path]) {
            matchedTitle = routeTitles[path];
          } else {
            const match = Object.keys(routeTitles)
        .sort((a, b) => b.length - a.length) // longest keys first
        .find((key) => path.startsWith(key) || path.endsWith(key));

      if (match) {
        matchedTitle = routeTitles[match];
      }
          }
      
          document.title = matchedTitle;
        }, [path]);
      
        return null;
      }


function AppRoutes() {




    return(
        <>
                <ScrollToTop />
                <ScrollToHashElement />
                <TitleManager />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/News/CSSE_KNUSTFORD" element={<News2 />} />
                    <Route path="/News/CSSE_GES_HBCU" element={<News3 />} />
                    <Route path="/News/CLIMATE_EDUCATION" element={<News1 />} />
                    <Route path="/News/COP_27_IN_RETROSPECT" element={<News5 />} />
                    <Route path="/News/COP_28" element={<News4 />} />
                    <Route path="/Gallery" element={<AppGallery />} />
                    <Route path="/Our_Impacts" element={<OurImpacts />} />
                    
                </Routes>

        </>
    )
}

export default AppRoutes;