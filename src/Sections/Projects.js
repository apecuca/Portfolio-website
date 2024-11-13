import './Projects.css'

import projImg1 from "../Images/project1.jpg";
import projImg2 from "../Images/project2.jpg";
import projImg3 from "../Images/project3.jpg";

function Projects()
{
    /*
    var baseImgClass = 'FeaturedImg';
    var activeImgClass = ' ActiveImg';
    */

    var baseFeatureClass = 'carroussel-project'
    var activeFeatureClass = ' carroussel-active'

    var activeFeaturedIndex = 0;

    function moveCarroussel(dir)
    {
        let elements = document.getElementsByClassName(baseFeatureClass);

        if (elements.length <= 0) return;

        activeFeaturedIndex += dir;
        if (activeFeaturedIndex >= elements.length) activeFeaturedIndex = 0;
        else if (activeFeaturedIndex < 0) activeFeaturedIndex = elements.length - 1;

        for (let i = 0; i < elements.length; i++)
        {
            elements[i].classList = baseFeatureClass;
        }

        elements[activeFeaturedIndex].classList = baseFeatureClass + activeFeatureClass;
    }

    return (
    <>
        <div id='ProjectsSection' className='ProjectsSection'>
            <div className='FeaturedProjects'>
                <div className={baseFeatureClass + activeFeatureClass} style={{backgroundImage: `url(${projImg1})`}}>
                    <div className='carroussel-content'>
                        <button>SEE MORE</button>
                        <p>OHHH MAH GAH</p>
                    </div>
                </div>
                <div className={baseFeatureClass} style={{backgroundImage: `url(${projImg2})`}}>
                <div className='carroussel-content'>
                        <button>SEE MORE</button>
                        <p>OHHH MAH GAH 2</p>
                    </div>
                </div>
                <div className={baseFeatureClass} style={{backgroundImage: `url(${projImg3})`}}>
                <div className='carroussel-content'>
                        <button>SEE MORE</button>
                        <p>OHHH MAH GAH 3</p>
                    </div>
                </div>
                <button className='carroussel-prev' onClick={(e) => moveCarroussel(-1, e)}>❮</button>
                <button className='carroussel-next' onClick={(e) => moveCarroussel(1, e)}>❯</button>
            </div>
        </div>
    </>
    );
}

export default Projects;