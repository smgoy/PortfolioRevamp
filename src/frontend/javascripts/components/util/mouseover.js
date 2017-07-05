import React, {Component} from 'react';

class MouseOver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewProjectName: false
    };
  }

  componentDidMount() {
    document.getElementById(this.props.project).addEventListener('mouseover', () => {
      this.props.skills.forEach( skill => {
        document.getElementById(skill).classList.add('hover-skills');
      });
    });
    document.getElementById(this.props.project).addEventListener('mouseout', () => {
      this.props.skills.forEach( skill => {
        console.log(skill);
        document.getElementById(skill).classList.remove('hover-skills');
      });
    });
  }

  render() {
    return(
      <div>
        {this.props.children}
        <p style={{textAlign: 'center'}}>{this.props.projectName}</p>
      </div>
    );
  }
}

export default MouseOver;
