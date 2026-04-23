import { useState } from 'react';
import { useTareas } from '../context/TareasContext';
import ListaTareas from '../components/ListaTareas';
import './Inicio.css';

function Inicio() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState('todas');

  const tareasFiltradas =
    filtro === 'pendientes'
      ? tareas.filter((t) => !t.completada)
      : filtro === 'completadas'
        ? tareas.filter((t) => t.completada)
        : tareas;

  const filtros = [
    { key: 'todas', label: 'Todas', icon: '📋' },
    { key: 'pendientes', label: 'Pendientes', icon: '⏳' },
    { key: 'completadas', label: 'Completadas', icon: '✅' },
  ];

  return (
    <>
      <div className="filtros">
        {filtros.map((f) => (
          <button
            key={f.key}
            className={`filtros__btn ${filtro === f.key ? 'filtros__btn--active' : ''}`}
            onClick={() => setFiltro(f.key)}
          >
            <span className="filtros__btn-icon">{f.icon}</span>
            {f.label}
            <span className="filtros__btn-count">
              {f.key === 'todas'
                ? tareas.length
                : f.key === 'pendientes'
                  ? tareas.filter((t) => !t.completada).length
                  : tareas.filter((t) => t.completada).length}
            </span>
          </button>
        ))}
      </div>

      <ListaTareas tareas={tareasFiltradas} />
    </>
  );
}

export default Inicio;
