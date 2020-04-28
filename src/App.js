import React, { Component } from 'react';
import Sum from './sum';

// import './App.css';

class App extends Component{
  state={
    names:['yaakov','shaun','moshe']
  }

  render(){
    const names=this.state.names.map((name=>{ return <Sum name={name}/>}))
    return(
      <div>
        welcome to my test.
        {names}
      
      </div>
    )
  }
}

export default App;
