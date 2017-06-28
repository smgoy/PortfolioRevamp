import React, {Component} from 'react';

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
  }

  componentDidMount() {

    const classes = ['box-header', 'textDimensionCalculation'];
    const h1 = document.createElement('h1');
    h1.setAttribute('class', classes.join(' '));
    h1.setAttribute('id', 'skills');
    h1.appendChild(document.createTextNode("Skills."));
    document.body.appendChild(h1);
    const textEl = document.getElementById('skills');

    const width = textEl.offsetWidth;

    textEl.remove();

    this.setState({
      width: width + 1
    });
  }

  render() {
    console.log(this.state.width);
    return (
      <div className='skills-container'>
        <h1 className='box-header text-shadow'>Skills.</h1>
        <div className='bottom-boarder box-shadow' style={{width: this.state.width * .5}}></div>
      </div>
    );
  }
}


export default Skills;
