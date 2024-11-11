import './About.css'

// Libraries
import { LoremIpsum } from 'react-lorem-ipsum';

// Images
import logo from "../Images/Logo.png";

function About()
{
    return (
    <>
        <div id='AboutSection' className='AboutSection'>
            <div className='AboutSection-content'>
                <div className='AboutSection-textBox'>
                    <h1>Hi, I'm Marco!</h1>
                    <LoremIpsum p={1}/>
                </div>
                <img src={logo} alt='Me!'/>
            </div>
            <div className='AboutSection-technologies'>
                <h2>Technologies</h2>
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
    </>
    );
}

export default About;