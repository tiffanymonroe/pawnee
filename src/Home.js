import React, { Component } from 'react';

const pawnee = require("./assets/Seal_of_the_City_of_Pawnee_Indiana.png")

class Home extends Component {
  render(){
    return(
      <div className="container-fluid">
      <div className="row">
      <div className="col-4">
      <img src={pawnee} alt="Pawnee Seal" className="seal" />
      </div>
      <div className="col-8">
        <h1>Welcome to Pawnee!</h1>
        <h3>First in Friendship, Fourth in Obesity</h3>
          <p>Welcome to the city of Pawnee, Indiana. We are located 90 miles from Indianapolis and we are the state’s seventh-largest city. This site will serve as your gateway to all that is Pawnee.</p>
      </div>
      </div>




      </div>
    )
  }
}

export default Home
