import { linkedIn, github } from '../../data/links';
import $styles from './footer.module.css'

function Footer() {
   return (
      <div className={$styles.footer}>
         <span>&copy; 2025 Vincent Palmer</span>
         <span>|</span>
         <a href={linkedIn} target="_blank" className="link-base">LinkedIn</a>
         <span>|</span>
         <a href={github} target="_blank" className="link-base">Github</a>
      </div>
   );
}

export default Footer;
