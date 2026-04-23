import './TareaCard.css';

function TareaCard({ titulo, materia, fecha, completada }) {
  const fechaFormateada = new Date(fecha + 'T00:00:00').toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className={`tarea-card ${completada ? 'completada' : 'pendiente'}`}>
      <div className="tarea-card__badge">
        <span className={`badge ${completada ? 'badge--ok' : 'badge--pending'}`}>
          {completada ? '✓ Completada' : '⏳ Pendiente'}
        </span>
      </div>

      <h3 className="tarea-card__titulo">{titulo}</h3>

      <div className="tarea-card__meta">
        <span className="tarea-card__materia">📚 {materia}</span>
        <span className="tarea-card__fecha">📅 {fechaFormateada}</span>
      </div>
    </article>
  );
}

export default TareaCard;
