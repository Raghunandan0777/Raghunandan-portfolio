import './styles/components.css'
import Dock from "./components/Dock"
import Tooltip from './components/Tooltip'
import './styles/app.css'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'

function App() {

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Dock />
      <Tooltip />
    </>
  );
}

export default App