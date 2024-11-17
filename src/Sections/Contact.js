import './Contact.css'

// Images
import github_icon from '../Images/github_icon.png'
import itchio_icon from '../Images/itchio_icon.png'
import email_icon from '../Images/email_icon.png'
import instagram_icon from '../Images/instagram_icon.png'

function OpenTab(url)
{
    window.open(url, '_blank').focus();
}

function Contact()
{
    return (
    <>
        <div id='ContactSection' className='contact'>
            <div className='contact-header'>
                <h1>Contact</h1>
                <p>If you want to contact me, here are all the places you can find me!<br/>Feel free to send a message :)</p>
            </div>

            <div className='contact-item' role="button" onClick={(e) => OpenTab('https://github.com/apecuca')}>
                <img src={github_icon} alt='Social media logo'/>
                <div className='contact-item-content'><p>https://github.com/apecuca</p></div>
            </div>

            <div className='contact-item' role="button" onClick={(e) => OpenTab('https://apecuca.itch.io/')}>
                <img src={itchio_icon} alt='Social media logo'/>
                <div className='contact-item-content'><p>https://apecuca.itch.io/</p></div>
            </div>

            <div className='contact-item' role="button" onClick={(e) => OpenTab('https://www.instagram.com/pac_marco/')}>
                <img src={instagram_icon} alt='Instagram logo'/>
                <div className='contact-item-content'><p>@pac_marco</p></div>
            </div>

            <div className='contact-item'>
                <img src={email_icon} alt='Social media logo'/>
                <div className='contact-item-content'><p>marco.bossle.villanova@gmail.com</p></div>
            </div>
        </div>
    </>
    );
}

export default Contact;