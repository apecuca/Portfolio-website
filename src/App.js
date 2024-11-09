//import logo from './logo.svg';
import './App.css';

import Navbar from './Navigation/Navbar';
import About from './Sections/About'
import Projects from './Sections/Projects'
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

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/