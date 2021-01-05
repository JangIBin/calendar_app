import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import moment from 'moment';

// CSS, Image
import './Main.css';
import img from '../img/day.jpg';

// FontAwesomeIcon
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
  faStar
} from "@fortawesome/free-solid-svg-icons";

import Sidebar from './Sidebar';
import Header from './Header';

function Main() {

  const [getMoment, setMoment] = useState(moment());

  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {
            Array(7).fill(0).map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

              if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <td key={index} style={{backgroundColor:'red'}}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if (days.format('MM') != today.format('MM')) {
                return (
                  <td key={index} style={{backgroundColor:'gray'}}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              }
            })
          }
        </tr>
      );
    }
    return result;
  }

  return (
    <div className="Main">
      <div className="main">
        <div className="main-background-1"></div>
        <div className="main-background-2">
          <div className="background-2-wrap">
            <img src={img} />
            <div className="main-title">
              To Do List
            </div>
            <div className="main-subtitle">
              Calendar_App with Notion
            </div>
            <div className="main-icon">
              <div className="icon-school">
                <i><FontAwesomeIcon icon={faGraduationCap} /></i>
                <Link to="/school"><p>학교</p></Link>
              </div>
              <div className="icon-company">
                <i><FontAwesomeIcon icon={faLaptop} /></i>
                <Link to="/intern"><p>인턴</p></Link>
              </div>
            </div>
            <div className="main-schedule">
              <div className="schedule-title">
                <p>일정</p>
              </div>
              <div className="schedule-right">
                <i><FontAwesomeIcon icon={faSearch} className="right-icon" /></i>
                <p>검색</p>
                <i><FontAwesomeIcon icon={faExpandAlt} className="right-icon" /></i>
                <i><FontAwesomeIcon icon={faEllipsisH} className="right-icon" /></i>
              </div>
              <div className="btn_group">
                <button className="test_btn1">새로 만들기</button>
                <button className="test_btn2">
                	<i><FontAwesomeIcon icon={faChevronDown} /></i>
                </button>
              </div>
              <div className="schedule-hr">
                <hr />
              </div>
            </div>
            <div className="main-calendar">
              <div className="calendar-control">
                <button onClick={() => { setMoment(getMoment.clone().subtract(1, 'month')) }}>이전달</button>
                <span>{today.format('YYYY년 MM월')}</span>
                <button onClick={() => { setMoment(getMoment.clone().add(1, 'month')) }}>다음달</button>
              </div>
              <table>
                <tbody>
                  {calendarArr()}
                </tbody>
              </table>
          	</div>
        	</div>
      	</div>
    	</div>
  	</div>
  )
}

export default Main;