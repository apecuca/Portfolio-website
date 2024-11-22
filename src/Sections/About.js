import './About.css'

// Libraries
import { LoremIpsum } from 'react-lorem-ipsum';

// Images
import logo from "../Images/Logo.png";

function About()
{
    return (
    <>
        <div id='AboutSection' className='about'>
            <div className='about-infobox'>
                <h1>Hi, I'm Marco!</h1>
                <LoremIpsum p={1} />
                <div className='about-infobox-technologies'>
                    <img src={logo} alt='logo'/>
                    <img src={logo} alt='logo'/>
                    <img src={logo} alt='logo'/>
                    <img src={logo} alt='logo'/>
                    <img src={logo} alt='logo'/>
                    <img src={logo} alt='logo'/>
                    <img src={logo} alt='logo'/>
                    <img src={logo} alt='logo'/>
                    <img src={logo} alt='logo'/>
                    <img src={logo} alt='logo'/>
                </div>
            </div>
            <img src={logo} alt='Me!'/>
        </div>
    </>
    );
}

export default About;