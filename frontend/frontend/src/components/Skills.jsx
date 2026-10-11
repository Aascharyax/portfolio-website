import { site } from '../data/site.js';
import { skillIcons } from '../data/icons.js';

function Skills() {
  return (
    <ul className="skills rise" style={{ '--d': '0.45s' }} aria-label="Skills">
      {site.skills.map((name) => {
        const icon = skillIcons[name];
        return (
          <li className="skill" key={name} style={icon ? { '--brand': icon.brand } : undefined}>
            {icon && (
              <svg className="skill__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={icon.path} fill="currentColor" />
              </svg>
            )}
            <span className="skill__name">{name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Skills;
