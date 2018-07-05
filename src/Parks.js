import React, { Component } from 'react';
import Staff from './Staff'

const season3 = require("./assets/Season_3.jpg")
class Parks extends Component {
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img src={season3} alt="Parks and Rec Cast Season 3" />
          </div>
          <div className="col-6">
            <h4>Staff</h4>
            <Staff />
          </div>

        </div>
      </div>
    )
  }
}

export default Parks
