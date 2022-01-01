import s from './IconButton.module.scss';
import classNames from 'classnames/bind';
import { Size, IconButtonColor } from '../../types/classnameTypes';

const cx = classNames.bind(s);

interface IconButtonProps {
  theme?: IconButtonColor;
  size?: Size;
  rounded?: boolean;
  children: React.ReactChild | React.ReactNode;
  onClick?(): void;
  extraClass?: string;
}

function IconButton({
  theme = 'mainLight',
  size = 'medium',
  rounded = false,
  children,
  onClick,
  extraClass,
}: IconButtonProps) {
  const combinedButtonClasses = classNames(
    s.button,
    s[theme],
    s[size],
    extraClass,
  );
  return (
    <button
      onClick={onClick}
      type="button"
      className={cx(combinedButtonClasses, {
        rounded,
      })}
    >
      {children}
    </button>
  );
}

export default IconButton;
