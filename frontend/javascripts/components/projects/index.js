import React, {Component} from 'react';

import Box from '../util/box';
import MouseOver from '../util/mouseover';
import Pizza from './pizza';
import Graph from './graph';
import Taco from './taco';
import FBBot from './fbBot';
import ConditionOfEdu from './condition_of_edu';
import ExpenseReport from './expense_report';
import projects from './project_details'

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
    } else {
      this.setState({
        clicked: false
      })
    }
  }

  displayProjectContents() {
    if (this.state.clicked) {
      return (
        <div>
          <i className="fa fa-times shrink-projects text-inset"
             aria-hidden="true"
             onClick={this.props.onClickHome}>
          </i>
          <div className='row'>
            <MouseOver
              project={projects.pizza.project}
              skills={projects.pizza.skills}
              projectName={projects.pizza.projectName}
              URL={projects.pizza.URL}
              description={projects.pizza.description}>
              <Pizza />
            </MouseOver>
            <MouseOver
              project={projects.graph.project}
              skills={projects.graph.skills}
              projectName={projects.graph.projectName}
              URL={projects.graph.URL}
              description={projects.graph.description}>
              <Graph />
            </MouseOver>
            <MouseOver
              project={projects.taco.project}
              skills={projects.taco.skills}
              projectName={projects.taco.projectName}
              URL={projects.taco.URL}
              description={projects.taco.description}>
              <Taco />
            </MouseOver>
          </div>
          <div className='row'>
            <MouseOver
              project={projects.fbbot.project}
              skills={projects.fbbot.skills}
              projectName={projects.fbbot.projectName}
              URL={projects.fbbot.URL}
              description={projects.fbbot.description}>
              <FBBot />
            </MouseOver>
            <MouseOver
              project={projects.report.project}
              skills={projects.report.skills}
              projectName={projects.report.projectName}
              URL={projects.report.URL}
              description={projects.report.description}>
              <ExpenseReport />
            </MouseOver>
          </div>
        </div>
      );
    } else {
      return (
        <div className='project-preview'>
          <div className='row' style={{height:240}}>
            <MouseOver
              project={projects.pizza.project}
              skills={projects.pizza.skills}
              projectName={projects.pizza.projectName}
              URL={projects.pizza.URL}
              description={projects.pizza.description}>
              <Pizza />
            </MouseOver>
            <MouseOver
              project={projects.graph.project}
              skills={projects.graph.skills}
              projectName={projects.graph.projectName}
              URL={projects.graph.URL}
              description={projects.graph.description}>
              <Graph />
            </MouseOver>
          </div>
          <p className='expand-projects text-inset' onClick={this.props.onClick}>
            Explore More
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <Box {...this.props} name='Projects.' boxContainerType='projects-container'>

        {this.displayProjectContents()}

      </Box>
    );
  }
}


export default Projects;
