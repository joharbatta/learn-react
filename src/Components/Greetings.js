import React,{Component} from 'react';



class Greetings extends Component
{
  render()
  {
      console.log(this.props) ;
    return(
      <div>
      <h1>{this.props.title}</h1>
      <p>{this.props.message}</p>
      </div>  
    );
  }
}

export default Greetings;