import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Contact = () => {
  return (
    <div id='contact-id' className='pt-5'>
        <p className='fs-2 text-center fw-bold mt-5' data-aos="fade-down" data-aos-duration="1000">Let's <span className='text-warning'>Touch Together</span></p>
        
        <form action="" className='container pt-4'>
        <div id='form-id' className='row col-rows-2 justify-content-center' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
          <div className='row justify-content-center'>
          <div className='col-auto d-flex gap-3'>
            <input type='text' name="" id="" placeholder='Enter Your Name' required className='form-control'/>
            <input type='email' name="" id="" placeholder='Enter Your Email Id' required className='form-control'/>
          </div>
          </div>
  

          <div className='col-auto mt-3'>
          <div className='col-auto d-flex gap-3'>
            <input type='text' name="" id="" placeholder='Enter Your Phone Number' required className='form-control'/>
            <input type='text' name="" id="" placeholder='Enter Subject of the Email' required className='form-control'/>
          </div>
          </div>

          <div className='d-flex justify-content-center mt-3 ' id='message-div'>
            <textarea name="" id="input-msg" placeholder='Enter Your Message Here..' className='form-control' required></textarea>
          </div>

          <button className='btn btn-warning ms-2 form-control text-white fw-semibold mt-3' id='contact-btn'>Contact Me</button>
        </div>
        </form>
    </div>
  )
}

export default Contact

// import React, { useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import axios from 'axios';

// AOS.init();

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log('Sending data:', formData); // Debug form data
//       const response = await axios.post('http://localhost:5000/send-email', formData);
//       console.log('Server response:', response.data); // Log server response
//       alert(response.data.message);
//     } catch (error) {
//       console.error('Axios error:', error); // Log Axios error
//       if (error.response) {
//         console.error('Server error response:', error.response.data); // Backend error response
//       }
//       alert('Error sending message, please try again.');
//     }
//   };
  

//   return (
//     <div id="contact-id" className="pt-5">
//       <p className="fs-2 text-center fw-bold" data-aos="fade-down" data-aos-duration="1000">
//         Let's <span className="text-warning">Touch Together</span>
//       </p>
//       <form
//         id="form-id"
//         className="row g-2 justify-content-center"
//         data-aos="fade-up"
//         data-aos-easing="linear"
//         data-aos-duration="1000"
//         onSubmit={handleSubmit}
//       >
//         <div className="col-auto d-flex gap-3">
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter Your Name"
//             required
//             className="form-control"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Your Email"
//             required
//             className="form-control"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="d-flex justify-content-center mt-3" id="message-div">
//           <textarea
//             name="message"
//             id="input-msg"
//             placeholder="Enter Your Message"
//             className="form-control"
//             required
//             value={formData.message}
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         <button
//           className="btn btn-warning ms-2 form-control text-white fw-semibold mt-3"
//           id="contact-btn"
//           type="submit"
//         >
//           Contact Me
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;






// import React, { useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import axios from 'axios';

// AOS.init();

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/send-email', formData);
//       alert(response.data.message);  // Display success message
//     } catch (error) {
//       alert('Error sending message, please try again.');
//       console.error(error);  // Log any errors for debugging
//     }
//   };

//   return (
//     <div id="contact-id" className="pt-5">
//       <p className="fs-2 text-center fw-bold" data-aos="fade-down" data-aos-duration="1000">
//         Let's <span className="text-warning">Touch Together</span>
//       </p>
//       <form
//         id="form-id"
//         className="row g-2 justify-content-center"
//         data-aos="fade-up"
//         data-aos-easing="linear"
//         data-aos-duration="1000"
//         onSubmit={handleSubmit}
//       >
//         <div className="col-auto d-flex gap-3">
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter Your Name"
//             required
//             className="form-control"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Your Email"
//             required
//             className="form-control"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="d-flex justify-content-center mt-3" id="message-div">
//           <textarea
//             name="message"
//             id="input-msg"
//             placeholder="Enter Your Message"
//             className="form-control"
//             required
//             value={formData.message}
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         <button
//           className="btn btn-warning ms-2 form-control text-white fw-semibold mt-3"
//           id="contact-btn"
//           type="submit"
//         >
//           Contact Me
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;