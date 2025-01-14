import $styles from './skills.module.css';

export interface ISkill {
   title: string;
   icon?: string;
   skills?: string[];
}

interface Props {
   skill: ISkill;
}

function Skill({ skill }: Props) {
   return (
      <div className={$styles.skill}>
         <div className={$styles['skill-title']}>
            {skill.icon && <img src={skill.icon} />}
            {skill.title}
         </div>
         {skill.skills && (
            <div className={$styles['sub-skills']}>{skill.skills.join(' | ')}</div>
         )}
      </div>
   );
}

export default Skill;
