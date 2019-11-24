import React from 'react';

class Reverse extends  React.Component{
  constructor(props){
    super(props);
    this.state ={
      counter:10,
      input:0
      
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if(this.state.counter <= 10 ) {
            this.setState((prevState) => ({
                counter: prevState.counter - 1
            }));
          }
      if
        (this.state.counter===0)
        {clearInterval(this.intervalId)
          this.setState((prevState) => ({
            counter: prevState.counter + 1,
            input: prevState.input + 1
        }));
        
              //  this.setState((prevState) => ({
              //      input: prevState.input + 1
              //  }))
      }
    
         }, 1000);
    
}

    


render(){
    return(
        <>
      <h2>{this.state.counter}</h2>
      <h3>{this.state.input}</h3>
    </>
    )
  }

}


export default Reverse;