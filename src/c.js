

 import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      count:0,
      
    }
  }

  componentDidMount() {
   if(this.count !== 0){
       this.increment()
   }
   if(this.count===9){this.decrement()}
}


componentWillUnmount(){
  clearInterval(this.state.intervalId)
}

increment(){
    this.intervalId = setInterval(() => {
    this.setState({
      count : this.state.count + 1
    });
}, 1000);
  };
  
  decrement() {
    this.intervalId = setInterval(() => {
    this.setState({
      count : this.state.count - 1
    });
}, 1000);
  };
  render(){
    return(
      <h2>
        {this.state.count}
      </h2>
    )
  }



}

export default Counter;

  

 