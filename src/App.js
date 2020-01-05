import React,{Component} from 'react';
import Greetings from "./Components/Greetings"
import Counter from "./Components/Counter"

class App extends Component
{
  constructor() {
    super()
    this.increaseCount=this.increaseCount.bind(this)
  }
  state={
    count: 0
  }
  increaseCount()
  {
    this.setState({count: this.state.count+1})
  }
  decreaseCount()
  {
    console.log("Decreased");
  }
  resetCount()
  {
    console.log("RESET");
  }
  render()
  {
  return (
    <div>
    <Greetings title="Good Afternoon" message="learning react" />
    <Counter  resetCount={this.resetCount} decreaseCount={this.decreaseCount} increaseCount={this.increaseCount} count={this.state.count}/>
    </div>
  );
  }
} 

export default App;