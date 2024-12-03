import React from 'react'
import { Link } from 'react-router-dom'
import amazon from '../assets/amazon2.jpeg'
import rock from '../assets/rock.jpeg'
import travel from '../assets/travel2.jpeg'
import appStore from '../assets/appstore2.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Project = () => {
  return (
    // <div id='project-id' className='pt-5'>
    //   <div className='mt-5'>
    //     <p className='text-center fw-bold fs-2' data-aos="fade-down" data-aos-duration="1000">My <span className='text-warning'>Projects</span></p>
    //     <div className='container'>
    //       <div className='row pt-4 gap-5'>
        

    //         <div className='col' data-aos="zoom-in-up" data-aos-duration='1000' >
    //           <div id='img-container'>
    //             <img src={amazon} alt="amazon" id='amazon-div' width={360} height={220} className='rounded'/>
    //             <Link to='https://amazon-layout-page.netlify.app'>
    //             <p id='hover-text' className='pt-2 fw-bold'>Amazon Landing Page</p></Link>
    //           </div>
    //         </div>

    //         <div className='col' data-aos="zoom-in-up" data-aos-duration='1000' >
    //           <div id='img-container'>
    //             <img src={travel} alt="Travel" id='travel-div' width={360} height={220} className='rounded'/>
    //             <Link to='https://ibm-cloud-sample1.s3.che01.cloud-object-storage.appdomain.cloud/public.html'>
    //             <p id='hover-text' className='pt-2 fw-bold'>Travel Blog Landing Page</p></Link>
    //           </div>
    //         </div>
          
    //         <div className='col'data-aos="zoom-in-up" data-aos-duration='1000' >
    //           <div id='img-container'>
    //             <img src={rock} alt="Rock" id='rock-div' width={360} height={220} className='rounded'/>
    //             <Link to='https://paper-scissorsrock.netlify.app'>
    //             <p id='hover-text' className='pt-2 fw-bold'>Rock Paper Scissor</p></Link>
    //           </div>
    //         </div>

    //       <div className='col'data-aos="zoom-in-up" data-aos-duration='1000' >
    //         <div id='img-container'>
    //           <img src={appStore} alt="AppStore" id='rock-div' width={360} height={220} className='rounded'/>
    //           <Link to='https://appstore-opal.vercel.app/'>
    //           <p id='hover-text' className='pt-2 fw-bold'>App Store</p></Link>
    //       </div>
    //       </div>
          
    //     </div>
    //     </div>
    //     </div>
    // </div>

    <div id="project-id" className="pt-5">
  <div className="mt-5">
    <p
      className="text-center fw-bold fs-2"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      My <span className="text-warning">Projects</span>
    </p>
    <div className="container">
      <div className="row gy-4 pt-3">
        {/* Project 1 */}
        <div
          className="col-12 col-sm-6 col-lg-4 text-center"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div id="img-container">
            <img
              src={amazon}
              alt="amazon"
              id="amazon-div"
              className="rounded img-fluid w-100"
              style={{maxWidth: "360px", height: "220px" }}
            />
            <Link to="https://amazon-layout-page.netlify.app">
              <p id="hover-text" className="pt-2 fw-bold">
                Amazon Landing Page
              </p>
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="col-12 col-sm-6 col-lg-4 text-center"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div id="img-container">
            <img
              src={travel}
              alt="Travel"
              id="travel-div"
              className="rounded img-fluid w-100"
              style={{ maxWidth: "360px", height: "220px", }}
            />
            <Link to="https://ibm-cloud-sample1.s3.che01.cloud-object-storage.appdomain.cloud/public.html">
              <p id="hover-text" className="pt-2 fw-bold">
                Travel Blog Landing Page
              </p>
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="col-12 col-sm-6 col-lg-4 text-center"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div id="img-container">
            <img
              src={rock}
              alt="Rock"
              id="rock-div"
              className="rounded img-fluid w-100"
              style={{maxWidth: "360px", height: "220px", }}
            />
            <Link to="https://paper-scissorsrock.netlify.app">
              <p id="hover-text" className="pt-2 fw-bold">
                Rock Paper Scissor
              </p>
            </Link>
          </div>
        </div>

        {/* Project 4 */}
        <div
          className="col-12 col-sm-6 col-lg-4 text-center"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div id="img-container">
            <img
              src={appStore}
              alt="AppStore"
              id="rock-div"
              className="rounded img-fluid w-100"
              style={{maxWidth: "360px", height: "220px", }}
            />
            <Link to="https://appstore-opal.vercel.app/">
              <p id="hover-text" className="pt-2 fw-bold">
                App Store
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Project