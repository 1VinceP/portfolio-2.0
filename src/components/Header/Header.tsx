import { Link } from 'react-router';
import $styles from './header.module.css';

function Header() {
   return (
      <div className={$styles.header}>
         <Link to="/" className="link-base" style={{ fontWeight: 500 }}>
            Vincent Palmer
         </Link>
         <nav className={$styles.links}>
            <Link to='/' className="link-base hide-mobile">Home</Link>
            <Link to='/projects' className="link-base">Experience / Projects</Link>
            <Link to="/about" className="link-base">About Me</Link>
            <Link to="/contact" className="link-base">Contact</Link>
         </nav>
      </div>
   );
}

export default Header;
