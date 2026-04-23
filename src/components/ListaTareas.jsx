import TareaCard from './TareaCard';
import './ListaTareas.css';

function ListaTareas({ tareas }) {
  if (tareas.length === 0) {
    return (
      <section className="lista-tareas">
        <div className="lista-tareas__empty">
          <span className="lista-tareas__empty-icon">📭</span>
          <p>No hay tareas en esta categoría</p>
        </div>
      </section>
    );
  }

  return (
    <section className="lista-tareas">
      <div className="lista-tareas__grid">
        {tareas.map((tarea) => (
          <TareaCard key={tarea.id} {...tarea} />
        ))}
      </div>
    </section>
  );
}

export default ListaTareas;
