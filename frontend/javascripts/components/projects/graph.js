import React from 'react';

const Graph = ({ hover }) => (
  <svg className='project-img' width='100' height='121' className={hover ? 'shrink' : 'grow'}>
    <line className="graph-line" x1="35.5" y1="14.2" x2="14.2" y2="106.6"/>
    <circle className="roni" cx="14.2" cy="106.6" r="13.7"/>
    <circle className="roni" cx="35.5" cy="14.2" r="13.7"/>
    <circle className="roni" cx="84.9" cy="92.9" r="13.7"/>
    <line className="graph-line" x1="35.5" y1="14.2" x2="84.9" y2="92.9"/>
  </svg>
);

export default Graph;
