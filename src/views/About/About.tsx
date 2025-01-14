import aboutData from '../../data/about.json';
import $styles from './about.module.css';

const createParagraphs = (data: string[]) => data.map((par, i) => (
   <p key={i}>{par}</p>
));

function About() {
   return (
      <div className={$styles.about}>
         <div className={$styles.headshot} />

         <h1 className={$styles.motto}>{aboutData.motto}</h1>

         <div className={$styles['info-container']}>
            <div className={$styles.section}>
               <p>{aboutData.intro}</p>
            </div>

            <div className={$styles.section}>
               <h1>I'm Sure You're Interested in My Career...</h1>
               {createParagraphs(aboutData.career)}
            </div>

            <div className={$styles.section}>
               <h1>...And Here's a Bit About Me</h1>
               {createParagraphs(aboutData.life)}
            </div>
         </div>
      </div>
   );
}

export default About;
