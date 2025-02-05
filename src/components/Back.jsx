import React from 'react'

function Back() {
    const containerStyle = {
        position: 'fixed', // Fixed so it stays in place
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        zIndex: -1, // Send it behind all content
      };
      
      const videoStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1, // Keep it behind everything
      };
      
    
    
      return (
        <div style={containerStyle}>
          <video style={videoStyle} autoPlay loop muted>
            <source src={`${process.env.PUBLIC_URL}/videos/video.mp4`} type="video/mp4" />
          </video>
          
        </div>
      );
    }
    

export default Back