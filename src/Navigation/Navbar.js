import './Navbar.css'

import logo from "../Images/Logo.png";
import { useEffect } from 'react';

function GoToSection(id)
{
    const element = document.getElementById(id);
    element?.scrollIntoView({
        behavior: 'smooth'
    });
}

function Navbar()
{
    // Scroll control variables
    var lastScroll;
    var navbarElement;

    // Listeners
    useEffect(() => {
        window.addEventListener('scroll', ControlNavbar);

        return () => {
            window.removeEventListener('scroll', ControlNavbar);
        };
    });

    // Control navbar
    function ControlNavbar()
    {
        // Navbar setting, in case it's not yet set
        // Happens on the first time this function is called
        if (!navbarElement)
        {
            navbarElement = document.getElementById('Navbar');
            navbarElement.style.top = "0px";
        }

        // Scroll control variables
        var scrollDiff = lastScroll - window.scrollY;
        var navbarTop = parseFloat(navbarElement.style.top);

        // Clamp value between min and max and update navbar top
        // Math.min(Math.max(CURRENT VALUE, MIN), MAX)
        navbarElement.style.top = Math.min(Math.max(navbarTop + scrollDiff, -navbarElement.clientHeight), 0) + "px";

        // Update variables
        lastScroll = window.scrollY;
    }

    // HTML return
    return (
    <>
        <div className='Navbar' id='Navbar'>
            <div className='Navbar-left'>
                <img src={logo} alt='logo' />
                <p>MARCO BOSSLE VILLANOVA</p>
            </div>
            <div className='Navbar-right'>
                <button onClick={(e) => GoToSection('AboutSection', e)}>ABOUT</button>
                <p>|</p>
                <button onClick={(e) => GoToSection('ProjectsSection', e)}>PROJECTS</button>
                <p>|</p>
                <button onClick={(e) => GoToSection('ContactSection', e)}>CONTACT</button>
            </div>
        </div>
    </>
    );
}

export default Navbar;