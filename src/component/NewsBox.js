import React from "react";
import FCTA from "./image/FCTA.jpg";
import GreenArrow from "./image/GreenArrow.jpg";
import "./NewBox.css";


const imageList =  [
{
    id: 1,
    src: FCTA,
    alt: "Image"

},
{
    id: 2,
    src: GreenArrow,
    alt: "image"
}
]

function NewsBox () {
    return (
        <div id="nandu">
            <h1>News &amp; updates</h1>
            <div className="bigbox">
             
                <div className="fcta" id="fcta1">
                      
                            <img key={FCTA.id} src={FCTA} alt="cooatof arm"/>
                       
                    <div className="fctatext">
                            <h3>Reloction of FAAN </h3>
                            <h3>Headquarters  from</h3>
                            <h3> Abuja to Lagos.</h3>
                        <div className="fcta-p">
                                <p>Office space scarcity in Abuja </p>
                                <p>initially made the move from </p>
                                <p>Lagos appear impractical.</p>
                           
                    </div>
                    <div id="fctaimg">
                           <img key={GreenArrow.id} src={GreenArrow} alt="arrow"/>
                            </div>    
                        </div>
                      
                </div>
                <div className="fcta" id="fcta2">
                       <div><h3>Ibadan Explosion</h3>
                            <p>FG awaits forensic investigation of actual cause</p>
                            <p>of tragic incident.</p> 
                            <div>
                            <img key={GreenArrow.id} src={GreenArrow} alt="arrow"/>
                        </div>
                        </div>
                       
                </div>
                <div className="fcta" id="fcta3">
                       <div>
                            <div id="fctah3"><h3>Central Bank of Nigeria dissolves the </h3>
                            <h3>Board and Management of three (3)</h3>
                            <h3> Banks</h3></div>
                            <p>Due to non-compliance of the Banks and their </p>
                            <p>Boards.</p>
                        </div>     
                        <div> 
                            <img key={GreenArrow.id} src={GreenArrow} alt="arrrow"/>
                        </div>   
                </div>

            </div>
        </div>
        
    );

};

export default NewsBox;
