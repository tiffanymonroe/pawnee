import React, { Component } from 'react';


class Staff extends Component {
  constructor(){
    super()
    this.state = {
      name: [],
      title: [],
      department: [],
      quote: [],
      img: []
    }
  }
//
  componentDidMount(){
    const url = "https://pawnee-api.herokuapp.com/staff"
    fetch(url)
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        for(let i=0; i < res.length; i++){
        this.setState({
          name: res[i].name,
          title: res[i].title,
          department: res[i].department,
          quote: res[i].quote,
          img: res[i].img
        })}
      })
      .catch((err)=>{
        console.log("an error occured: ", err);
      })
  }

  render(){
    console.log("this is name: ", this.state.name);
    console.log("this is title: ", this.state.title);
    return(
      <div>
        <ul>

        </ul>
      </div>
    )
  }
}




export default Staff
