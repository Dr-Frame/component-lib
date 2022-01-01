import { FC, useRef, useState } from 'react';
import {
  ButtonType,
  ButtonView,
  ButtonAnimationType,
  Color,
  Size,
} from '../../types/classnameTypes';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import creteRippleEffect from '../../utils/rippleEffectCreator';

const cx = classNames.bind(styles);

type RootComponent = 'button' | 'link';

interface ButtonProps<T> {
  type?: ButtonType;
  view?: ButtonView;
  color?: Color;
  size?: Size;
  animation?: ButtonAnimationType;
  disabled?: boolean;
  isFlex?: boolean;
  uppercase?: boolean;
  onClick?(e: any): void | any;
  as: RootComponent;
  extraClass?: string;
  children: React.ReactChild | React.ReactNode;
  rest?: T[];
}

function Button<T>({
  as: RootComponent,
  type = 'button',
  view = 'outlined',
  color = 'mainLight',
  size = 'medium',
  disabled = false,
  animation = 'none',
  isFlex = false,
  uppercase = false,
  onClick,
  children,
  extraClass,
  ...rest
}: ButtonProps<T>) {
  const combinedClasses = classNames(
    styles.button,
    styles[view],
    styles[color],
    styles[size],
    styles[animation],
    extraClass,
  );

  const [isMouseRippleAnimation] = useState(animation === 'mouseRipple');

  const circle = useRef() as React.MutableRefObject<HTMLSpanElement>;

  return (
    <RootComponent
      className={cx(combinedClasses, {
        isFlex,
        uppercase,
      })}
      type={type}
      disabled={disabled}
      onClick={
        isMouseRippleAnimation
          ? e => {
              onClick && onClick(e);
              circle.current
                ? creteRippleEffect(e, circle.current, styles[animation])
                : null;
            }
          : onClick
      }
    >
      {children}
      {isMouseRippleAnimation && (
        <span className={styles.ripple} ref={circle}></span>
      )}
    </RootComponent>
  );
}

export default Button;
