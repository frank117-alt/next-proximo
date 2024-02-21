import Navbar from "../../components/navigation/Navbar"
import Footer from "../../components/navigation/Footer"
import BlogCardHorizontal from  './BlogCardHorizontal'
import { useParams } from "react-router-dom";
import Layout from "../../hocs/Layout"
import { useEffect } from "react"
import {Helmet} from "react-helmet-async"
import Profil from "../../assets/data-analyst.png"
import {useState}from 'react'
import { Link ,useLocation,useNavigate } from "react-router-dom"
import {get_blog_list_category , get_blog_list_category_page } from '../../redux/actions/blog/blog'

import {connect} from 'react-redux'


function CategoryHeader({
      posts,
      count,
      previous,
      next,
      get_blog_list_category,
      get_blog_list_category_page,

}){
    const params =  useParams()
    const slug = params.slug
   
    useEffect(()=>{
        window.scrollTo(0,0)
        get_blog_list_category(slug)
    },[])


  

  return(

     <div className="overflow-hidden px-8 bg-white">
      <ul role="list" className="divide-y space-y-8 gap-8  divide-gray-400">
        {posts&&posts.map((post,index) => (
          <BlogCardHorizontal data={post} key={index} index={index}/>
        ))}
      </ul>
    </div>
    )

     

}
const mapStateToProps=state=>({
    posts:state.blog.blog_list_category,
    count:state.blog.count,
    previous:state.blog.previous,
    next:state.blog.next,
})

export default connect(mapStateToProps,{
    get_blog_list_category,
    get_blog_list_category_page
})(CategoryHeader)


