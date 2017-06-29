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
      clickedProjects: false
    }
  }

  shrink() {
    return 'shrink';
  }

  expand() {
    return 'expand';
  }

  shrinkX() {
    return 'shrinkX';
  }

  shrinkY() {
    return 'strinkY';
  }

  onClickAbout() {

  }

  onClickProjects() {
    this.setState({
      classesContact: this.shrink(),
      clickedProjects: true
    })
  }

  render() {
    return (
      <div className='grid'>
        <About />
        <Projects onClick={this.onClickProjects.bind(this)} clickedProjects={this.state.clickedProjects} />
        <Contact classes={this.state.classesContact} />
        <Skills />
      </div>
    );
  }
}

export default Grid;
