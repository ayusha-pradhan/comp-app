import React from 'react';
import Counter from './counter';

class Red extends React.Component {
    
    render(){
    return(
        <div 
        style={{
          backgroundColor: 'red',
          width: '200px',
          height: '200px'
        }}>
     
            <Counter/>
        </div>
      )
}
}
export default Red; 