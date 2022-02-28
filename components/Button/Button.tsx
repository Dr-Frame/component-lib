import { FC, useRef, useState } from 'react';
import {
  ButtonType,
  ButtonView,
  ButtonAnimationType,
  Color,
  Size,
} from '../../types/classnameTypes';
import classNames from 'classnames/bind';
import s from './Button.module.scss';
import creteRippleEffect from '../../utils/rippleEffectCreator';

const cx = classNames.bind(s);

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
  onClick?(e: any): void;
  as: RootComponent;
  extraClass?: string;
  children: React.ReactChild | React.ReactNode;
  rest?: T[];
  tooltip?: boolean;
  tooltipText?: string;
  tooltipSide?: 'left' | 'top' | 'bottom' | 'right';
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
  tooltip = false,
  tooltipSide,
  tooltipText,
  ...rest
}: ButtonProps<T>) {
  const combinedClasses = classNames(
    s.button,
    s[view],
    s[color],
    s[size],
    s[animation],
    extraClass,
  );

  const [isMouseRippleAnimation] = useState(animation === 'mouseRipple');

  const circle = useRef() as React.MutableRefObject<HTMLSpanElement>;

  return (
    <RootComponent
      className={cx(combinedClasses, {
        isFlex,
        uppercase,
        disabled,
      })}
      type={type}
      disabled={disabled}
      onClick={
        isMouseRippleAnimation
          ? e => {
              onClick && onClick(e);
              circle.current
                ? creteRippleEffect(e, circle.current, s[animation])
                : null;
            }
          : onClick
      }
    >
      {children}
      {isMouseRippleAnimation && (
        <span className={s.ripple} ref={circle}></span>
      )}
      {tooltip && (
        <span className={cx(s.tooltipText, tooltipSide)}>{tooltipText}</span>
      )}
    </RootComponent>
  );
}

export default Button;
