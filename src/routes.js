import React from 'react';
import Home from './pages/Home';
import Index from './pages/Login/index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

// import Who from './pages/Who';
// import Blog from './pages/Blog';
// import Clients from './pages/Clients';
// import Contact from './pages/Contact';
// import Partners from './pages/Partners';
// import Services from './pages/Services';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} exact />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Index />} />
        {/* <Route path="/blog" element={<Blog />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/services" element={<Services />} />
          <Route path="/who" element={<Who />} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}