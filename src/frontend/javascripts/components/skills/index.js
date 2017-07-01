import React, {Component} from 'react';

import Box from '../util/box';

class Skills extends Component {

  render() {
    return (
      <Box {...this.props} name='Skills.' boxContainerType='skills-container'>
        <div className='row'>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-nodejs-plain-wordmark colored"></i>
          <i className="devicon-express-original-wordmark colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
          <i className="devicon-sass-original colored"></i>
        </div>
        <div className='row'>
          <i className="devicon-ruby-plain-wordmark colored"></i>
          <i className="devicon-rails-plain-wordmark colored"></i>
          <i className="devicon-postgresql-plain-wordmark colored"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <i className="devicon-webpack-plain-wordmark colored"></i>
        </div>
      </Box>
    );
  }
}


export default Skills;
