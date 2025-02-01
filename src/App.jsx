import './styles/components.css'
import Dock from "./components/Dock"
import Tooltip from './components/Tooltip'
import './styles/app.css'
import Home from './sections/Home'
import About from './sections/About'
import Cursor from './components/Cusror'

function App() {

  return (
    <>
      <Home />
      <About />
      <Dock />
      <Tooltip />
      <Cursor />
    </>
  );
}

export default App