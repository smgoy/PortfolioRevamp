import React from 'react';

const ExpenseReport = ({ hover }) => (
  <svg className='project-img' width='100' height='130' className={hover ? 'shrink' : 'grow'}>
    <path className="report-st0" d="M96.3,18.9V119c0,2.2-1.8,4-4,4H6.4c-2.2,0-4-1.8-4-4V6c0-2.2,1.8-4,4-4h71.9L96.3,18.9H80.7
    	c-1.3,0-2.4-1.1-2.4-2.4V2"/>
    <line className="report-st1" x1="3.4" y1="22.1" x2="67.7" y2="22.1"/>
    <line className="report-st1" x1="3.4" y1="64.3" x2="67.7" y2="64.3"/>
    <line className="report-st1" x1="3.4" y1="43.2" x2="67.7" y2="43.2"/>
    <line className="report-st1" x1="3.7" y1="84.4" x2="68" y2="84.4"/>
    <line className="report-st1" x1="3.7" y1="104.5" x2="68" y2="104.5"/>
  </svg>
);

export default ExpenseReport;
