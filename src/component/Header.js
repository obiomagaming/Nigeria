import React from "react";
import CoatOfArm from "./image/CoatOfArm1.jpg";
import "./Header.css";
import BigCoatOfArm from "./image/BigCoatOfArm.png";
import Nav from "./image/Nav.jpg"


const imageList = [ 
  {
    id: 1,
    src: CoatOfArm,
    alt: "Coat of Arm"
  },

  {
    id: 2,
    src: BigCoatOfArm,
    alt: "Big coat of Arm"
  },
  {
    id: 3,
    src: Nav,
    alt: "Nav picture"

  }
]
function Header ()  {
  return (
  <div className="coat-of-arm">
    <div className="header">
        <img  key={CoatOfArm.id} src={CoatOfArm} alt="image" />
      <form>
        <input type="text" placeholder="Search"></input>
        <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div> 
    <div className="nav-bar">
      <ul>
        <li><a href="">All Topic Services</a></li>
        <li><a href="">Travel</a></li>
        <li><a href="">Taxes</a></li>
        <li><a href="">Scam &amp; Fraud</a></li>
        <li><a href="">Government Benefits</a></li>
        <li><a href="">About</a></li>
      </ul>

    </div>
    <div className="role">
        <img key={BigCoatOfArm.id} src={BigCoatOfArm} alt="image"/>
      <div className="role-p">
              <h1>Simplifying the discovery of government services.</h1>
              
              <p>Our role is to help you discover and comprehend government benefits,programs,and information.</p> 
              
          
          <button type="submit">Read more</button>
      </div>

    </div>
   <div className="Nav-picture">
      <img key={Nav.id} src={Nav} alt="image"/>
    </div> 
  </div>  
  
  

  
       
         
        
    );
};
export default Header;