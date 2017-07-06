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

      document.getElementById(`poject-description__${this.props.project}`).classList.add('fadein')

      this.props.skills.forEach( skill => {
        document.getElementById(skill).classList.add('hover-skills');
      });
    });
    document.getElementById(this.props.project).addEventListener('mouseout', () => {
      this.setState({
        viewProjectName: false
      });

      document.getElementById(`poject-description__${this.props.project}`).classList.remove('fadein')

      this.props.skills.forEach( skill => {
        document.getElementById(skill).classList.remove('hover-skills');
      });
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       hover: this.state.viewProjectName
     })
   );

    return(
      <div id={this.props.project} className='mouseover-container'>
        {childrenWithProps}
        <div id={`poject-description__${this.props.project}`} className='indiv-project-container'>
          <p className='indiv-project-header text-inset'>{this.props.projectName}</p>
          <p>description goes here. description goes here. description goes here.</p>
          <div className='row' style={{marginTop:5}}>
            <a href={this.props.gethubLink}><i className="fa fa-code text-inset" aria-hidden="true"></i></a>
            <a href={this.props.liveURL}><i className="fa fa-globe text-inset" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default MouseOver;
