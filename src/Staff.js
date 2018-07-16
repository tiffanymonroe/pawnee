import React, { Component } from 'react';


class Staff extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      title: "",
      department: "",
      quote: "",
      img: ""
    }
  }
//
  componentDidMount(){
    const base = this
    const url = "https://pawnee-api.herokuapp.com/staff"
    fetch(url)
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        console.log(res);
        base.setState({
          name: res.name,
          title: res.title,
          department: res.department,
          quote: res.quote,
          img: res.img
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
          <div></div>
        </ul>
      </div>
    )
  }
}




export default Staff
