import React, { Component } from 'react';

const lilSebastian = require("./assets/lil_sebastian.jpg");

class Media extends Component {
  render(){
    return(
      <div className="container-fluid">
        <h2>Remembering Li'l Sebastian</h2>
        <a href="https://www.nbcstore.com/parks-and-recreation-farewell-li-l-sebastian-men-s-short-sleeve-t-shirt.html"><img src={lilSebastian} alt="Li'l Sebastian" id="lilSebastian" /></a>
        <h4>by Leslie Knope</h4>
        <div className="row justify-content-center">
          <div className="col-8">
            <p className="lil">He was an animal, a legend, a friend. He was our beacon of light. He was Pawnee’s horse. In what is surely the most monumental news to come out of Pawnee since the eradication of smallpox in 1993, it is with sorrow that we report: Li’l Sebastian is dead. But he will never leave our hearts and our memories.</p>
      			<p className="lil">Sebastian may have been li’l, but his impact on this town, and the Parks Department, was anything but li’l. When his owners, Michael and Elizabeth Stone, first discovered him, Elizabeth says it was “like seeing an angel and being punched in the gut at the same time – because as perfect as he was, we knew we’d never see anything that perfect again.” Michael goes on to say, “I love my wife, I do. But I LOVED Li’l Sebastian.”</p>
      			<p className="lil">Li’l Sebastian spent his years out in the field, changing the world. He was a goodwill ambassador for Indiana Veterans and went to Kuwait to entertain the troops. A champion climber, he was a member of the Great Lakes Ski Patrol and Emergency Rescue Team, serving as its captain from 1996-98. He participated in the celebrations for Queen Elizabeth II’s Golden Jubilee, even marching in front of Buckingham Palace. (Speaking of marching, that wonderful tiny horse trotted in every single Pawnee Independence Parade from 1987 on – except for 2003, when an ankle injury kept him sidelined. Though with no fewer than four floats in his honor, it sure felt like he was there!) And who can forget when he received his honorary degree from Notre Dame University? That’s Dr. Li’l Sebastian to you!</p>
      			<p className="lil">And then there was his lengthy relationship Li’l Agnes. The two met at a fund-raiser for then-Senator Evan Bayh, and for two years, they were inseparable, until, for reasons we still do not know, she soured on him. His heartbreak was palpable, leading to a six-month sabbatical from the public eye. But after a while, he got back on the horse(s). You know the names – Li’l Zelda, Li’l Jasmine, Li’l Courtney, and a brief weekend encounter with Big Jim – but sadly, he never married again.</p>
      			<p className="lil">In his final days, Li’l Sebastian was still entertaining boys and girls of all ages. What a workhorse! Despite being 23 years old, having cataracts in both eyes and severe arthritis, he was out there, with all of us, spreading joy and cheer. And now he, too, has left this earth.</p>
      			<p className="lil">So gallop on, Li’l Sebastian, in that big horsey ring in the sky.</p>
            <p className="lil">His legacy will live on. He sired over 200 mini-horse children, ensuring that future generations of Pawneeans, Americans and citizens of the world will continue laughing and sharing the joy of the Sebastian line.</p>
      			<p className="lil">Li’l Sebastian, we miss you. But we know you are in heaven, looking down on us, doing your two favorite things: eating carrots and urinating freely.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Media
