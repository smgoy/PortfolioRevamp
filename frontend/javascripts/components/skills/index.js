import React, {Component} from 'react';

import Box from '../util/box';

class Skills extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      hoverClass: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.clickedProjects) {
      this.setState({
        clicked: true
      });
    } else {
      this.setState({
        clicked: false
      });
    }

    if(nextProps.hoverClass) {
      this.setState({
        hoverClass: 'hover-skills'
      });
    } else {
      this.setState({
        hoverClass: ''
      });
    }
  }

  render() {
    return (
      <Box {...this.props}
        name={this.state.clicked ? '' : 'skills.'}
        boxContainerType='skills-container'>
        <div className='row'>
          <i id='js' className="devicon-javascript-plain colored text-inset"></i>
          <i id='node' className="devicon-nodejs-plain-wordmark colored text-inset"></i>
          <i id='express' className="devicon-express-original-wordmark colored text-inset"></i>
          <i id='react' className="devicon-react-original-wordmark colored text-inset"></i>
          <i id='d3' className="devicon-d3js-plain colored text-inset"></i>
        </div>
        <div className='row'>
          <i id='ruby' className="devicon-ruby-plain-wordmark colored text-inset"></i>
          <i id='rails' className="devicon-rails-plain-wordmark colored text-inset"></i>
          <i id='sql' className="devicon-postgresql-plain-wordmark colored text-inset"></i>
          <i id='nosql' className="devicon-mongodb-plain-wordmark colored text-inset"></i>
          <i id='sass' className="devicon-sass-original colored text-inset"></i>
        </div>
      </Box>
    );
  }
}


export default Skills;
