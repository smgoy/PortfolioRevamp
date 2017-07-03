import React, {Component} from 'react';

class Box extends Component {

  render() {
    return (
      <div className={`${this.props.boxContainerType} ${this.props.classes}`} >
        <h1 className='box-header text-inset'>{this.props.name}</h1>
        {this.props.children}
      </div>
    );
  }
}


export default Box;
