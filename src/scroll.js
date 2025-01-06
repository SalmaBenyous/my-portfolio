import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  // State to track whether the user has scrolled more than 200px
  const [showButton, setShowButton] = useState(false);

  // Effect to track scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };
  

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          color: 'white',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          width:'50px',
          height:'50px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        
        }}
      id='scrollToTopBtn' className='icon-arrow-up'>
        
      </button>
    )
  );
};

export default ScrollToTopButton;

