import React, { Component } from 'react';
import Statutes from './Statutes'

const season3 = require("./assets/Season_3.jpg")
class Government extends Component {
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img src={season3} alt="Parks and Rec Cast Season 3" />
          </div>
          <div className="col-6">
            <Statutes />
          </div>
        </div>
      </div>
    )
  }
}

export default Government
