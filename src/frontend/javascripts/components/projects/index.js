import React, {Component} from 'react';

import Box from '../util/box';
import MouseOver from '../util/mouseover';
import Pizza from './pizza';
import Graph from './graph';
import Taco from './taco';
import FBBot from './fbBot';
import ConditionOfEdu from './condition_of_edu';
import ExpenseReport from './expense_report';

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
              project='pizza'
              skills={['js', 'react', 'ruby', 'rails', 'sql']}
              projectName='Pizza With Strangers'>
              <Pizza />
            </MouseOver>
            <MouseOver
              project='graph'
              skills={['js', 'd3']}
              projectName='Graph Builder'>
              <Graph />
            </MouseOver>
            <MouseOver
              project='taco'
              skills={['js', 'node', 'express', 'react', 'nosql']}
              projectName='Taco Truck API'>
              <Taco />
            </MouseOver>
          </div>
          <div className='row'>
            <MouseOver
              project='fbbot'
              skills={['js', 'node', 'express']}
              projectName='Facebook Messenger Bot'>
              <FBBot />
            </MouseOver>
            <MouseOver
              project='report'
              skills={['js', 'node', 'express', 'react', 'nosql']}
              projectName='Expense Report'>
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
              project='pizza'
              skills={['js', 'react', 'ruby', 'rails', 'sql']}
              projectName='Pizza With Strangers'>
              <Pizza />
            </MouseOver>
            <MouseOver
              project='graph'
              skills={['js', 'd3']}
              projectName='Graph Builder'>
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
