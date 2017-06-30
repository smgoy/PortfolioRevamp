import React, { Component } from 'react';

import Box from '../util/box';

class About extends Component {

  render() {
    return (
      <Box {...this.props} name='About.' boxContainerType='about-container'>
        <h1 style={{marginTop: 30}}>blah blah blah</h1>
        <h1>blah blah blah</h1>
        <h1>blah blah blah</h1>
        <h1>blah blah blah</h1>
      </Box>
    );
  }
}

export default About;
