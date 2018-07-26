import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: 'INCREMENT'
    });
  };

  incrementFive = () => {
    this.props.dispatch({
      type: 'INCREMENTFIVE'
    });
  };

  decrementTen = () => {
    this.props.dispatch({
      type: 'DECREMENTTEN'
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: 'DECREMENT'
    });
  };

  reset = () => {
    this.props.dispatch({
      type: 'RESET'
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <br />
          <button onClick={this.reset}>Reset</button>
        </div>
        <div>
          <button onClick={this.incrementFive}>Increase by 5</button>
        </div>
        <div>
          <button onClick={this.decrementTen}>Decrease by 10</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
