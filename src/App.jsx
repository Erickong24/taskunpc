import { tareasIniciales } from './data/tareas';
import Header from './components/Header';
import ListaTareas from './components/ListaTareas';
import './App.css';

function App() {
  const pendientes = tareasIniciales.filter((t) => !t.completada).length;

  return (
    <div className="app">
      <Header pendientes={pendientes} />
      <main className="app__main">
        <div className="app__container">
          <h2 className="app__section-title">Mis Tareas</h2>
          <ListaTareas />
        </div>
      </main>
    </div>
  );
}

export default App;