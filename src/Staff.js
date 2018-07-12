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
    const url = 'http://localhost:4000/api/staff'
    fetch(url)
      .then((res)=>{
        return res.json();
      })
      .then((json)=>{
        console.log(json);
        base.setState({
          name: json.name,
          title: json.title,
          department: json.department,
          quote: json.quote,
          img: json.img
        }).catch((err)=>{
          console.log('dammit, Jerry! ', err);
        })
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
