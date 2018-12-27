import React, { Component } from 'react';
import FoodList from '../containers/food-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>List foods:</h2>
        {/* <FoodContainer/> */}
        <FoodList/>
        <hr/>
        <h2>List users:</h2>
      </div>
    );
  }
}

export default App;
