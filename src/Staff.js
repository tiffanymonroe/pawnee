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
        <div className="row">
            <ul>
              {this.state.staff.map((person, index) =>
              <li key={index} className="staff">
                <img src={person.img} alt={person.name} className="img-fluid staff-img" /> <br/>
                <h6>{person.name}</h6>
                {person.title}<br/>
                <span id="department">{person.department}</span> <br/>
                <span className="quote">{person.quote}</span>
              </li>)}
            </ul>
        </div>
      </div>
    )
  }
}




export default Staff
