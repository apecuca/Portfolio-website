import './Navbar.css'

import logo from "../logo.svg";
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
    // Variables
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
        if (!navbarElement)
            navbarElement = document.getElementById('Navbar')

        var newScrollVl = lastScroll - window.scrollY;

        if (newScrollVl < 0)
        {
            // Descendo
            if (parseInt(navbarElement.style.top) + newScrollVl > -navbarElement.clientHeight)
                navbarElement.style.top = (parseInt(navbarElement.style.top) + newScrollVl) + "px";
            else
                navbarElement.style.top = -navbarElement.clientHeight + "px";
        }
        else
        {
            // Subindo
            if (parseInt(navbarElement.style.top) + newScrollVl < 0)
                navbarElement.style.top = (parseInt(navbarElement.style.top) + newScrollVl) + "px";
            else
                navbarElement.style.top = "0px";
        }

        lastScroll = window.scrollY;
    }

    // HTML return
    return (
    <>
        <div className='Navbar' id='Navbar'>
            <div className='Navbar-left'>
                <img src={logo} alt='logo' />
                <p>Marco Bossle Villanova</p>
            </div>
            <div className='Navbar-right'>
                <button onClick={(e) => GoToSection('AboutSection', e)}>Sobre</button>
                <button onClick={(e) => GoToSection('ProjectsSection', e)}>Projetos</button>
                <button onClick={(e) => GoToSection('ContactSection', e)}>Contato</button>
                <button onClick={(e) => GoToSection('AboutSection', e)} style={{paddingRight: '0px'}}><img src={logo} alt='logo'/></button>
            </div>
        </div>
    </>
    );
}

export default Navbar;