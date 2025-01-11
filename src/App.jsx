import './styles/components.css'
import Dock from "./components/Dock"
import Tooltip from './components/Tooltip'
import './styles/app.css'
import Home from './sections/Home'
import Cursor from './components/Cusror'
import Orbiting from './components/animations/Orbiting'

function App() {


  return (
    <>
    <Orbiting>
      <h1>Orbiting</h1>
    </Orbiting>
      <Home />
      <Dock />
      <Tooltip />
      <Cursor />
    </>
  );
}

export default App