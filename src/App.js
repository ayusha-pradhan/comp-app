import React from 'react';
import './App.css';

import Counter from './counter';
//import Reverse from './reverse';





class App extends React.Component{

  render() {
    return (
      <div>
        <Counter/>
       {/* <Reverse/> */}
      </div>
    )
  }


}

export default App;