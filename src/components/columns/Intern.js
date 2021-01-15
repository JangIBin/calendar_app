import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './Intern.css';
import '../../reset.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock, faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";

import AddComment from './AddComment';
import CommentList from './CommentList';

function Intern() {

  const [inputs, setInputs] = useState({
    comment: ''
  });
  const {comment} = inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      comment: '흐하하하하하'
    },
    {
      id: 2,
      comment: '졸려어어어어어어어'
    },
    {
      id: 3,
      comment: 'Zzzzzzzzzz...'
    }
  ]);

  const nextId = useRef(4);
  const onSend = () => {
    const user = {
      id: nextId.current,
      comment
    };
    setUsers([...users, user]);

    setInputs({
      comment: ''
    });
    nextId.current += 1;
  }

  const onRemove = (id) => {
    //user.id 가 id 인 것을 제거
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div className="Intern">
      <div className="intern">
        <div className="intern-background">
          <div className="intern-background-wrap">
            <div className="background-wrap-title">
              <span>인턴</span>
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
            <AddComment comment={comment} onChange={onChange} onSend={onSend} />
            <CommentList users={users} onRemove={onRemove}  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intern;