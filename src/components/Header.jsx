import { Link } from 'react-router-dom';
import { useTareas } from '../context/TareasContext';
import './Header.css';

function Header() {
  const { pendientes } = useTareas();

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand">
          <span className="header__icon">🎓</span>
          <div>
            <h1 className="header__title">TaskUNPC</h1>
            <span className="header__subtitle">Gestor Académico</span>
          </div>
        </Link>

        <div className="header__actions">
          <div className="header__badge">
            <span className="header__badge-count">{pendientes}</span>
            <span className="header__badge-label">
              {pendientes === 1 ? 'pendiente' : 'pendientes'}
            </span>
          </div>

          <Link to="/nueva" className="header__btn-new" title="Agregar tarea">
            + Nueva
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
