import './About.css'

// Images
import medrawing from "../Images/icons/MeDrawing.png"

// Tech icons
import html_icon from "../Images/technologies/html5_icon.png"
import css_icon from "../Images/technologies/css3_icon.png"
import javascript_icon from "../Images/technologies/javascript_icon.png"
import react_icon from "../Images/technologies/reactjs_icon.png"
import csharp_icon from "../Images/technologies/csharp_icon.png"
import unity_icon from "../Images/technologies/unity_icon.png"
import cpp_icon from "../Images/technologies/cpp_icon.png"
import opengl_icon from "../Images/technologies/opengl_icon.png"
import cmake_logo from '../Images/technologies/cmake_logo.png'

function About()
{
    return (
    <>
        <div id='AboutSection' className='about'> <div className='about-container'>
            <div className='about-infobox'>
                <h1>Hi, I'm Marco!</h1>
                <p>My name's Marco Bossle Villanova and I'm a C++ developer from Brazil, currently working at Audaces. I have experience in the entire 
                    game development process, from planning to release and maintenance. My dream is to someday live abroad 
                    and work as a Game Engine developer.<br />
                    Additionally, I have some experience with full-stack web and app development.
                </p>
                <div className='about-infobox-technologies'>
                    <img src={csharp_icon} alt='C# language logo'/>
                    <img src={unity_icon} alt='Unity Engine logo'/>
                    <img src={cpp_icon} alt='C++ language logo'/>
                    <img src={cmake_logo} alt='CMake logo'/>
                    <img src={opengl_icon} alt='OpenGL API logo'/>
                    <img src={html_icon} alt='HTML5 logo'/>
                    <img src={css_icon} alt='CSS3 logo'/>
                    <img src={javascript_icon} alt='Javascript language logo'/>
                    <img src={react_icon} alt='React.js logo'/>
                </div>
            </div>
            <img src={medrawing} alt='A drawing of me, made by me.'/>
            <div className='front-line'/>
            <div className='front-line front-line-bottom'/>
        </div></div>
    </>
    );
}

export default About;