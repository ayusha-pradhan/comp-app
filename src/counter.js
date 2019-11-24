import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      counter:0,
      rev:false
      
    }
  }


  getCounter = () => {
    const { counter, rev } = this.state;

  
   return(
     setTimeout(() => {
      if(counter === 9) {
        this.setState({rev: true, counter: counter - 1}, () => counter);
      }
      else if (counter === 0) {
        this.setState({rev: false, counter: counter + 1}, () => counter);
      }
      else {
        if(rev) { 
          
          this.setState({counter: counter - 1}, () => counter);
        }
        else {
          this.setState({counter: counter + 1}, () => counter);
        }
      }
  }, 2000)

   );
  }
  

  render(){
    this.getCounter();
    const { counter } = this.state;
    return(
       
      <h2>{counter}</h2>
    )
  }



}

export default Counter;