import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import profile from '../assets/file3.png'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import Skill from './Skill';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Certificate from './Certificate';
// ..
AOS.init();


const Home = () => {

  const [text] = useTypewriter({
    words: ['FullStack Developer', 'Designer'],
    loop: {},
    Cursor ,
    typeSpeed: 150,
    delaySpeed: 1000,
    deleteSpeed:50,
    
  });


  return (
    <div >
      <div className='ps-5 pe-5 mt-5'>
        <Navbar/>
        <div id='home-id' className=' pt-5'>
          <div className='container'>
          <div className='row'>
        <div className='col ps-5 mt-5' data-aos="fade-up" data-aos-duration="1500">
            <p className='fw-bold fs-3 pt-5'>Hi, It's Me <br />
                <span className='fw-bold display-4' data-aos="fade-right" data-aos-duration="3000">Santhosh</span><br />
                <span className='fs-1 fw-bold ps-5'>And I'm a <span className='text-warning'>{text}</span><br /> 
                {/* <span className='ps-5'>Designer</span> */}
                </span>
            </p>
            
            <p>A full-stack developer doesn’t just write code—they write the story of tomorrow’s <br /> digital world.</p>
            
            <p className='pt-4 d-flex gap-5 fs-3' id='link-src'> 
              <Link to="https://github.com/santhosh-s10" className='text-black'><FaGithub id='git'/></Link>
              <Link to="https://www.linkedin.com/in/santhosh-s10/" className='text-black'> <FaLinkedin id='linkedin'/> </Link>
              <Link to="https://stackoverflow.com/users/26559523/santhosh-s?tab=profile" className='text-black'><FaStackOverflow id='stack'/></Link>
              <Link to="https://x.com/SANTHOSHS149708" className='text-black'><FaTwitter id='twit'/> </Link>
              <Link to='#' className='text-black'><FaInstagram id='insta'/> </Link>
              
               </p>
            {/* <button className='btn btn-warning text-white mt-3'>Hire me</button> */}
        </div> 
        <div className='col' data-aos="fade-down" data-aos-duration='2000'>
            <img src={profile} alt="Profile" className='ms-2' id='dancing-img' width={450}/>
          
        </div>
        </div>
        </div>
        </div>
        <About/>
        <Skill/>
        <Project/>
        <Certificate />
        <Contact/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home