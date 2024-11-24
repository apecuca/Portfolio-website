import './FeaturedProjects.css';
import './ProjectsGallery.css';

import Carousel from 'react-bootstrap/Carousel';

import { OpenTab } from '../Contact';

import dinosBanner from "../../Images/banners/dinosBanner.png";
import mussagameBanner from '../../Images/banners/mussagame_banner.jpg';
import LUPEngineBanner from '../../Images/banners/LUPEngine_banner.jpg';
import plagueBanner from '../../Images/banners/plagueprototype_banner.jpg';
import portfolioBanner from '../../Images/banners/portfolio_banner.jpg';

function FeaturedProjects()
{
    return (
    <div className='featured-projects'>
        <Carousel>
            {/* ITEM ONE */}
            <Carousel.Item interval={15000}>
                <img
                    className="d-block w-100" src={dinosBanner}
                    alt="Banner for the project called Dinos"
                />
                <Carousel.Caption> <div className='carousel-caption-content'>
                    <button onClick={() => OpenTab('https://apecuca.itch.io/dinos')}>Learn More</button>
                    <p>Dinos is a multiplayer clone of the famous offline browser game: chrome://dino.
                        You can play against your friends (or alone) across PC and Mobile and customize your dino with a nickname and skin!</p>
                </div> </Carousel.Caption>
            </Carousel.Item>

            {/* ITEM TWOO */}
            <Carousel.Item interval={15000}>
                <img
                    className="d-block w-100" src={LUPEngineBanner}
                    alt="Banner for the project called LUPEngine"
                />
                <Carousel.Caption> <div className='carousel-caption-content'>
                    <button onClick={() => OpenTab('https://github.com/apecuca/LUPEngine_v1')}>Learn More</button>
                    <p>LUPEngine v1 is the first version of my own Game Engine, coded in C++ and OpenGL. This is an ongoing solo project.</p>
                </div> </Carousel.Caption>
            </Carousel.Item>

            {/* ITEM THREE */}
            <Carousel.Item interval={15000}>
                <img
                    className="d-block w-100" src={portfolioBanner}
                    alt="Banner for this website"
                />
                <Carousel.Caption> <div className='carousel-caption-content'>
                    <button onClick={() => OpenTab('https://github.com/apecuca/Portfolio-website')}>Learn More</button>
                    <p>This website! A fully responsive (I hope) static website, developed by me using the React.js framework.</p>
                </div> </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    );
}

function GalleryItem(props)
{
    // PROPS:
    // banner, title, description, externalLink
    return (
        <div className='gallery-item'>
            <img 
                src={props.banner} 
                alt={`Banner for the project called ${props.title}`}
            />
            <div className='gallery-item-content'>
                <p className='gallery-item-content-title'>{props.title}</p>
                <p className='gallery-item-content-description'>{props.description}</p>
                <button onClick={(e) => OpenTab(props.externalLink)}>Learn More</button>
            </div>
        </div>
    );
}

function Projects()
{
    return (
    <div id='ProjectsSection' className='projects'>
        <FeaturedProjects/>
        <div className='project-gallery'>
            <h2>Projects I've worked on</h2>
            <div className='gallery-container'>
                <GalleryItem
                    banner={dinosBanner} title='Dinos' 
                    description='Dinos is a multiplayer clone of the famous offline browser game: chrome://dino. This was a solo project.'
                    externalLink='https://apecuca.itch.io/dinos'
                />
                <GalleryItem
                    banner={mussagameBanner} title='Mussa Game V4'
                    description="I've worked on Mussa Game V4 as an additional programmer, implementing small game mechanics and bugfixes."
                    externalLink='https://play.google.com/store/apps/details?id=com.MaqnaInteractive.MussoumanoGame&hl=en'
                />
                <GalleryItem
                    banner={LUPEngineBanner} title='LUPEngine v1'
                    description="The first version of my own Game Engine, coded in C++ and OpenGL. This is an ongoing solo project."
                    externalLink='https://github.com/apecuca/LUPEngine_v1'
                />
                <GalleryItem
                    banner={plagueBanner} title='Plague Prototype'
                    description="Prototype for Plague, a fast roguelite platformer with a dark story. I've participated as the only programmer in this project."
                />
                <GalleryItem
                    banner={portfolioBanner} title='This website!'
                    description="A fully responsive (I hope) static website, developed by me using the React.js framework."
                    externalLink='https://github.com/apecuca/Portfolio-website'
                />
            </div>
        </div>
    </div>
    );
}

export default Projects;