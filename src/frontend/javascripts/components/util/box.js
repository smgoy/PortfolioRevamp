import React, {Component} from 'react';

class Box extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
  }

  componentDidMount() {

    const classes = ['box-header', 'textDimensionCalculation'];
    const h1 = document.createElement('h1');
    h1.setAttribute('class', classes.join(' '));
    h1.setAttribute('id', this.props.name);
    h1.appendChild(document.createTextNode(this.props.name));
    document.body.appendChild(h1);
    const textEl = document.getElementById(this.props.name);

    const width = textEl.offsetWidth;

    textEl.remove();

    this.setState({
      width: width + 1
    });
  }

  render() {
    return (
      <div className={this.props.boxContainerType}>
        <h1 className='box-header text-shadow'>{this.props.name}</h1>
        <div className='bottom-boarder box-shadow' style={{width: this.state.width * .65}}></div>
        {this.props.children}
      </div>
    );
  }
}


export default Box;
