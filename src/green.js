import React from 'react';
import Counter from './counter';

class Blue extends React.Component{
    render () {
        return(
          <div 
          style={{
            backgroundColor: 'green',
            width: '100px',
            height: '100px'
          }}>
       
              <Counter/>
          </div>
        )
      }

}


export default Blue;