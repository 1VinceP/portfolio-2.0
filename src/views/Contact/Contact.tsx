import c from 'classnames';
import { github, linkedIn } from '../../data/links';
import $styles from './contact.module.css';

function Contact() {
   return (
      <div className={$styles.contact}>
         <div className={$styles.row}>
            <a href={linkedIn} target="_blank" className={c($styles.col, 'link-base')}>
               <img src="/icons/linkedin.svg" />
               <p>Message me directly on LinkedIn!</p>
               <p>{linkedIn}</p>
            </a>

            <a href={github} target="_blank" className={c($styles.col, 'link-base')}>
               <img src="/icons/github.svg" />
               <p>Create a pull request or an issue to get my attention on GitHub!</p>
               <p>{github}</p>
            </a>
         </div>
      </div>
   );
}

export default Contact;
