import React from 'react';
import './BottomPart.css';
import { useMediaQuery } from 'react-responsive';

const FixedContent = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

    return (
        <div className="fixed-content">
            <div className='bottom-first' style={{ fontSize: isMobile ? '25px' : isTablet ? '32px' : '40px', width: isMobile ? '90%' : '68%' }}>
                <div className='bottom-right' style={{ padding: isMobile ? '10px 30px 10px 0' : '20px 72px 20px 0' }}>MAY 26 2027</div>
                <div className='bottom-left' style={{ padding: isMobile ? '10px 0 10px 30px' : '20px 0 20px 72px' }}>KANNUR  KERALA</div>
            </div>
            <div className='bottom-second' style={{ fontSize: isMobile ? '18px' : '25px' }}>
                <h1 style={{ fontSize: isMobile ? '24px' : '32px', margin: isMobile ? '20px 0 6px 0' : '32px 0 8px 0' }}>WEDDING DAY</h1>
                <div className='sub-content' style={{ fontSize: isMobile ? '16px' : '20px' }}>MAY 26, 2027</div>
                <div className='sub-content' style={{ fontSize: isMobile ? '16px' : '20px' }}>10:45 AM-11:00 AM </div>
            </div>
        </div>
    );
};

export default FixedContent;