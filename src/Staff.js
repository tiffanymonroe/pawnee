import React, { Component } from 'react';


class Staff extends Component {
  constructor(){
    super()
    this.state = {
      staff: []
    }
  }
//
  componentDidMount(){
    const base = this
    const url = "http://localhost:1817/api/staff"
    fetch(url)
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        base.setState({
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
          <li></li>
        </ul>
      </div>
    )
  }
}




export default Staff
