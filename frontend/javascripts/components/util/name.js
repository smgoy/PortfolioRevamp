import React, {Component} from 'react';

class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'sg.'
    }
  }

  render() {
    return (
      <p className='name text-inset'>{this.state.name}</p>
    );
  }
}

export default Name;
