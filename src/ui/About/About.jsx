import React from "react";
import './About.css'; 

// Componente tonto / Dumb Components / functional component 
const About = (props) => {

  return (
    <div className="bio">
     <br />
    <h3>This is About page</h3>
    <div className="about-name">My name is <strong>Laura Badillo</strong></div> <br />
    Hobbies: Hiking <br />
    About Me: Web/graphic designer - Project Manager, Enthusiastic learner
    <br /><br /><br />
    </div>
  );
};

export default About; 