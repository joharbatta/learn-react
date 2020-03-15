import React,{Component} from 'react';

class Componenttwo extends Component
{
   
    render()
    {
        
        return(
            <div>
               <h1>{this.props.children}:{this.props.count}{this.props.name}</h1>
            </div> 

        )
    }
}
export default Componenttwo;
