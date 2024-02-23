import React from "react";
import CoatOfArm1 from "./image/CoatOfArm1.jpg";
import FaceBook from "./image/FaceBook.jpg";
import X from "./image/X.jpg";
import Insta from "./image/Insta.jpg";
import "./Footer.css";



const imageList = [
    {
        id: 1,
        src: CoatOfArm1,
        alt: "Image"
    
    },
    {
        id: 2,
        src:  FaceBook,
        alert: "image"
    },
    {
        id: 3,
        src:  X,
        alert: "image"
    },
    {
        id: 3,
        src:  Insta,
        alert: "image"
    }
    ]

function Footer () {
     return (
            <div id="fcopy">
            <div className="Footer-1">
                    <div className="fimg"><img key={CoatOfArm1.id} src={CoatOfArm1} alt="image" /></div>
                <div className="ftext">
                    <h3> Quick Links</h3>
                    <p>About Us</p>
                    <p>Top Services &amp Topic</p>
                    <p>Privacy Policy</p>
                    
                </div>
                <div className="fxi"> 
                    <h3>Socials</h3>
                    <div className="fxiimage"> 

                    <div>    <img key={FaceBook.id} src={FaceBook} alt="image" /> </div>
                    <div> <img key={X.id} src={X} alt="image" />  </div>
                    <div id="insta"><img key={Insta.id} src={Insta} alt="image" />
                    </div>   
                    </div>
 

                </div>
                <div className="News">
                    <h3>Subscriber To Recive Our</h3>
                    <h3>Newslwtter</h3>
                   <div id="Newsp"> 
                        <p>stay informed about our most recent </p>
                        <p>news and publications.</p> 
                        </div>
                    <form>
                        <input type="text" placeholder="Enter Email"></input>
                    </form>
                    <button type="Submit">Subscribe</button>


                </div>

            </div>
           <div id="copy"> <h2>Copyright &copy; 2024 Government of Nigeria  | All rights reserved</h2></div> 

            
            </div>
    
        );
    };

export default Footer;