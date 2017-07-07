import React, { Component } from 'react';

import Box from '../util/box';

class About extends Component {

  render() {
    return (
      <Box {...this.props} name='About.' boxContainerType='about-container'>
        <p className='about-text text-inset'>
          Hey, thanks for visiting. I'm a full stack developer currently based in
          San Francisco.
        </p>
        <p className='about-text text-inset'>
          Get to know more about my skills by playing around with the site and
          looking through my projects.
        </p>
      </Box>
    );
  }
}

export default About;
