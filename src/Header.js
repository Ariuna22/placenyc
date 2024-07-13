import React from 'react';
import headerImage from './3.jpg';

const Header = () => {
  return (
    <div className="header-image">
      <img src={headerImage} alt="header" width="1500px" height="300px" />
      <h1>WELCOME TO NEW YORK</h1>
    </div>
  );
};

export default Header;