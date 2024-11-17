//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navigation/Navbar';
import About from './Sections/About'
import Projects from './Sections/Projects/Projects'
import Contact from './Sections/Contact';
import Footer from './Sections/Footer'

function App()
{
  return (
    <div className='appBody' id='appBody'>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;