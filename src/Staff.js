import React, { Component } from 'react';

class Staff extends Component {
  constructor(props) {
    super(props)

      let list = this.props.staff
      for (let i=0; i < list.length; i++){
        this.state = {
          name: list[i].name,
          department: list[i].department,
          title: list[i].title,
          quote: list[i].quote,
          img: list[i].img
        }
      }
  }


  render(){
    return(
      <div>
        <h6>name</h6>
        <h6>title</h6>
        <h6>Department of </h6>
        <h6>Quote: </h6>

      </div>
    )
  }
}

export default Staff
