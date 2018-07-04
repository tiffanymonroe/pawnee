import React, { Component } from 'react';

const statutes = ["The official number of Pawnee is 14.",
      "Any magazine sold within town borders must contain no fewer than 16 print advertisements for cigarettes.",
      "Any establishment selling alcohol or liquor must inform its patrons of the pleasurable effects they may experience upon consumption.",
      "The quadrangle formed by Main, Hastings, Third and South Streets shall be referred to as “The Barnacle.” This area shall be exempt from all town, state, and Federal laws from Thursday-Sunday. This area shall be exempt from all town, state, and Federal laws from Thursday-Sunday.",
      "All brothels must be registered in the Department of Commerce. Also please notify Horace in accounting.",
      "A horse and a fish CANNOT marry.",
      "If you steal someone’s gold and own it for a period of three days, it is legally yours… (cont’d) If you steal someone’s gold and own it for a period of three days, it is legally yours pending the original owner does not challenge the new rightful owner to a knife duel or have the required 100 chickens (12 goats) to buy back his gold.",
      "Two or more women may not publicly gather, unless one is a midwife.",
      "An Irishman who reads in public can be convicted of “boasting.”",
      "Any woman caught whistling will be jailed for burlesque acts.",
      "Dogs are banned from the city on Tuesdays.",
      "Women are banned from the lewd and suggestive act of skipping.",
      "No man may cry within city limits.",
      "If a man desires a woman of consenting age to be his wife, she is thereby his wife.",
      "A man may only marry two of his sisters.",
      "Anyone caught speaking to the Oriental will be jailed.",
      "It is illegal to combine the words breakfast and lunch into the word brunch.",
      "Speaking a language other than English shall lead to ridicule and public stoning.",
      "Cosmetics for the face are hereby known as trickery and all women using them will be burned at the stake."]

const randomStatute = ()=>{
  let random = Math.floor(Math.random() * Math.floor(statutes.length))
    return statutes[random]
}


class Statutes extends Component {
  render(){
    return(
      <div className="statutes">
        <h4>Did you know?</h4>
          <h5>{randomStatute()}</h5>
      </div>
    )
  }
}

export default Statutes
