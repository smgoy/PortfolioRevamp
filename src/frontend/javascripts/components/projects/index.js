import React, {Component} from 'react';

import Box from '../util/box';
import Contact from '../contact/index';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.clickedProjects) {
      this.setState({
        clicked: true
      });
    }
  }

  showContactBox() {
    return <Contact classes='smaller-contact-container' />;
  }

  render() {
    return (
      <Box {...this.props} name='Projects.' boxContainerType='projects-container'>
      </Box>
    );
  }
}


export default Projects;
