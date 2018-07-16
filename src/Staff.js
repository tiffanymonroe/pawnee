import React, { Component } from 'react';



class Staff extends Component {
  constructor(){
    super()
    this.state = {
      staff: []
    }
  }

  componentDidMount(){
    const url = "https://pawnee-api.herokuapp.com/staff"
    fetch(url)
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        this.setState({
          staff: res
        })
      })
      .catch((err)=>{
        console.log("an error occured: ", err);
      })
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.staff.map((person, index) => <li key={index}>{person.name}</li>)}


        </ul>
      </div>
    )
  }
}




export default Staff
