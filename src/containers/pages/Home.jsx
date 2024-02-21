import Navbar from "../../components/navigation/Navbar"
import Contact from "../../components/blog/Contact"
import Footer from "../../components/navigation/Footer"
import Layout from "../../hocs/Layout"
import { useEffect } from "react"
import Card from "../../components/blog/Card"
import {Helmet} from "react-helmet-async"

import {get_blog_list , get_blog_list_page } from '../../redux/actions/blog/blog'
import {get_categories} from '../../redux/actions/categories/categories'
import {connect} from 'react-redux'
function Home({
   posts,
   count,
    previous,
    next,
   get_categories,
   categories,
   get_blog_list,
   get_blog_list_page

    }){
    useEffect(()=>{
        window.scrollTo(0,0)
        get_categories()
        get_blog_list()
    },[])

    return(
                  
        <Layout>

        <Helmet>
            <title>3d1x0n</title>
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
        

              <div className="transition duration-1000 ease-in-out
                        bg-black-100 hover:bg-grey-100 transform
                        hover:-translate-y-1 hover:scale-80
                         px-2">
               <h4 key="ds" className="  p-8 text-lg text-indigo-600 py-8 font-bold text-5xl" >HOLA!</h4>
          
              <p className=" text-left shadow-xl mx-4 leading-loose font-bold  text-white p-6 decoration-sky-100 p-4 text-2xl ">
                    Mi nombre es edinson soy un desarrollador freelancer  full-stack  apasionado por  el desarrollo de sotfware y 
                    la ciberseguridad.<br/><br/>
                   <span className=" text-indigo-400 hover:text-sky-400">Actualmente me interesa la inteligencia artificial y su desarrollo ... </span>
                 </p>


           </div>

        <Card/>

        

          <Footer/>
      </Layout>
       
        )
}

const mapStateToProps=state=>({
    categories:state.categories.categories,
    posts:state.blog.blog_list,
    count:state.blog.count,
    previous:state.blog.previous,
    next:state.blog.next,
})

export default connect(mapStateToProps,{
    get_categories,
    get_blog_list,
    get_blog_list_page
})(Home)


