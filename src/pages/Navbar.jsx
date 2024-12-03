// import React from 'react'
// import {Link, Outlet} from 'react-router-dom'
// import prof from '../assets/profileImg.svg'
// import resume from '../assets/Software-Resume.pdf'

// const Navbar = () => {
//   return (
//     <div>
//       <nav className="navbar container-fluid navbar-expand-lg bg-light fixed-top ps-5">
//       <Link className="navbar-brand fs-4 fw-semibold " to="/">
//         Welcome.
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNavAltMarkup"
//         aria-controls="navbarNavAltMarkup"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <div className="navbar-nav">
//           <Link id='nav-home' className="nav-item nav-link active fw-semibold" to="/">
//             Home
//           </Link>
//           <Link id='nav-about' className="nav-item nav-link fw-semibold" to="/#about-id">
//             About
//           </Link>
//           <Link id='nav-skill' className="nav-item nav-link fw-semibold" to="/#skill-id">
//             Skill
//           </Link>
//           <Link id='nav-project'
//             className="nav-item nav-link fw-semibold"
//             to="/#project-id"
//             tabIndex="-1"
//           >
//             Project
//           </Link>
//           <a  id='nav-resume' href={resume} download='MyResume' target='_blank' className='btn fw-semibold btn-warning text-white me-5'>Download Resume</a>

          
//         </div>
//       </div>
//     </nav>

        
//     </div>
//   )
// }

// export default Navbar

import React from 'react';

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          {/* Left-aligned "Welcome" */}
          <a className="navbar-brand fs-4 fw-semibold" href="/">
            Welcome.
          </a>
          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Right-aligned items */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav gap-4">
              <button
                id="nav-home"
                className="nav-item nav-link fw-semibold btn"
                onClick={() => handleScroll('home-id')}
              >
                Home
              </button>
              <button
                id="nav-about"
                className="nav-item nav-link fw-semibold btn"
                onClick={() => handleScroll('about-id')}
              >
                About
              </button>
              <button
                id="nav-skill"
                className="nav-item nav-link fw-semibold btn"
                onClick={() => handleScroll('skill-id')}
              >
                Skill
              </button>
              <button
                id="nav-project"
                className="nav-item nav-link fw-semibold btn"
                onClick={() => handleScroll('project-id')}
              >
                Project
              </button>
              <button
                id="nav-certificate"
                className="nav-item nav-link fw-semibold btn"
                onClick={() => handleScroll('certificate-id')}
              >
                Certificates
              </button>
              <button
                id="nav-contact"
                className="nav-item nav-link fw-semibold btn"
                onClick={() => handleScroll('contact-id')}
              >
                Contact
              </button>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
