import React from "react";


function About({image="https://via.placeholder.com/215" ,text}){
    
    
            return(
                <aside>
                <img placeholder="image" src={image} alt = "blog logo">{image}</img>
                <p>{text}</p>
                </aside>
            )
        }
    


export default About