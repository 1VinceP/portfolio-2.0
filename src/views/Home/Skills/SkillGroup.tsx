import $styles from './skills.module.css';
import Skill, { type ISkill } from './Skill';

interface Props {
   skills: ISkill[];
}

function SkillGroup({ skills }: Props) {
   const mapSkills = skills.map(skill => (
      <Skill key={skill.title} skill={skill} />
   ));

   return (
      <div className={$styles['skill-group']}>
         {mapSkills}
      </div>
   );
}

export default SkillGroup;
