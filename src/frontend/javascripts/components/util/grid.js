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
      clickedAbout: false,
      homeState: true
    }
  }

  // shrinkFromTopLeft() {
  //   if (!this.state.homeState) {
  //     if (this.state.clickedProjects) {
  //       this.state.classesProjects = 'position-top-left ';
  //       this.state.classesAbout = '';
  //       this.state.classesSkills = '';
  //     } else if (this.state.clickedAbout) {
  //       this.state.classesAbout = 'position-top-left ';
  //       this.state.classesSkills = '';
  //       this.state.classesProjects = '';
  //     } else if (this.state.clickedSkills) {
  //       this.state.classesSkills = 'position-top-left ';
  //       this.state.classesAbout = '';
  //       this.state.classesProjects = '';
  //     }
  //   }
  // }

  onClickAbout() {
    // this.shrinkFromTopLeft();

    this.setState({
      clickedAbout: true,
      homeState: false,
      classesContact: 'scale-shrink-contact',
      classesAbout: 'expand',
      classesSkills: 'scale-shrink-skills',
      classesProjects: 'scale-shrink-projects'
    });
  }

  onClickSkills() {
    // this.shrinkFromTopLeft();

    this.setState({
      clickedSkills: true,
      homeState: false,
      classesContact: 'scale-shrink-contact',
      classesAbout: 'scale-shrink-about',
      classesSkills: 'expand',
      classesProjects: 'scale-shrink-projects'
    });
  }

  onClickProjects() {
    // this.shrinkFromTopLeft();

    this.setState({
      clickedProjects: true,
      homeState: false,
      classesContact: 'scale-shrink-contact',
      classesAbout: 'scale-shrink-about',
      classesSkills: 'scale-shrink-skills',
      classesProjects: 'expand'
    });
  }

  render() {
    return (
      <div className='grid'>
        <About
          classes={this.state.classesAbout}
          onClick={this.onClickAbout.bind(this)} />
        <Projects
          onClick={this.onClickProjects.bind(this)}
          classes={this.state.classesProjects} />
        <Contact classes={this.state.classesContact} />
        <Skills
          classes={this.state.classesSkills}
          onClick={this.onClickSkills.bind(this)} />
      </div>
    );
  }
}

export default Grid;
