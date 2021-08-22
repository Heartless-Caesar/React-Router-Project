import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const About = () => {

  return(
    <>
     <div className="title-div">
       <h1 className="title">About</h1>
     </div>
    <div className="return-div">
     <Link className="return-btn" to="/">Return Home</Link>
    </div>
    </>

)

}

export default About
