import './styles/components.css'
import Dock from "./components/Dock"
import Tooltip from './components/Tooltip'
import './styles/app.css'
import Home from './sections/Home'
import About from './sections/About'

function App() {

  return (
    <>
      <Home />
      <About />
      <Dock />
      <Tooltip />
    </>
  );
}

export default App