import s from './Tooltip.module.scss';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';

const cx = classNames.bind(s);

interface ITooltipProps {
  side: 'left' | 'top' | 'bottom' | 'right';
  text: string;
  children: ReactNode;
  extraClass?: string;
}

export default function Tooltip({
  side,
  text,
  children,
  extraClass,
}: ITooltipProps) {
  return (
    <div className={cx(s.tooltip, side, extraClass)}>
      {children}
      <span className={cx(s.tooltipText, side)}>{text}</span>
    </div>
  );
}
