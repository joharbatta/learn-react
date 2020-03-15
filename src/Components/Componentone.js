import React,{Component} from 'react';

class Componentone extends Component
{
    count=10;
    state={
        name:'abc'
    }
    render()
    {
        console.log(this.count);
        return(
            <div>
                <h1>Hello World {this.count}{this.state.name}</h1>
            </div> 

        )
    }
}
export default Componentone;
