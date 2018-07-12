import React, { Component } from 'react';
import Statutes from './Statutes'

// import images
const pawnee = require("./assets/Seal_of_the_City_of_Pawnee_Indiana.png")
const tree = require("./assets/fallen_tree.jpg")
const party = require("./assets/unity_concert.jpg")

class Home extends Component {
  render(){
    return(
      <div className="container-fluid">
        <div className="row" id="pawnee">
          <div className="col-4">
          <img src={pawnee} alt="Pawnee Seal" className="seal" />
          </div>
          <div className="col-8 ">
            <h1>Welcome to Pawnee!</h1>
            <h3>First in Friendship, Fourth in Obesity</h3>
            <hr />

            <div className="col-8">
              <p>Welcome to the city of Pawnee, Indiana. We are located 90 miles from Indianapolis and we are the state’s seventh-largest city. This site will serve as your gateway to all that is Pawnee.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Statutes />
          </div>
        </div>

          <div className="jumbotron">
            <h3>In the Spotlight</h3>
            <br />
            <div className="row">
              <div className="col-4">
                <h4>End of Summer Block Party</h4>
                <img src={party} alt="Unity Concert" className="img-fluid" />
                <p>Due to scheduling issues, the end of summer block party has been moved to December 1st.</p>
              </div>
              <div className="col-4">
                <h4>Fallen Tree on Plymouth St.</h4>
                <img src={tree} alt="fallen tree on plymouth st" className="img-fluid"/>          
                <p>It’s not your imagination. The fallen tree on Plymouth Street does look like a crocodile! The tree and its remains will be fully cleared from the street in a week, but for now, come down and take a picture with the tree-o-dile! Enjoy the Pawnee Croc-o-tree while there’s still time!</p>
              </div>

              <div className="col-4">
                <h4>Knife Safety</h4>
                <p>Many people have questions about Pawnee’s Byzantine Knife-Carry codes. Here’s a quick and easy guide.</p>

                <ul>
                  <li>3-inch foldable blades are acceptable, if sheathed in a leather case with a secure lock-back mechanism.</li>
                  <li>Flip-knives, butterfly knives, switchblades, and spring-loaded knives are permissible if and only if hidden in boots or secured to ankles.</li>
                  <li>4-inch to 14-inch blades require permit and proof that owner feels threatened and needs said knife for reassurance.</li>
                  <li>Sword canes and other blades disguised as ordinary objects (walker spears, umbrella shivs, backpack axes, prosthetic leg machetes, and fake-soda-can knives) are allowed.</li>
                  <li>Beginning 10/01/09, Chinese throwing stars are legally classified as “toys” and must be painted bright, child-friendly colors.</li>
                  <li>Cuisinart blades cannot be used outside of their Cuisinarts. This means you, Councilman Howard! <span role="img" aria-label="smiley">🙂</span></li>
                </ul>
              </div>
            </div>
          </div>



      </div>
    )
  }
}

export default Home
