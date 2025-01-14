import { Experience } from './Experience';
import projectsData from '../../data/projects.json';
import Project from './Project/Project';
import $styles from './projects.module.css';

function Projects() {
   const projects = projectsData.map((project, i) => (
      <Project key={i} project={project} reverse={i % 2 !== 0} />
   ));

   return (
      <div className={$styles.projects}>
         <h1>Work Experience</h1>
         <Experience />

         <h1 className={$styles['projects-header']}>Own Projects</h1>
         {projects}
      </div>
   );
}

export default Projects;
