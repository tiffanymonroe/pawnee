import React, { Component } from 'react';

const map = require("./assets/city_map.jpg")

class About extends Component {
  render(){
    return(
      <div className="container-fluid">
        <div className="about row justify-content-center">
          <div className="col-6">
            <a href="https://imgur.com/user/madsmadsmads"><img src={map} alt="Pawnee map by Madeline Schueren" className="map"/></a>
          </div>
          <div className="col-6">
              <h3>Our City</h3>
              <p>Pawnee is a city with low operating costs and a sizable labor pool. Its infrastructure is efficiently developed and its citizens are moderately well educated, making it an acceptable location for business. Growth in Pawnee is slow and steady, but Pawneeans say that what isn’t bolted down can be improved. The city is dedicated to maintaining its progress through reasonable expansion and sound planning.</p>
              <h3>A Place to Visit</h3>
              <p>Pawnee is not a tourist Mecca, but this fact has made it a somewhat desirable location for those looking to get away from the crowds. Whether it’s taking in a community theater play in the park, guided tours of old Wamapoke hunting and burial grounds, or just shopping in a chain store on Main Street, there’s always at least one thing to do on the weekends. The city has several hotels.</p>
            </div>
          </div>
        </div>




    )
  }
}

export default About
