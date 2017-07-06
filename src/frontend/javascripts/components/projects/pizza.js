import React from 'react';

const Pizza = ({ hover }) => {
  return (
    <svg width='145' height='130' className={hover ? 'shrink' : 'grow'}>
      <circle className="roni" cx="48.2" cy="85.9" r="8.7"/>
      <circle className="roni" cx="73.1" cy="36.6" r="8.9"/>
      <circle className="roni" cx="75.7" cy="69.2" r="11"/>
      <circle className="roni" cx="104.6" cy="77.2" r="8"/>
      <circle className="roni" cx="87.9" cy="99.2" r="9.3"/>
      <path className="roni" d="M125.6,102.2c-0.9-0.6-2.1-0.8-3.2-0.8c-4.2,0-7.8,3.4-7.8,7.8c0,2.7,1.3,4.9,3.2,6.3c1.1-2.3,3-4,5.9-4.6
        C123.1,107.9,123.7,104.7,125.6,102.2z"/>
      <path className="pizza-outline" d="M8.6,97.3C21.5,84,23.9,81.7,25.3,70.9v2.7c7.6-3.8,13.7-11.8,16.3-25.8l-0.2,2.7c8-3,14.8-10.2,19-24.1
        c8.7-3.4,13.1-9.3,15.4-18.6l61.1,89.6L72.3,2.6c-5.5-4.2-25.6,13.5-44.6,39.3S-2.1,92,3.4,96.2l0,0l116.7,26.6
        c-0.4-4.2,1.5-8.7,6.1-9.7c-0.9-4.2,0.8-9.1,5.3-10.6c0.8-2.5,2.7-4.6,5.3-5.1"/>
    </svg>
  );
};

export default Pizza;
