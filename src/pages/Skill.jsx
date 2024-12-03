import React from 'react'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import tailwind from '../assets/tailwind_CSS.svg'
import bootstrap from '../assets/bootstrap-5.svg'
import reactnative from '../assets/react.svg'
import c from '../assets/c.svg'
import python from '../assets/python.svg'
import java from '../assets/java.svg'
import firebase from '../assets/firebase.svg'
import mongodb from '../assets/mongodb.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Skill = () => {
  return (
    <div id='skill-id' className='pt-5' >
         <div className='container-sm mt-5'>
            {/* <div>
                <img src={profile2} alt="Profile2" className='img-fluid'/>
            </div> */}
            <div className='ms-5'>
                <p className='fs-2 fw-bold text-center' data-aos="fade-down" data-aos-duration="1000">My <span className='text-warning'>Speciality</span> </p>

                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consectetur inventore magni, recusandae ullam atque ad tempora impedit commodi totam id tenetur amet neque itaque modi facilis aperiam libero similique.</p> */}


                <p className='fw-bold fs-4' data-aos="zoom-in" data-aos-duration='1500'>Frontend Tools</p>
                <div className=' justify-content-evenly row row-cols-lg-6' >
                  <div id='hover-div' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
                    <img src={html} alt="" width={100} height={100}/>
                    <p className='fw-bold fs-5'>HTML 5</p>
                  </div>
                  <div id='hover-div' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
                    <img src={css} alt="" width={100} height={100}/>
                    <p className='fw-bold fs-5'>CSS 3</p>
                  </div>
                  <div id='hover-div' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
                    <img src={js} alt="" width={100}  height={100}/>
                    <p className='fw-bold fs-5'>JavaScript</p>
                  </div>
                  <div id='hover-div' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
                    <img src={tailwind} alt="" width={100} height={100}/>
                    <p className='fw-bold fs-5'>Tailwind CSS</p>
                  </div>
                  <div id='hover-div' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
                    <img src={bootstrap} alt="" width={100} height={100}/>
                    <p className='fw-bold fs-5'>Bootstrap 5</p>
                  </div>
                  <div id='hover-div' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
                    <img src={reactnative} alt="" width={100} height={100}/>
                    <p className='fw-bold fs-5'>React</p>
                  </div>
                </div>



                <p className=' fw-bold fs-4 mt-5' data-aos="zoom-in" data-aos-duration='1500'>Programming Languages</p>

                <div className='justify-content-start row row-cols-lg-6 mt-5'>
                  <div id='hover-div' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
                    <img src={python} alt="" width={100} height={100} />
                    <p className='fw-bold fs-5'>Python</p>
                  </div>
                  <div id='hover-div' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
                    <img src={c} alt="" width={100} height={100} />
                    <p className='fw-bold fs-5'>C</p>
                  </div>
                  <div id='hover-div' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
                    <img src={java} alt="" width={100} height={100} />
                    <p className='fw-bold fs-5'>Java</p>
                  </div>
                </div>


                
                <p className=' fw-bold fs-4 mt-5' data-aos="zoom-in" data-aos-duration='1500'>DataBases</p>

                <div className='justify-content-start row row-cols-lg-6 mt-5'>
                  <div id='hover-div' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
                    <img src={firebase} alt="" width={100} height={100} />
                    <p className='fw-bold fs-5'>FireBase</p>
                  </div>
                  <div id='hover-div' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
                    <img src={mongodb} alt="" width={100} height={100} />
                    <p className='fw-bold fs-5'>MongoDB</p>
                  </div>
                </div>

      
                <div>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill