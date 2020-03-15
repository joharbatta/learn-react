import React, {Component} from 'react';
class Component5 extends Component
{
    state={
        flag:false,
        user:[]
    }
    render()
    {
        return (
    <div>
        {this.state.flag ? <h1>{this.state.user.name.first}{this.state.user.dob.age}</h1> : <h1>Loading....</h1>}
    </div>
        );

    }

async componentDidMount()
{
    const  url='https://randomuser.me/api';
    const res=await fetch(url);
    const data=await res.json();
    console.log(data)
    console.log(data.results[0].name.first);
    this.setState({user:data.results[0],flag:true});

}
}


export default Component5;