//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navigation/Navbar';
import About from './Sections/About'
import Projects from './Sections/Projects/Projects'
import Contact from './Sections/Contact';

function App()
{
  return (
    <div className='appBody' id='appBody'>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;