import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// DEFINING RESET BUTTON
const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'Increment':
      return {
        count: state.count + 1
      };
    case 'Decrement':
      return {
        count: state.count - 1
      };
      case 'IncrementFive':
      return {
        count: state.count + 5
      }
      case 'DecrementTen':
      return {
        count: state.count - 10
      }
    default:
      return state;
  }
}

// FOR ALL BUTTON FUNCTIONALITY
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: (state.count = 0)
      };
      case 'INCREMENTFIVE':
      return {
        count: (state.count + 5)
      };
      case 'DECREMENTTEN':
      return {
        count: (state.count - 10)
      };
    default:
      return state;
  }
}

// function reducer(state = byFive, action) {
//   switch (action.type) {
//     case 'FIVE':
//       return {
//         count: (state.count + 5)
//       };
//     default:
//       return state;
//   }
// }

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));