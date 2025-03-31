import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Footer.css';

export default function Footer() {
  // Define breakpoints for different screen sizes
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1024 });

  return (
    <div className='footer' style={{
      padding: isMobile ? '10px' : isTablet ? '15px' : '20px',
      fontSize: isMobile ? '12px' : isTablet ? '14px' : '16px'
    }}>
      <div className='titles'>
        <p className='footer-title'>Created by DevSne</p>
        <p>Getting Married</p>
      </div>
    </div>
  );
}
