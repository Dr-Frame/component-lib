import classNames from 'classnames';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  text: string;
  state: boolean;
  changeState(state: boolean): void;
}

function Checkbox({
  text = '',
  state = false,
  changeState = () => {},
}: CheckboxProps) {
  const checkboxClassName = classNames({
    [styles.checkboxChecked]: state,
    [styles.checkbox]: !state,
  });

  const handler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changeState(!state);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handler} className={checkboxClassName}>
        {text}
      </button>
    </div>
  );
}

export default Checkbox;
