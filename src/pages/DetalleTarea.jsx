import { useParams, useNavigate } from 'react-router-dom';
import { useTareas } from '../context/TareasContext';
import './DetalleTarea.css';

function DetalleTarea() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tareas, toggleTarea, eliminarTarea } = useTareas();

  const tarea = tareas.find((t) => t.id === Number(id));

  if (!tarea) {
    return (
      <div className="detalle detalle--not-found">
        <span className="detalle__not-found-icon">🔍</span>
        <h2>Tarea no encontrada</h2>
        <p>La tarea con ID {id} no existe o fue eliminada.</p>
        <button className="detalle__back-btn" onClick={() => navigate('/')}>
          ← Volver al inicio
        </button>
      </div>
    );
  }

  const fechaFormateada = new Date(tarea.fecha + 'T00:00:00').toLocaleDateString('es-CO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  function handleEliminar() {
    eliminarTarea(tarea.id);
    navigate('/');
  }

  return (
    <div className="detalle">
      <button className="detalle__back-link" onClick={() => navigate('/')}>
        ← Volver al inicio
      </button>

      <article className="detalle__card">
        <div className="detalle__status-row">
          <span className={`badge ${tarea.completada ? 'badge--ok' : 'badge--pending'}`}>
            {tarea.completada ? '✓ Completada' : '⏳ Pendiente'}
          </span>
          <span className="detalle__id">#{tarea.id}</span>
        </div>

        <h2 className="detalle__titulo">{tarea.titulo}</h2>

        <div className="detalle__info">
          <div className="detalle__info-item">
            <span className="detalle__info-label">📚 Materia</span>
            <span className="detalle__info-value">{tarea.materia}</span>
          </div>
          <div className="detalle__info-item">
            <span className="detalle__info-label">📅 Fecha de entrega</span>
            <span className="detalle__info-value">{fechaFormateada}</span>
          </div>
          <div className="detalle__info-item">
            <span className="detalle__info-label">📊 Estado</span>
            <span className="detalle__info-value">
              {tarea.completada ? 'Finalizada' : 'En progreso'}
            </span>
          </div>
        </div>

        <div className="detalle__actions">
          <button
            className="detalle__btn detalle__btn--toggle"
            onClick={() => toggleTarea(tarea.id)}
          >
            {tarea.completada ? '↩ Marcar pendiente' : '✓ Marcar completada'}
          </button>

          <button
            className="detalle__btn detalle__btn--delete"
            onClick={handleEliminar}
          >
            🗑 Eliminar tarea
          </button>
        </div>
      </article>
    </div>
  );
}

export default DetalleTarea;
