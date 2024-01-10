import { NavLink } from 'react-router-dom';
import styles from './VisibilityToolbar.module.css';

const VisibilityToolbar = () => {
  const linkStyle = 'navlink ';
  const activeLinkStyle = linkStyle + 'navlink-active';
  return (
    <div className={styles['navlink-group']}>
      <NavLink to="/" className={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
        ALL
      </NavLink>
      <NavLink to="/active" className={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
        ACTIVE
      </NavLink>
      <NavLink to="/completed" className={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
        COMPLETED
      </NavLink>
    </div>
  );
};

VisibilityToolbar.propTypes = {};

export default VisibilityToolbar;
