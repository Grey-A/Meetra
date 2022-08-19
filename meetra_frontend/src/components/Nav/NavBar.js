import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './NavBar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    MEET<span style={{fontWeight: 'bold'}}>RA</span>
                </Link>
                <div className="nav-rg">
                  <div className="menu-icon" onClick={handleClick}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                          Feature 
                          </Link>
                      </li>
                      <li className="nav-item">
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                          Solutions 
                          </Link>
                      </li>
                      <li className="nav-item">
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                          Support 
                          </Link>
                      </li>
                      <li className="nav-item">
                        <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                          Login
                          </Link>
                      </li>
                      <li className="nav-item">
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                          Sign Up 
                          </Link>
                      </li>
                  </ul>
                  <div className="btns">
                    {button && <Link to='/login' className='btn--medium '> <Button buttonStyle='btn--outline'>Login</Button> </Link>}
                    {button && <Link to='/sign-up' className='btn--medium'> <Button buttonStyle='btn--outline btn-dark'>Sign Up</Button> </Link>}
                  </div>
              </div>
            </div>
      </nav>
    </>
  );
}

export default Navbar