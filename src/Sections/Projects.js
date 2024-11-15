import './Projects.css'

import Carousel from 'react-bootstrap/Carousel';

import exampleImg from "../Images/exampleImg.jpg";
import dinosBanner from "../Images/dinosBanner.png"

function Projects()
{
    return (
    <>
    <div id='ProjectsSection' className='projects'>
        {/* CAROUSEL DE PROJETOS IMPORTANTES /*/}
        <div className='featured-projects'>
            <Carousel>
                <Carousel.Item interval={null}>
                    <img
                        className="d-block w-100" src={dinosBanner}
                        alt="Dinos banner"
                    />
                    <Carousel.Caption>
                        <button>Learn more</button>
                        <p>Dinos is a multiplayer clone of the famous offline browser game: chrome://dino.
                            You can play against your friends (or alone) across PC and Mobile and customize your dino with a nickname and skin!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <img
                        className="d-block w-100" src={exampleImg}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <button>Learn more</button>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <img
                        className="d-block w-100" src={exampleImg}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <button>Learn more</button>
                        <p>Sample Text for Image Three!!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
        {/* GALERIA DE PROJETOS /*/}
        <div className='project-gallery'>
            <h2>Projects I've worked on</h2>
        </div>
    </div>
    </>
    );
}

export default Projects;