import React, { useState, useEffect } from 'react';

import { Link } from "./Router";

import LoginGitHub from "./LoginGitHub"

import HeaderLogo from "../assets/header-logo.svg"

const useMedia = (query) => {
    const [matches, setMatches] = useState(
      window.matchMedia(query).matches
    );
  
    useEffect(() => {
     const media = window.matchMedia(query);
     if (media.matches !== matches) {
       setMatches(media.matches);
     }
  
     const listener = () => setMatches(media.matches);
     media.addListener(listener);
  
     return () => media.removeListener(listener);
    }, [query]);
  
    return matches; 
  }

const Header = () => {

    const [active, setActive] = useState(false);
    
    const mobile = useMedia("(max-width: 1040px)");

    const handleActive = () => {
        active && mobile ? setActive(false) : setActive(true);
    };

    return(
        <header className="header">
            <nav className="header-nav container">

                <div className="header-nav__primary">
                    <a href="#"><img src={HeaderLogo} alt="Turtle Logo"/></a>

                    <div className={`header-nav-menu${active && mobile ? ' active' : ''}`} onClick={() => handleActive()}>
                        <span className="header-nav-menu__item"></span>
                        <span className="header-nav-menu__item"></span>
                        <span className="header-nav-menu__item"></span>
                    </div>
                </div>


                <div className={`header-nav__content${active && mobile ? ' active' : ''}`}>
                    <ul className="header-nav__list">
                        <li className="header-nav__item"  onClick={() => handleActive()}>
                            <Link className="header-nav__link" to="/doc">Documentation</Link>
                        </li>

                        <li className="header-nav__item"  onClick={() => handleActive()}>
                            <a className="header-nav__link" href="https://github.com/turtlequeue/" target="_blank">GitHub</a>
                        </li>

                        <li className="header-nav__item" onClick={() => handleActive()}>
                            <a className="header-nav__link" href="#pricing">Pricing</a>
                        </li>

                        <li className="header-nav__item" onClick={() => handleActive()}>
                            <a className="header-nav__link" href="#contact">Contacts</a>
                        </li>
                    </ul>

                    <LoginGitHub />
                </div>
                
            </nav>
        </header>
    );
}

export default Header;