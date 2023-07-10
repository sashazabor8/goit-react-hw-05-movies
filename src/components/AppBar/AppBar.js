import s from './AppBar.module.css';
import Navigation from 'components/Navigation';

function AppBar() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}

export default AppBar;
