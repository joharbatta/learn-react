import React,{Component} from 'react';
import Greetings from "./Components/Greetings"

class App extends Component
{
  render()
  {
  return (
    <Greetings title="Good Afternoon" message="learning react" />
  );
  }
} 

export default App;