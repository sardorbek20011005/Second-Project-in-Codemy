import React from 'react';
import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import Service from "../../components/Service"
import About from "../../components/About"
import About1 from "../../components/About1"
import Card from "../../components/Card";
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default () => (
  <div>
    <Navbar/>
    <Header/>
    <Service/>
    <About/>
    <About1/>
    <Card/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </div>
);
