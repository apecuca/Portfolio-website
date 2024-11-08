import './Navbar.css'

import logo from "../logo.svg";

function GoToSection(id)
    {
        const element = document.getElementById(id);
        element?.scrollIntoView({
            behavior: 'smooth'
        });
    }

function Navbar()
{
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
                <a href='/'><img src={logo} alt='logo'/></a>
            </div>
        </div>
        <div id='AboutSection' className='test' style={{marginTop: '7.25em'}}></div>
        <div id='ProjectsSection'className='test'></div>
        <div id='ContactSection' className='test'><img src={logo} alt='logo' height={400}/></div>
    </>
    );
}

export default Navbar;