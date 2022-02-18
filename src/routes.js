import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Clients from './pages/Clients';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Partners from './pages/Partners';
import Services from './pages/Services';
import Who from './pages/Who';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/" element={<Home />} exact />
          <Route path="/blog" element={<Blog />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/services" element={<Services />} />
          <Route path="/who" element={<Who />} />
        </Switch>
      <Footer />
    </BrowserRouter>
  )
}