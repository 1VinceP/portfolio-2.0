import c from 'classnames';
import skillData from '../../../data/skills.json';
import SkillGroup from './SkillGroup';
import $styles from './skills.module.css';

function Skills() {
   const skillGroups = skillData.map(group => (
      <SkillGroup key={group.title} skills={group.skills} />
   ));

   return (
      <section className={c('no-select', $styles.skills)}>
         {skillGroups}
      </section>
   );
}

export default Skills;
