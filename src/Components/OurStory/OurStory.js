import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './OurStory.css';
import LoveImage from './../../assets/images/loveimage.png';

export default function OurStory() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <div className={`ourstory ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
      <p className="story-title">THE ACCIDENTAL LOVE STORY: FROM PLAYFUL LIE TO FOREVER LOVE</p>
      <img className="loveimage" src={LoveImage} alt="Love Story" />
      <p className="story-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's 
        standard dummy text ever since the 1500s...
      </p>
    </div>
  );
}
