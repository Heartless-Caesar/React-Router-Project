import React from 'react';
import './index.css'
import {Link} from 'react-router-dom';

const Home = () => {

  return(
     <>
     <div className="nav-component">
      <ul className='nav-bar'>
       <li><Link className="link-btn" to="/List">Item List</Link></li>
       <li><Link className="link-btn" to="/About">About</Link></li>
      </ul>
     </div>
    <div className="title-div">
      <h1 className="title">Home</h1>
    </div>
    </>
  )

}

export default Home
