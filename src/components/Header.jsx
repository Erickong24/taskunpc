import './Header.css';

function Header({ pendientes }) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <span className="header__icon">🎓</span>
          <h1 className="header__title">TaskUNPC</h1>
          <span className="header__subtitle">Gestor Académico</span>
        </div>

        <div className="header__stats">
          <div className="header__badge">
            <span className="header__badge-count">{pendientes}</span>
            <span className="header__badge-label">
              {pendientes === 1 ? 'tarea pendiente' : 'tareas pendientes'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
