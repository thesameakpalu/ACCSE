import {Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import News from "../pages/News";
import AppGallery from "../components/Gallery";
import ScrollToTop from "../scrollToTop";

const  routeTitles: Record<string, string> = {
    '/': 'Home | ACCSE',
    '/About': 'About | ACCSE',
    '/Gallery': 'Gallery | ACCSE',
    '/projects': 'Projects | YClip',
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
                <TitleManager />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/Gallery" element={<AppGallery />} />
                    
                </Routes>

        </>
    )
}

export default AppRoutes;