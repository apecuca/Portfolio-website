import './Navbar.css'

// Funcs
import { useEffect } from 'react';
import { OpenTab } from '../Sections/Contact'

// Icons
import hamburger_icon from '../Images/icons/hamburger_icon.png'
import github_icon from '../Images/icons/github_icon.png'
import itchio_icon from '../Images/icons/itchio_icon.png'
import instagram_icon from '../Images/icons/instagram_icon.png'

// Scroll control variables
var lastScroll;
var navbarElement;
var hamburgerMenu;

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

    // Update Navbar
    ControlNavbarScroll();
    navbarElement.style.top = "0px";
    lastScroll = window.scrollY;

    // Not the best approach
    // If this object had classes that where added/removed by
    // other script, this wouldn't work
    if (hamburgerImg.classList.length === 0)
    {
        hamburgerImg.classList = 'hamburger-button-active';
        hamburgerMenu.classList += ' hamburger-menu-active';
        document.body.classList += ' disableScroll';
    }
    else
    {
        hamburgerImg.classList = '';
        hamburgerMenu.classList = 'hamburger-menu';
        document.body.classList = '';
    }
}

function onWindowResize()
{
    // This is TERRIBLE, but works on the current scope hehe
    if (document.body.clientWidth > 950 && document.body.classList.length !== 0)
        onHamburgerClick();
}

function Navbar()
{
    // Listeners
    useEffect(() => {
        window.addEventListener('scroll', ControlNavbarScroll);
        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('scroll', ControlNavbarScroll);
            window.removeEventListener('resize', onWindowResize);
        };
    });
    
    // HTML return
    return (
    <>
        <div className='Navbar' id='Navbar'>
            <div className='navbar-container' id='NavbarContainer'>
                <div className='Navbar-left'>
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
                </div>
                <div className='hamburger-footer'>
                    <img src={github_icon} alt='GitHub logo' role='button' onClick={() => OpenTab('https://github.com/apecuca')}/>
                    <img src={itchio_icon} alt='Itch.io logo' role='button' onClick={() => OpenTab('https://apecuca.itch.io/')}/>
                    <img src={instagram_icon} alt='Instagram logo' role='button' onClick={() => OpenTab('https://www.instagram.com/pac_marco/')}/>
                </div>
            </div>
        </div>
    </>
    );
}

export default Navbar;