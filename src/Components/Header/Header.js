import React from 'react';
import './Header.css'
const Header = () => {
     return (
          <div>
               <h1>Welcome To My Rest Countries</h1>
               <nav className='headerNav'>
                    <a href="/Home">HOME</a>
                    <a href="/Country">COUNTRY</a>
                    <a href="/Deatils">DEATILS</a>
               </nav>
          </div>
     );
};

export default Header;