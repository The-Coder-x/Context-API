import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import {ColorModeSwitcher} from '../ColorModeSwitcher';

const Header = () => {
  return (
    <div className = 'header'>
      <div className="box1">
        <span className="heading">React Context API</span>
        <ColorModeSwitcher justifySelf="flex-end" />
      </div>
      <ul className="nav">
        <li className="pod1">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="pod2">
          <Link to={'/cart'}>Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
