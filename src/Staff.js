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
    console.log(this.state.staff);
    return(
      <div>
        <ul>



        </ul>
      </div>
    )
  }
}




export default Staff
