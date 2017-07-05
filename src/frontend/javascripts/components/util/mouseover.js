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
      this.setState({
        viewProjectName: true
      });

      this.props.skills.forEach( skill => {
        document.getElementById(skill).classList.add('hover-skills');
      });
    });
    document.getElementById(this.props.project).addEventListener('mouseout', () => {
      this.setState({
        viewProjectName: false
      });

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
        {this.state.viewProjectName ? <p style={{textAlign: 'center'}}>{this.props.projectName}</p> : null}
      </div>
    );
  }
}

export default MouseOver;
