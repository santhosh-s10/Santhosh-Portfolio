import React from 'react'
import website from '../assets/Website.png'
import flutter from '../assets/flutter-cert.jpg'
import rLanguage from '../assets/R-language.jpg'
import speak from '../assets/speak.jpg'

const Certificate = () => {
  return (
    <div id='certificate-id' className='pt-5'>
        <div className='mt-5'>
            <p className='text-center fw-bold fs-2' data-aos="fade-down" data-aos-duration="1000">My <span className='text-warning'>Certificates</span></p>
        </div>
        <div className='container pt-4'>
            <div className='row gap-5'>
                <div className='col' data-aos="zoom-out-down" data-aos-duration='1000'>
                    <img id='cert-img' className='rounded' src={website} alt="Website" width={360} height={250} />
                </div>
                <div className='col' data-aos="zoom-out-down" data-aos-duration='1000'>
                    <img id='cert-img' className='rounded' src={flutter} alt="Flutter" width={360} height={250} />
                </div>
                <div className='col' data-aos="zoom-out-down" data-aos-duration='1000'>
                    <img id='cert-img' className='rounded' src={rLanguage} alt="R-Language" width={360} height={250} />
                </div>
                <div className='col' data-aos="zoom-out-down" data-aos-duration='1000'>
                    <img id='cert-img' className='rounded' src={speak} alt="Speak" width={360} height={250} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certificate