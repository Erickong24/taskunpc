import { tareasIniciales } from '../data/tareas';
import TareaCard from './TareaCard';
import './ListaTareas.css';

function ListaTareas() {
  return (
    <section className="lista-tareas">
      <div className="lista-tareas__grid">
        {tareasIniciales.map((tarea) => (
          <TareaCard key={tarea.id} {...tarea} />
        ))}
      </div>
    </section>
  );
}

export default ListaTareas;
