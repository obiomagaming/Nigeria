import React from "react";
import  "./Boxs.css";
import PlaneDown from "./image/PlaneDown.jpg";
import GreenArrow from "./image/GreenArrow.jpg";
import Chat from "./image/Chat.jpg";
import Heart from "./image/Heart.jpg";
import Medal from "./image/Medal.jpg";
import Card from "./image/Card.jpg";
import Building from "./image/Building.jpg";
import IdCard from "./image/IdCard.jpg";
import Poll from "./image/Poll.jpg";


const imageList = [
    {
        id: 1,
        src: PlaneDown,
        alt: "image"
    },
    {
        id:2,
        src: GreenArrow,
        alt: "image"
    },
    {
        id: 3,
        src: Chat,
        alt: "image"
    },
    {
        id: 4,
        src: Heart,
        alt: "image"
    },
    {
        id: 5,
        src: Medal,
        alt: "image"
    },
    {
        id: 6,
        src: Card,
        alt: "image"
    },
    {
        id: 6,
        src: Building,
        alt: "image"
    },
    {
        id: 6,
        src: IdCard,
        alt: "image"
    },
    {
        id: 6,
        src: Poll,
        alt: "image"
    },
]

function Boxs ()  {
    return (
        <div className="topic"><h1>top services &amp; topics</h1>
            <div className="body-box" >
            
                
                <div className="box-1" id="box3">
                    <a href="">
                    <img key={PlaneDown.id} src={PlaneDown} alt="image"/>
                    <h2>Immigration And</h2>
                    <h2>Citizenship.</h2>
                <div id="box1p"><p>Learn about citizenship</p>     
                    <p>requirements and other</p>
                    <p>related info....</p>
                </div>
                <div><img key={GreenArrow.id} src={GreenArrow} alt="image"/></div>      
                    </a>
                </div>
                <div className="box-1" id="box2">
                    <a href="">
                    <img key={Chat.id} src={Chat} alt="image"/>
                    <h2>Complaints</h2>
                    <p>File complain and </p>
                    <p>more.</p>
                <div id="box2356"><img key={GreenArrow.id} src={GreenArrow} alt="image"/></div>  
                    </a>
                </div>
                <div className="box-1" id="box2">
                    <a href="">
                    <img key={Heart.id} src={Heart} alt="image"/>
                    <h2>Health</h2>
                    <p>Health resources and</p>
                    <p>benefits.</p>
                <div id="box2356"><img key={GreenArrow.id} src={GreenArrow} alt="image"/></div> 
                    </a>
                </div>
                <div className="box-1" id="box4">
                    <a href="">
                    <img key={Medal.id} src={Medal} alt="image"/>
                    <h2>Military And</h2>
                    <h2>Veternas</h2>
                <div id="box4p"><p>How to join the military</p>   
                    <p>and its benefits.</p></div> 
                <div id="box4img"><img key={GreenArrow.id} src={GreenArrow} alt="image"/></div>     
                    </a>
                </div>
                <div className="box-1" id="box5">
                    <a href="">
                    <img key={Card.id} src={Card} alt="image"/>
                    <h2>Money And Credit</h2>
                    <p>find government loans,</p>
                    <p>grants and other</p>
                    <p>benefits.</p>
                <div id="box5img"><img key={GreenArrow.id} src={GreenArrow} alt="image"/></div>      
                    </a>
                </div>
                <div className="box-1" id="box2">
                    <a href="">
                    <img key={Building.id} src={Building} alt="image"/>
                    <h2>Small Business</h2>
                    <p>Learn about business</p>
                    <p>and how to run it.</p>
                <div id="box2356"><img key={GreenArrow.id} src={GreenArrow} alt="image"/></div>    
                    </a>
                </div>
                <div className="box-1" id="box2">
                    <a href="">
                    <img key={IdCard.id} src={IdCard} alt="image"/>
                    <h2>Taxes</h2>
                    <p>Find out how to pay,</p>
                    <p>refund.</p>
                    <div id="box2356"><img key={GreenArrow.id} src={GreenArrow} alt="image"/> </div>     
                    </a>
                </div>
                <div className="box-1" id="box8">
                    <a href="">
                    <img key={Poll.id} src={Poll} alt="image"/>
                    <h2>Voting And</h2>
                    <h2>Elections</h2>
                    <p>All you need to know</p>
                    <p>about voting and</p>
                    <p>elections.</p>
                <div id="box8img"><img key={GreenArrow.id} src={GreenArrow} alt="image"/></div>      
                    </a>
                </div>
            

                

            

            

                



            
           
            
            </div>
        </div>

    );
    };

export default Boxs;