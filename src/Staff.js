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

  componentDidMount(){
    const base = this
    const url = 'http://localhost:1817/api/staff'
    fetch(url)
    .then((res)=>{
      console.log(res);
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
