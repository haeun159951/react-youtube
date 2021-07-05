import './css/NavMenu.css';
import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    <nav>
      <img className='logo' src='../assets/logo.png' alt='' />
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/myPlaylist'>My PlayList</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavMenu;
