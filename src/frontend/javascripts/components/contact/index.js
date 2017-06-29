import React, { Component } from 'react';

import Box from '../util/box';

class Contact extends Component {

  render() {
    return (
      <Box name='Contact.' boxContainerType='contact-container'>
        <a href='https://github.com/smgoy' target='_blank'>
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href='https://www.linkedin.com/in/sam-gyory-43572766' target='_blank'>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href='mailto:sam.gyory@gmail.com' >
          <svg className='plane' x="0px" y="0px" viewBox="0 0 200 40">
          	<polygon className="st0" points="24.7,30.7 22.9,11.5 71.4,18.3 			"/>
          	<polygon className="st1" points="30,4.4 22.9,11.5 71.4,18.3 			"/>
          	<polygon className="st2" points="24.7,30.7 19.4,15 71.4,18.3 			"/>
          	<polygon className="st1" points="7.5,27.2 19.4,15 71.4,18.3 			"/>
          </svg>
        </a>
      </Box>
    );
  }
}

export default Contact;
