import { Link } from 'react-router-dom';
import { useTareas } from '../context/TareasContext';
import './TareaCard.css';

function TareaCard({ id, titulo, materia, fecha, completada }) {
  const { toggleTarea } = useTareas();

  const fechaFormateada = new Date(fecha + 'T00:00:00').toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className={`tarea-card ${completada ? 'completada' : 'pendiente'}`}>
      <div className="tarea-card__top">
        <div className="tarea-card__badge">
          <span className={`badge ${completada ? 'badge--ok' : 'badge--pending'}`}>
            {completada ? '✓ Completada' : '⏳ Pendiente'}
          </span>
        </div>

        <label className="tarea-card__toggle" title="Marcar como completada/pendiente">
          <input
            type="checkbox"
            checked={completada}
            onChange={() => toggleTarea(id)}
            className="tarea-card__checkbox"
          />
          <span className="tarea-card__switch" />
        </label>
      </div>

      <Link to={`/tarea/${id}`} className="tarea-card__link">
        <h3 className="tarea-card__titulo">{titulo}</h3>
      </Link>

      <div className="tarea-card__meta">
        <span className="tarea-card__materia">📚 {materia}</span>
        <span className="tarea-card__fecha">📅 {fechaFormateada}</span>
      </div>
    </article>
  );
}

export default TareaCard;
