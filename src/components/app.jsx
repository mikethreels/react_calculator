import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const updateData = Calculate(this.state, buttonName);
    this.setState(updateData);
  }

  render() {
    const { total, next } = this.state;

    return (
      <div>
        <Display amount={next || total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
