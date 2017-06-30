import React, {Component} from 'react';

import Contact from '../contact/index'
import About from '../about/index';
import Projects from '../projects/index'
import Skills from '../skills/index';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classesAbout: '',
      classesProjects: '',
      classesSkills: '',
      classesContact: '',
      clickedProjects: false,
      clickedSkills: false,
      clickedAbout: false
    }
  }

  onClickAbout() {

  }

  onClickProjects() {
    this.setState({
      clickedProjects: true,
      classesContact: 'scale-shrink-contact',
      classesAbout: 'scale-shrink-about',
      classesSkills: 'scale-shrink-skills',
      classesProjects: 'expand'
    });
  }

  render() {
    return (
      <div className='grid'>
        <About classes={this.state.classesAbout} />
        <Projects
          onClick={this.onClickProjects.bind(this)}
          clickedProjects={this.state.clickedProjects}
          classes={this.state.classesProjects} />
        <Contact classes={this.state.classesContact} />
        <Skills classes={this.state.classesSkills} />
      </div>
    );
  }
}

export default Grid;
