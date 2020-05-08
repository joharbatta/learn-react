import React,{Component} from 'react';
import Greetings from "./Components/Greetings"
import Counter from "./Components/Counter"
import Componentone from './Components/Componentone';
import Componenttwo from './Components/Componenttwo';
import Componentfive from "./Components/Component5";
import App1 from '../src/Components/redux/App';
import UA1 from "../src/Components/udacity/assign1/src/App"
import UA2 from "../src/Components/udacity/assign2/src/App"
import UA4 from "../src/Components/udacity/assign4/src/App"
class App extends Component
{
  //here is used constructor method for count in decremenet
  //and arrow functions overcome this so its that
  constructor() {
    super()
    this.decreaseCount=this.decreaseCount.bind(this)
  }
  state={ 
    count: 0
  }
  increaseCount=()=>{
    this.setState({count: this.state.count+1})
  }
  decreaseCount()
  {
    this.setState({count: this.state.count-1})
  }
  resetCount=()=>
  {
    this.setState({count: 0})
  }
  render()
  {
  return (
    <div>
    <Greetings title="Good Afternoon" message="learning react" />
    <Counter  
      resetCount={this.resetCount} 
      decreaseCount={this.decreaseCount} 
      increaseCount={this.increaseCount} 
      count={this.state.count}
      />
      <Componentone/>
      <Componenttwo name="abc" count="10">JAtt</Componenttwo>
      <Componentfive/>
      <App1/>
      <UA1/>
      <UA2/>
      <UA4/>
    </div>
  );
  }
} 

export default App;