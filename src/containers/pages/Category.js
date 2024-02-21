import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/Layout"
import { Helmet } from 'react-helmet-async';
import { useParams } from "react-router-dom";
import {useEffect} from "react"
import { connect } from "react-redux";
import {get_categories} from '../../redux/actions/categories/categories'
import CategoryHeader from '../../containers/pages/CategoryHeader'
import {get_blog_list_category_page , get_blog_list_category } from '../../redux/actions/blog/blog'




function Category({
   get_categories,
   categories,
   get_blog_list,
   get_blog_list_page

}){
 
 const params = useParams()
 const slug = params.slug

 useEffect(()=>{
        window.scrollTo(0,0)
        get_categories()
        get_blog_list_category(slug)
    },[])
      return(
         <Layout>

       <Helmet>
            <title>3dixon | category : {slug}</title>
            <meta name="description" content="desarrollo  de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
            <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
            <meta name="robots" content='all' />
            <link rel="canonical" href="https://www.edixondev.com/" />
            <meta name="author" content='developer' />
            <meta name="publisher" content='tu' />

            {/* Social Media Tags */}
            <meta property="og:title" content='edixondev | Software Agency' />
            <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
            <meta property="og:url" content="https://www.edixondev.com/" />
            <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

            <meta name="twitter:title" content='edixon_dev | Software Agency' />
            <meta
                name="twitter:description"
                content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
            />
            <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
            <meta name="twitter:card" content="summary_large_image" />
            <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
         </Helmet>
                  <Navbar categories={categories&&categories }/>

          <div className="pt-10">

            <CategoryHeader categories={categories&&categories}    />
            
             

          </div>
      
         

          <Footer/>


         </Layout>

      )
   
}
const mapStateToProps=state=>({
    categories:state.categories.categories,
    posts:state.blog.blog_list,
    count:state.count,
    previous:state.previous,
    next:state.next,
})

export default connect(mapStateToProps,{
    get_categories,
    get_blog_list_category,
    get_blog_list_category_page
})(Category)
