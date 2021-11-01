import React from 'react'
import avatar from './img/avatar.svg'
import {FaGithub, FaTwitter, FaEnvelope, FaLocationArrow} from 'react-icons/fa'
import "./profile.css"




export const Profile = () => {
    return (
        <div className="profile">
         <img src={avatar} alt="avatar" className="avatar"/>  
         <h2>Rabab Yousef</h2>
         <h3>junior full stack developer</h3>
         <i><FaLocationArrow/> Qassim, Onaizah</i>
         <i><FaEnvelope/> rabab.abdulaziz.elq.js@tuwaiq.edu.sa</i>
         <div className="icons">
         <i><FaTwitter /></i>
         <i><FaGithub /></i>
         </div>
        </div>
    )
}
