import React from 'react';
import Red from './red';
import Green from './green'


class Reverse extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      counter:10,
      input:0,
      rev:false
      
    }
  }


getCounter = () => {
  const { counter, rev } = this.state;


 return(
   setTimeout(() => {
    if(counter === 0) {
      this.setState({rev: true, counter: counter + 1}, () => counter);
    }
    else if (counter === 10) {
      this.setState({rev: false, counter: counter - 1}, () => counter);
    }
    else {
      if(rev) { 
        
        this.setState({counter: counter + 1}, () => counter);
      }
      else {
        this.setState({counter: counter - 1}, () => counter);
      }
    }
}, 2000)

 );
}

getInput=()=>{
  const {counter,input}=this.state;
  return(
  setTimeout(()=>{
    if(counter===0)
      this.setState({input:input+1})
   
    
  },2000)
  )}

render(){
  this.getCounter();
  const { counter,input } = this.state;
  this.getInput()
  return(
     <>
    <h2>{counter}</h2>
    <h3>{input}</h3>
    <Red input={input}/>
    <Green input={input}/>
    
  </>)
}

}


export default Reverse;