import './FeaturedProjects.css'
import './ProjectsGallery.css'

import Carousel from 'react-bootstrap/Carousel';

import exampleImg from "../../Images/exampleImg.jpg";
import dinosBanner from "../../Images/dinosBanner.png"

function FeaturedProjects()
{
    return (
    <div className='featured-projects'>
        <Carousel>
            {/* ITEM ONE */}
            <Carousel.Item interval={null}>
                <img
                    className="d-block w-100" src={dinosBanner}
                    alt="Banner for the project called Dinos"
                />
                <Carousel.Caption> <div className='carousel-caption-content'>
                    <button>Learn More</button>
                    <p>Dinos is a multiplayer clone of the famous offline browser game: chrome://dino.
                        You can play against your friends (or alone) across PC and Mobile and customize your dino with a nickname and skin!</p>
                </div> </Carousel.Caption>
            </Carousel.Item>

            {/* ITEM TWO */}
            <Carousel.Item interval={null}>
                <img
                    className="d-block w-100" src={exampleImg}
                    alt="Default project banner"
                />
                <Carousel.Caption> <div className='carousel-caption-content'>
                    <button>Learn More</button>
                    <p>Default project (empty O_o!!!)</p>
                </div> </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    );
}

function ProjectGallery()
{
    return (
    <div className='project-gallery'>

        <h2>Projects I've worked on</h2>

        <div className='gallery-container'>
            <div className='gallery-item'>
                <img 
                    src={dinosBanner} 
                    alt='Banner for the project called Dinos'
                />
                <div className='gallery-item-content'>
                    <p>Dinos</p>
                    <p className='gallery-item-content-description'>
                        Dinos is a multiplayer clone of the famous offline browser game: chrome://dino.
                    </p>
                    <button>Learn More</button>
                </div>
            </div>

            <div className='gallery-item'>
            <img 
                    src={exampleImg} 
                    alt='Default banner for an empty project container'
                />
                <div className='gallery-item-content'>
                    <p>Example project item</p>
                    <p className='gallery-item-content-description'>
                        This is an example gallery item! Hello :)
                    </p>
                    <button>Learn More</button>
                </div>
            </div>

            <div className='gallery-item'>
                <div className='gallery-item-content'>
                    <p>WIP Project</p>
                    <p className='gallery-item-content-description'>
                        An example of a WIP project, without an image :O
                    </p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    </div>
    );
}

function Projects()
{
    return (
    <div id='ProjectsSection' className='projects'>
        <FeaturedProjects/>
        <ProjectGallery/>
    </div>
    );
}

export default Projects;