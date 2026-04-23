import { createContext, useContext, useState, useEffect } from 'react';
import { tareasIniciales } from '../data/tareas';

const TareasContext = createContext();

export function TareasProvider({ children }) {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas');
    return guardadas ? JSON.parse(guardadas) : tareasIniciales;
  });

  // Persistencia: guardar en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  function toggleTarea(id) {
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  }

  function agregarTarea({ titulo, materia, fecha }) {
    const nueva = {
      id: Date.now(),
      titulo,
      materia,
      fecha,
      completada: false,
    };
    setTareas((prev) => [nueva, ...prev]);
  }

  function eliminarTarea(id) {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  }

  const pendientes = tareas.filter((t) => !t.completada).length;

  return (
    <TareasContext.Provider
      value={{ tareas, pendientes, toggleTarea, agregarTarea, eliminarTarea }}
    >
      {children}
    </TareasContext.Provider>
  );
}

export function useTareas() {
  const ctx = useContext(TareasContext);
  if (!ctx) throw new Error('useTareas debe usarse dentro de TareasProvider');
  return ctx;
}
