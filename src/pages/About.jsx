import React from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
//     <div id='about-id' className='pt-5'>
//     <div className='mt-5 ps-5 pe-5 ' >

//         <p className='text-center fs-2 fw-bold' data-aos="fade-down" data-aos-duration="1000">About <span className='text-warning'>Me</span></p>
//         <div className='pe-5 ps-5 d-flex justify-center' data-aos ='fade-right' data-aos-duration="2000">
//         <p className='pe-5 ps-5'>
//             Hi, I'm Santhosh, a passionate frontend developer dedicated to crafting seamless and intuitive web experiences. With a degree in Computer Science from Builders Engineering College.
//             My goal is to create engaging and user-friendly web experiences that not only look great but work seamlessly across devices.

//             I specialize in HTML, CSS, and JavaScript, with advanced proficiency in frameworks like Tailwind CSS, Bootstrap and React.

            
//             <p>
//                 <br />
//                 If you're interested in collaborating on a project or just want to discuss the latest trends in frontend development, 
//                 feel free to reach out via <a href="https://www.linkedin.com/in/santhosh-s-b51939287/" className='text-decoration-none'>LinkedIn</a>, 
//                 or connect with me on <a href="https://x.com/SANTHOSHS149708" className='text-decoration-none text-primary'>Twitter</a>.
//             </p>
//         </p>
//         </div>
//     </div>
// </div>

<div id='about-id' className='pt-5'>
  <div className='container mt-5 px-3'>
    <p className='text-center fs-2 fw-bold' data-aos="fade-down" data-aos-duration="1000">
      About <span className='text-warning'>Me</span>
    </p>
    <div className='row justify-content-center' data-aos='fade-right' data-aos-duration="2000">
      <div className='col-12 col-md-10 col-lg-8'>
        <p>
          Hi, I'm Santhosh, a passionate frontend developer dedicated to crafting seamless and intuitive web experiences. 
          With a degree in Computer Science from Builders Engineering College. My goal is to create engaging and user-friendly 
          web experiences that not only look great but work seamlessly across devices.

          I specialize in HTML, CSS, and JavaScript, with advanced proficiency in frameworks like Tailwind CSS, Bootstrap, and React.

          <br /> 
           If you're interested in collaborating on a project or just want to discuss the latest trends in frontend development, feel free 
          to reach out via <Link to="https://www.linkedin.com/in/santhosh-s10/" className='text-decoration-none'>
            LinkedIn
          </Link>, or connect with me on <Link to="https://x.com/SANTHOSHS149708" className='text-decoration-none text-primary'>
            Twitter
          </Link>.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default About