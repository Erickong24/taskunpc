import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTareas } from '../context/TareasContext';
import './NuevaTarea.css';

function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();

  const [form, setForm] = useState({ titulo: '', materia: '', fecha: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    agregarTarea(form);
    navigate('/');
  }

  const camposCompletos = form.titulo && form.materia && form.fecha;

  return (
    <div className="nueva-tarea">
      <div className="nueva-tarea__header">
        <button className="nueva-tarea__back" onClick={() => navigate('/')}>
          ← Volver
        </button>
        <h2 className="nueva-tarea__title">Nueva Tarea</h2>
        <p className="nueva-tarea__subtitle">Agrega una tarea a tu gestor académico</p>
      </div>

      <form className="nueva-tarea__form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo" className="form-group__label">
            📝 Título
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Ej: Parcial de Cálculo"
            className="form-group__input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="materia" className="form-group__label">
            📚 Materia
          </label>
          <input
            type="text"
            id="materia"
            name="materia"
            value={form.materia}
            onChange={handleChange}
            placeholder="Ej: Matemáticas"
            className="form-group__input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fecha" className="form-group__label">
            📅 Fecha de entrega
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            className="form-group__input"
            required
          />
        </div>

        <button
          type="submit"
          className="nueva-tarea__submit"
          disabled={!camposCompletos}
        >
          Agregar Tarea
        </button>
      </form>
    </div>
  );
}

export default NuevaTarea;
