import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {Provider} from 'react-redux'
import store  from './store'

import AnimatedRoutes from './Router';


function App() {
  return (


<HelmetProvider>

   <Helmet>
        <title>developer</title>
        <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="edixon_dev.co" />
        <meta name="author" content='Edixon' />
        <meta name="publisher" content='edixon' />
    </Helmet>
    <Provider store={store}>
    <Router>
          <AnimatedRoutes/>
    </Router>
    </Provider>
</HelmetProvider>
    
  );
}

export default App;
