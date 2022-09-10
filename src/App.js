import './App.css';
import { ListaTareas } from './components/ListaTareas';
import { Logo } from './components/Logo';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo />
      <ListaTareas />
    </div>
  );
}

export default App;
