import c from 'classnames';
import { Link } from 'react-router';
import { Skills } from './Skills';
import { Button } from '../../components/common';
import aboutData from '../../data/about.json';
import $styles from './home.module.css';

function Home() {
   return (
      <div className={$styles.home}>
         <div className={c($styles.hero, 'no-select')}>
            <div className={$styles.greeting}>
               <div>Hello,</div>
               <div>I'm Vincent</div>
               <div>Your full-stack web engineer.</div>
            </div>
            <div className={$styles['img-cite']}>Palmer, Alaska &copy; 2016 Vincent Palmer</div>
         </div>

         <Skills />

         <section className={$styles.intro}>
            <h1>{aboutData.motto}</h1>
            <p>{aboutData.intro}</p>

            <div className={$styles.links}>
               <Link to="/projects"><Button>My Experience and Projects</Button></Link>
               <Link to="/about"><Button>More About Myself</Button></Link>
               <Link to="/contact"><Button>Contact Me</Button></Link>
            </div>
         </section>
      </div>
   );
}

export default Home;
