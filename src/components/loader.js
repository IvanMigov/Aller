import React from 'react';

export default () => {
  const getSpinElement = (index) => {
    const outerStyle = {
      position: 'absolute',
      top: '-2px',
      opacity: '0.25',
      animation: `opacity-60-25-${index}-12 0.666667s linear infinite`
    };
    const innerStyle = {
      position: 'absolute',
      width: '12px',
      height: '4px',
      background: 'rgb(51, 51, 51)',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 1px',
      transformOrigin: 'left center 0px',
      transform: `rotate(${30 * index}deg) translate(10px, 0px)`,
      borderRadius: '2px'

    };
    return (
      <div style={outerStyle} key={index}>
        <div style={innerStyle}></div>
      </div>
    )
  };
  const loaderStyle = {
    position: 'relative',
    width: '0px',
    zIndex: '2000000000',
    left: '50%',
    top: '50%'
  };

  return (
    <div className="td-preloader">
      <div style={loaderStyle}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(getSpinElement)}
      </div>

    </div>
  );
}

