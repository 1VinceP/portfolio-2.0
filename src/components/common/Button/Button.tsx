import { ReactNode } from 'react';
import $styles from './button.module.css';

interface Props {
   onClick?: () => void;
   children: ReactNode;
   style?: object;
}

function Button({ onClick, children, style }: Props) {
   return (
      <button className={$styles.button} onClick={onClick} style={style}>
         {children}
      </button>
   )
}

export default Button;
