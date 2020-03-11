import React, { Component,Fragment } from 'react';

import './App.css';

//component
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Shop></Shop>
      </Fragment>
    );
  }
}



export default App;
