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
        document.getElementById(skill).classList.remove('hover-skills');
      });
    });
  }

  renderProjectInfo() {
    if (this.state.viewProjectName) {
      return (
        <div id={`poject-description__${this.props.project}`} className='indiv-project-container'>
          <p className='indiv-project-header text-inset'>{this.props.projectName}</p>
          <p>{this.props.description}</p>
        </div>
      );
    }
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       hover: this.state.viewProjectName
     })
   );

    return(
      <a href={this.props.URL} target='_blank'>
        <div className='mouseover-container' style={{width:145, height:152}}>
          <div id={this.props.project}>
            {childrenWithProps}
          </div>
          {this.renderProjectInfo()}
        </div>
      </a>
    );
  }
}

export default MouseOver;
