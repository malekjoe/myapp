import React from 'react';
import './Header.scss';

const Header = (props) => {
  const {header,icon}=props
  return (
    <div className='wrapper'>
      <h2>{header}</h2>
      <span>{icon}</span>
    </div>
  );
}

export default Header;
