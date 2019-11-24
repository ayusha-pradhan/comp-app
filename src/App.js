import React from 'react';
import './App.css';
// import Red from './multiCompnent'
// import Blue from './green';
import Counter from './counter';
import Reverse from './reverse';



class App extends React.Component{

  render() {
    return (
      <div >
        <Counter/>
       {/* <Red />
       <Blue /> */}
        <Reverse/>
      </div>
    )
  }


}

export default App;