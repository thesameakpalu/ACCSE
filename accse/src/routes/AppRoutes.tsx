import {Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Home from "../pages/Home";
import About from "../pages/About";

const  routeTitles: Record<string, string> = {
    '/': 'Home | ACCSE',
    '/about': 'About | YClip',
    '/innovators': 'Innovators | YClip',
    '/projects': 'Projects | YClip',
    '/support': 'Support | YClip',
    '_projects': 'Projects | YClip',
    '/contact': 'Contact | YClip',
    '/news': 'News | YClip',
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
                <TitleManager />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    
                </Routes>

        </>
    )
}

export default AppRoutes;