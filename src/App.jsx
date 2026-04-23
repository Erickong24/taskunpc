import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import NuevaTarea from './pages/NuevaTarea';
import DetalleTarea from './pages/DetalleTarea';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="app__container">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nueva" element={<NuevaTarea />} />
            <Route path="/tarea/:id" element={<DetalleTarea />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;