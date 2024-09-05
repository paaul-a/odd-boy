import React, { useEffect, useState } from 'react';

import myPhoto from '../../../images/headshot/scan copy 5.jpg'





function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <div className={`about-text ${visible ? 'visible' : ''}`}>

        <img
          src={myPhoto}
          alt="Headshot of Mason"
          className='headshot'
          width="300" 
          height="100%" 
        />

        <div className='about-details'>
          <h3>
            Photographer, editor, designer and videographer based in
            Atlanta working in editorial, fashion, music and creative industries.
          </h3>
          <p className='contact'>
            <a href="mailto:mason@odd-boy.com" className="contact-link">
              contact
            </a>
          </p>
        </div>



      </div>

      {/* <div className="about-text">
        <div className="about-title">
          <p>PHOTOGRAPHER / DESIGNER</p>
        </div>
        <div className="about-des">
          <p>
            Photographer, editor, designer and videographer based in
            Atlanta working in editorial, fashion, music and creative industries.
          </p>
        </div>
      </div> */}
    </>
  );
}

export default About;
