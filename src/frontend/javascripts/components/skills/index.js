import React, {Component} from 'react';

import Box from '../util/box';

class Skills extends Component {

  render() {
    return (
      <Box {...this.props} name='Skills.' boxContainerType='skills-container'>
        <div className='row'>
          <i className="devicon-javascript-plain colored text-shadow"></i>
          <i className="devicon-nodejs-plain-wordmark colored text-shadow"></i>
          <i className="devicon-express-original-wordmark colored text-shadow"></i>
          <i className="devicon-react-original-wordmark colored text-shadow"></i>
          <i className="devicon-d3js-plain colored text-shadow"></i>
        </div>
        <div className='row'>
          <i className="devicon-ruby-plain-wordmark colored text-shadow"></i>
          <i className="devicon-rails-plain-wordmark colored text-shadow"></i>
          <i className="devicon-postgresql-plain-wordmark colored text-shadow"></i>
          <i className="devicon-mongodb-plain-wordmark colored text-shadow"></i>
          <i className="devicon-sass-original colored text-shadow"></i>
        </div>
      </Box>
    );
  }
}


export default Skills;
