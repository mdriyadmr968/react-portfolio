import React from 'react';
import About from '../About/About';
import Banners from '../Banners/Banners';
import Contacts from '../Contacts/Contacts';
import Projects from '../Projects/Projects';
import './Home.css'

const Home = () => {
    return (  
      <div>
        <Banners></Banners>
        <About></About>
        <Projects></Projects>
        <Contacts></Contacts>
        
      </div>
    );
};

export default Home;