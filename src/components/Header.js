import React from 'react';

// CSS, Image
import './style/Header.css';
import img from '../img/day.jpg';

// FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft, faArrowRight, faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return(
    <div className="Header">
      <div className="header">
        <div className="header-left">
          <i><FontAwesomeIcon icon={faArrowLeft} /></i>
          <i><FontAwesomeIcon icon={faArrowRight} /></i>
          <img src={img} alt="day" />
          <div className="header-name">Calendar</div>
        </div>

        <div className="header-right">
          <p>Share</p>
          <p>Updates</p>
          <p>Favorite</p>
          <i><FontAwesomeIcon icon={faEllipsisH} /></i>
        </div>
      </div>
  	</div>
  )
}

export default Header;