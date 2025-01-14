import c from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import $styles from './project.module.css';

interface IProject {
   title: string;
   role: string;
   url: string;
   dates: string;
   images: string[];
   details: string[];
   technologies: string[];
}

interface Props {
   project: IProject;
   reverse?: boolean;
}

function Project({ project, reverse }: Props) {
   const details = project.details?.map((line, i) => <p key={i}>{line}</p>);
   const images = project.images?.map((image, i) => (
      <img key={i} src={image} />
   ));

   return (
      <div className={c($styles.project, { [$styles.reverse]: reverse })}>
         <a
            href={project.url}
            target="_blank"
            className={$styles.info}
         >
            <div className={c($styles.row, $styles.head)}>
               <div className={$styles.title}>{project.title} | <span className={$styles.url}>{project.url}</span></div>
               <div>{project.technologies.join(' | ')}</div>
            </div>
            <div className={$styles.row}>
               <div>{project.role}</div>
               <div>{project.dates}</div>
            </div>
            <div className={$styles.details}>
               {details}
            </div>
         </a>

         <div className={$styles.images}>
            <Carousel showThumbs={false} infiniteLoop>
               {images}
            </Carousel>
         </div>
      </div>
   );
}

export default Project;
