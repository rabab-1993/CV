import React from 'react'
import './about.css';
import {FaUserAlt, FaRegBuilding, FaGraduationCap, FaCode} from 'react-icons/fa'


export const About = () => {
    return (
        <div className="about">
           <i><FaUserAlt /> ABOUT</i> 
           <hr/>
           <ins></ins>
           <p>Hard-working programmer with a flair for creating elegant solutions in the least amount of time, passionate for learning . Looking to use my programming skills</p>
           
           <i><FaRegBuilding /> WORK EXPERIENCE</i> 
           <hr/>
           <h3>Onaizah Association for Development and Human Services</h3>
           <h4>09/2018 - 12/2018</h4>
           <i><FaCode /> SKILS</i> 
           <hr/>
           <p>
               <span>HTML</span>
               <span>CSS</span>
               <span>Javascript</span>
               <span>React</span>
               <span>Node</span>
           </p>
           <i><FaGraduationCap/> Education</i>
           <hr/> 
           <h3>Bachelor Of Human Resource Mangement</h3>
           
        </div>
    )
}
