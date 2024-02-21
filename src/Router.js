import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import Home from "./containers/pages/Home"
import Base from "./containers/pages/Base"
import Projects from "./containers/pages/Projects"
import Blog from "./containers/pages/Blog"
import Category from "./containers/pages/Category"
import Panel from "./containers/pages/Panel"
import DetailBlog from "./containers/pages/DetailBlog"

import Error404 from './containers/error/Error404'

import { AnimatePresence } from 'framer-motion'



function AnimatedRoutes(){

    const location = useLocation()

    return(

            <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* Error Display */}
                <Route path="*" element={<Error404 />} />
                


                {/* Home Display */}
                <Route path="/" element={<Home />} />
                <Route path="/blog/" element={<Base />} />
                <Route path="/blog/:slug" element={<Blog />} />
                <Route path="/detail/:slug" element={<DetailBlog />} />
                <Route path="/category/:slug" element={<Category/>} />
                <Route path="/Projects" element={<Projects/>} />
                <Route path='/panel' element={<Panel/>}/>

            </Routes>
            </AnimatePresence>
        
    )
}
export default AnimatedRoutes