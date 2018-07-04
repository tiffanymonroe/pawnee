const mongoose = require('mongoose');

const characters = [
  {
    name: 'Ron Swanson',
    department: 'Parks and Recreation',
    title: 'Director',
    quote: "",
    img: ''
  },
  {
    name: 'Leslie Knope',
    department: 'Parks and Recreation',
    title: 'Deputy Director',
    quote: "What I hear when I'm being yelled at is people caring loudly at me.",
    img: ''
  },
  {
    name: 'Tom Haverford',
    department: 'Parks and Recreation',
    title: 'Administrator',
    quote: "Sometimes you gotta work a little so you can ball a lot.",
    img: ''
  },
  {
    name: 'April Ludgate-Dwyer',
    department: 'Parks and Recreation',
    title: 'Assistant to Ron Swanson',
    quote: "I hate talking to people about things.",
    img: ''
  },
  {
    name: 'Donna Meagle',
    department: 'Parks and Recreation',
    title: 'Permits Secretary',
    quote: "If you don't like how I tweet, don't follow me.",
    img: ''
  },
  {
    name: 'Jerry Gergich',
    department: 'Parks and Recreation',
    title: 'Office Manager',
    quote: "I think Comic Sans always screams fun, don't you?",
    img: ''
  },
  {
    name: 'Andy Dwyer',
    department: 'Parks and Recreation',
    title: 'Assistant to Leslie Knope',
    quote: "When life gives you lemons make lemonade. I read that one on a can of lemonade. I like to think it applies to life.",
    img: ''
  },
  {
    name: 'Ann Perkins',
    department: 'Health',
    title: 'Public Relations Director',
    quote: "",
    img: ''
  },
  {
    name: 'Ben Wyatt',
    department: 'City of Pawnee',
    title: 'Assistant City Manager',
    quote: "That was amazing. That was a flu-ridden Michael Jordan at the '97 NBC FInals. That was Kirk Gibson hobbling up to the plate and hitting a homer off of Dennis Eckersley. That was... that was Leslie Knope.",
    img: ''
  },
  {
    name: 'Chris Traeger',
    department: 'City of Pawnee',
    title: 'City Manager',
    quote: "There is literally nothing in this world that you cannot do.",
    img: ''
  }
];

module.exports = characters;
