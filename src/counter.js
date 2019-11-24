import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      counter:0,
      
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
        if(this.state.counter >= 9) {
            // clearInterval(this.intervalId); 
            // if(this.state.counter <= 9) {

            this.setState((prevState) => ({
              counter: prevState.counter - 1
          }));
        }else {
            this.setState((prevState) => ({
                counter: prevState.counter + 1
            }));
        }
    }, 1000);
    // clearInterval(this.intervalId);
}


componentWillUnmount(){
  clearInterval(this.state.intervalId)
}

  // componentDidMount() {
  //   this.decrement()
  //   this.increment()
    
  // }

 
  // increment(){
  //   const {count}=this.state
  //   this.interval = setInterval(() => {
  //       if(count === 0) {         
  //         this.setState(({ count }) => ({
  //           count: count + 1,
  //         }))
  //       }
  //    }, 1000)
  // }
  // decrement(){
  //   const {co}=this.state
  //   this.interval = setInterval(() => {
  //     if(co === 5) {   
              
  //       this.setState(({ co }) => ({
  //         co: co - 1,
  //       }))
  //     }}
      
  //     , 1000)
  // }

  

  render(){
    return(
      <h2>
        {this.state.counter}
      </h2>
    )
  }



}

export default Counter;