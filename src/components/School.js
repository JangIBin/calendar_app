import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './School.css';
import '../reset.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSearch,
  faClock,
  faCog,
  faCaretRight,
  faMailBulk,
  faDownload,
  faTrash,
  faArrowLeft,
  faArrowRight,
  faEllipsisH,
  faGraduationCap,
  faLaptop,
  faExpandAlt,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faStar,
  faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";

function School() {
  return (
    <div className="School">
      <div className="school">
        <div className="school-background">
          <div className="school-background-wrap">
            <div className="background-wrap-title">
              <span>학교</span>
            </div>
            <div className="background-wrap-create">
            	<div className="wrap-create-1">
                <i><FontAwesomeIcon icon={faClock} /></i>
                <span>Created</span>
              </div>
              <div className="wrap-create-2">
                <span>Jan 5, 2021 1:39 PM</span>
              </div>
            </div>
            <div className="background-wrap-type">
              <div className="wrap-type-1">
                <i><FontAwesomeIcon icon={faCaretSquareDown} /></i>
                <span className="type">Type</span>
              </div>
              <div className="wrap-type-2">
                <span>Weekday</span>
              </div>
            </div>
            <div className="background-wrap-coment">
              <hr />
              <input type="text" placeholder="Add a comment..."/>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default School;