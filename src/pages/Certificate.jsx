import React from 'react'
import website from '../assets/Website.png'
import flutter from '../assets/flutter-cert.jpg'
import rLanguage from '../assets/R-language.jpg'
import speak from '../assets/speak.jpg'

const Certificate = () => {
  return (
//     <div id='certificate-id' className='pt-5'>
//         <div className='mt-5'>
//             <p className='text-center fw-bold fs-2' data-aos="fade-down" data-aos-duration="1000">My <span className='text-warning'>Certificates</span></p>
//         </div>

//         <div className=' row gap-3' >
//                   <div id='cert-img' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
//                     <img className='rounded' src={website} alt="Website" width={360} height={250}/>
//                   </div>
//                   <div id='cert-img' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
//                     <img className='rounded' src={flutter} alt="Flutter" width={360} height={250}/>
//                   </div>
//                   <div id='cert-img' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
//                     <img className='rounded' src={rLanguage} alt="R-Language" width={360}  height={250}/>
//                   </div>
//                   <div id='cert-img' className='col text-center' data-aos="zoom-in" data-aos-duration='2000'>
//                     <img className='rounded' src={speak} alt="Speak" width={360} height={250}/>
//                   </div>
//                 </div>



// {/* 
//         <div className='container pt-4 bg-danger'>
//             <div className='row gap-5'>
//                 <div className='col' data-aos="zoom-out-down" data-aos-duration='1000'>
//                     <img id='cert-img' className='rounded' src={website} alt="Website" width={360} height={250} />
//                 </div>
//                 <div className='col' data-aos="zoom-out-down" data-aos-duration='1000'>
//                     <img id='cert-img' className='rounded' src={flutter} alt="Flutter" width={360} height={250} />
//                 </div>
//                 <div className='col' data-aos="zoom-out-down" data-aos-duration='1000'>
//                     <img id='cert-img' className='rounded' src={rLanguage} alt="R-Language" width={360} height={250} />
//                 </div>
//                 <div className='col' data-aos="zoom-out-down" data-aos-duration='1000'>
//                     <img id='cert-img' className='rounded' src={speak} alt="Speak" width={360} height={250} />
//                 </div>
//             </div>
//         </div> */}
//     </div>



<div id="certificate-id" className="pt-5">
  <div className="mt-5">
    <p
      className="text-center fw-bold fs-2"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      My <span className="text-warning">Certificates</span>
    </p>
  </div>

  <div className="row pt-3 gy-4 justify-content-center">
    {/* Certificate 1 */}
    <div id='cert-img'
      className="col-12 col-sm-6 col-lg-4 text-center"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <img
        className="rounded img-fluid w-100"
        src={website}
        alt="Website"
        style={{ maxWidth: "360px", height: "250px", objectFit: "cover" }}
      />
    </div>
    {/* Certificate 2 */}
    <div id='cert-img'
      className="col-12 col-sm-6 col-lg-4 text-center"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <img
        className="rounded img-fluid w-100"
        src={flutter}
        alt="Flutter"
        style={{ maxWidth: "360px", height: "250px", objectFit: "cover" }}
      />
    </div>
    {/* Certificate 3 */}
    <div id='cert-img'
      className="col-12 col-sm-6 col-lg-4 text-center"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <img
        className="rounded img-fluid w-100"
        src={rLanguage}
        alt="R-Language"
        style={{ maxWidth: "360px", height: "250px", objectFit: "cover" }}
      />
    </div>
    {/* Certificate 4 */}
    <div id='cert-img'
      className="col-12 col-sm-6 col-lg-3 text-center"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <img className="rounded img-fluid" src={speak} alt="Speak" />
    </div>
  </div>
</div>


  )
}

export default Certificate