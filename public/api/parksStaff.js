const mongoose = require('mongoose');

const parksStaff = [
  {
    name: 'Ron Swanson',
    department: 'Department of Parks and Recreation',
    title: 'Director',
    quote: "Never half-ass two things. Whole-ass one thing.",
    img: './assets/ron.jpg'
  },
  {
    name: 'Leslie Knope',
    department: 'Department of Parks and Recreation',
    title: 'Deputy Director',
    quote: "What I hear when I'm being yelled at is people caring loudly at me.",
    img: './assets/leslie.jpg'
  },
  {
    name: 'Tom Haverford',
    department: 'Department of Parks and Recreation',
    title: 'Administrator',
    quote: "Sometimes you gotta work a little so you can ball a lot.",
    img: './assets/tom.jpg'
  },
  {
    name: 'April Ludgate-Dwyer',
    department: 'Department of Parks and Recreation',
    title: 'Assistant to Ron Swanson',
    quote: "I hate talking to people about things.",
    img: './assets/april.jpg'
  },
  {
    name: 'Donna Meagle',
    department: 'Department of Parks and Recreation',
    title: 'Permits Secretary',
    quote: "If you don't like how I tweet, don't follow me.",
    img: './assets/donna.jpg'
  },
  {
    name: 'Jerry Gergich',
    department: 'Department of Parks and Recreation',
    title: 'Office Manager',
    quote: "I think Comic Sans always screams fun, don't you?",
    img: './assets/jerry.jpg'
  },
  {
    name: 'Andy Dwyer',
    department: 'Department of Parks and Recreation',
    title: 'Assistant to Leslie Knope',
    quote: "When life gives you lemons make lemonade. I read that one on a can of lemonade. I like to think it applies to life.",
    img: './assets/andy.jpg'
  },
  {
    name: 'Ann Perkins',
    department: 'Department of Health',
    title: 'Public Relations Director',
    quote: "Jogging is the worst! I know it keeps you healthy, but God, at what cost?",
    img: './assets/ann.jpg'
  },
  {
    name: 'Ben Wyatt',
    department: 'City of Pawnee',
    title: 'Assistant City Manager',
    quote: "That was amazing. That was a flu-ridden Michael Jordan at the '97 NBC FInals. That was Kirk Gibson hobbling up to the plate and hitting a homer off of Dennis Eckersley. That was... that was Leslie Knope.",
    img: './assets/ben.jpg'
  },
  {
    name: 'Chris Traeger',
    department: 'City of Pawnee',
    title: 'City Manager',
    quote: "There is literally nothing in this world that you cannot do.",
    img: './assets/chris.jpg'
  }
];

module.exports = parksStaff;
