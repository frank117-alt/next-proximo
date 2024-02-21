import Navbar from "../../components/navigation/Navbar"
import Footer from "../../components/navigation/Footer"
import Layout from "../../hocs/Layout"
import { useEffect } from "react"
import {Helmet} from "react-helmet-async"
import Profil from "../../assets/data-analyst.png"

import { Link } from "react-router-dom"


const posts = [
    {
      title: 'blog personal',
      href: '#',
      category: { name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800' },
      description:
        'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
        name: 'Paul York',
        href: '#',
  

      },
      readingTime: '6 min',
    },
    {
      title: 'React js  simple portafolio ',
      href: '#',
      category: { name: 'Article', href: '#', color: 'bg-pink-100 text-pink-800' },
      description:
        'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      author: {
        name: 'Dessie Ryan',
        href: '',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '4 min',
    },
    {
      title: 'Tienda en linea con Pyhon',
      href: '#',
      category: { name: 'Article', href: '#', color: 'bg-green-100 text-green-800' },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      author: {
        name: 'Easer Collins',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '11 min',
    },
     {
      title: 'Tienda en linea con Pyhon',
      href: '#',
      category: { name: 'Article', href: '#', color: 'bg-green-100 text-green-800' },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      author: {
        name: 'Easer Collins',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '11 min',
    },
     {
      title: 'Tienda en linea con Pyhon',
      href: '#',
      category: { name: 'Article', href: '#', color: 'bg-green-100 text-green-800' },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      author: {
        name: 'Easer Collins',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '11 min',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Projects(){


  return(
          <> 

        <Helmet>
            <title>3dixon_py</title>
            <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
            <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
            <meta name="robots" content='all' />
            <link rel="canonical" href="https://www.murkiva.com/" />
            <meta name="author" content='turbostore' />
            <meta name="publisher" content='tu' />

            {/* Social Media Tags */}
            <meta property="og:title" content='developer | Software Agency' />
            <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
            <meta property="og:url" content="https://www.murkiva.com/" />
            <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

            <meta name="twitter:title" content='developer | Software Agency' />
            <meta
                name="twitter:description"
                content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
            />
            <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
            <meta name="twitter:card" content="summary_large_image" />
            <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>


         </Helmet>

    <Layout>

        <Navbar/>


            {/* component */}

           <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">y porque python</h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
             sabemos que hay diferentes lenguajes de programacion para desarrollar diferentes tecnologias

            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">

            {posts.map((post) => (
              <div key={post.title} className="shadow">
                <div>
                  <a href={post.category.href} className="inline-block">
                    <span
                      className={classNames(
                        post.category.color,
                        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                      )}
                    >
                      {post.category.name}
                    </span>
                  </a>
                </div>
                <Link  to="/blog/detail" className="mt-4 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base  rounded-md  text-gray-500">{post.description}</p>
                </Link>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href}>{post.author.name}</a>
                    </p>
                    <div className="flex space-x-2  text-sm text-gray-500">
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        <Footer/>

    </Layout>

     </>
        )
}


export default Projects


