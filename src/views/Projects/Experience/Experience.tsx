import { useState } from 'react';
import c from 'classnames';
import experienceData from '../../../data/experience.json';
import $styles from './experience.module.css';

interface IExperience {
   id: number;
   company: string;
   role: string;
   dates: string;
   image: string;
   background?: string;
   url: string;
   details: string[];
}

function Experience() {
   const [selectedJob, setSelectedJob] = useState<IExperience>(experienceData[0]);
   const details = selectedJob.details.map((par, i) => <p key={i}>{par}</p>);

   const jobList = experienceData.map(job => (
      <div
         key={job.id}
         className={c($styles.job, { [$styles.selected]: selectedJob.id === job.id })}
         onClick={() => setSelectedJob(job)}
      >
         <div>{job.company}</div>
         <div className={$styles.dates}>{job.dates}</div>
      </div>
   ));

   return (
      <div className={$styles.experience}>
         <div className={c('no-select', $styles['job-list'])}>{jobList}</div>

         <div className={$styles['job-info']}>
            <div className={$styles.image} style={{ background: selectedJob.background}}>
               <img src={selectedJob.image} />
            </div>

            <a
               href={selectedJob.url}
               target="_blank"
               className={$styles['details-wrapper']}
            >
               <div className={c($styles.row, $styles.title)}>
                  <div>
                     {selectedJob.company} | <span className={$styles.url}>{selectedJob.url}</span>
                  </div>
                  <div>{selectedJob.dates}</div>
               </div>

               <div className={$styles.row}>
                  <div>{selectedJob.role}</div>
               </div>

               <div className={$styles.details}>
                  {details}
               </div>
            </a>
         </div>
      </div>
   );
}

export default Experience;
