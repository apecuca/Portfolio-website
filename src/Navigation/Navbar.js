import './Navbar.css'

import logo from "../Images/Logo.png";
import hamburger_icon from '../Images/hamburger_icon.png'
import { useEffect } from 'react';

function Navbar()
{
    // Scroll control variables
    var lastScroll;
    var navbarElement;
    var hamburgerMenu;

    // Listeners
    useEffect(() => {
        window.addEventListener('scroll', ControlNavbarScroll);

        return () => {
            window.removeEventListener('scroll', ControlNavbarScroll);
        };
    });

    // Control navbar
    function ControlNavbarScroll()
    {
        // Navbar setting, in case it's not yet set
        // Happens on the first time this function is called
        if (!navbarElement || !hamburgerMenu)
        {
            navbarElement = document.getElementById('NavbarContainer');
            hamburgerMenu = document.getElementById('HamburgerMenu');
            navbarElement.style.top = "0px";
        }

        // Returns if the hamburger menu is active
        if (parseInt(hamburgerMenu.clientHeight) !== 0)
            return;

        // Scroll control variables
        var scrollDiff = lastScroll - window.scrollY;
        var navbarTop = parseFloat(navbarElement.style.top);

        // Clamp value between min and max and update navbar top
        // Math.min(Math.max(CURRENT VALUE, MIN), MAX)
        navbarElement.style.top = Math.min(Math.max(navbarTop + scrollDiff, -navbarElement.clientHeight), 0) + "px";

        // Update variables
        lastScroll = window.scrollY;
    }

    function GoToSection(id)
    {
        const element = document.getElementById(id);
        element?.scrollIntoView({
            behavior: 'smooth'
        });

        if (document.getElementById('HamburgerMenu').clientHeight !== 0)
            onHamburgerClick();
    }

    function onHamburgerClick()
    {
        const hamburgerImg = document.getElementById('HamburgerImg');
        const hamburgerMenu = document.getElementById('HamburgerMenu');

        // Update Navbar
        ControlNavbarScroll();
        navbarElement.style.top = "0px";
        lastScroll = window.scrollY;

        if (hamburgerImg.classList.length === 0)
        {
            hamburgerImg.classList = 'hamburger-button-active';
            hamburgerMenu.classList += ' hamburger-menu-active'
        }
        else
        {
            hamburgerImg.classList = '';
            hamburgerMenu.classList = 'hamburger-menu';
        }
    }

    // HTML return
    return (
    <>
        <div className='Navbar' id='Navbar'>
            <div className='navbar-container' id='NavbarContainer'>
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
                <div className='Navbar-right-mobile'>
                    <button>
                        <img 
                            src={hamburger_icon}
                            id='HamburgerImg'
                            onClick={(e) => onHamburgerClick()}
                            alt='Hamburger menu button'
                        />
                    </button>
                </div>
            </div>
            <div className='hamburger-menu' id='HamburgerMenu'>
                <div className='hamburger-content'>
                    <button onClick={(e) => GoToSection('AboutSection', e)}>ABOUT</button>
                    <button onClick={(e) => GoToSection('ProjectsSection', e)}>PROJECTS</button>
                    <button onClick={(e) => GoToSection('ContactSection', e)}>CONTACT</button>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='hamburger-footer'>

                </div>
            </div>
        </div>
    </>
    );
}

export default Navbar;