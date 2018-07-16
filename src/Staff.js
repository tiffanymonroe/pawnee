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
    return(
      <div>
        <ul>
          <li className="staff">
            <img src={this.state.img} alt={this.state.name} className="img-fluid staff-img" /> <br/>
            {this.state.name} <br/>
            {this.state.title} <br/>
            {this.state.department} <br/>
            <span className="quote">{this.state.quote} </span><br/>
          </li>
        </ul>
      </div>
    )
  }
}




export default Staff
