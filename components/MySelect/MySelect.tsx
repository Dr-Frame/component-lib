import s from './MySelect.module.scss';
import classNames from 'classnames/bind';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { Color } from '../../types/classnameTypes';
import { ICategory } from '../../types/investTypes';

const cx = classNames.bind(s);

interface ISelectProps {
  list: ICategory[];
  label: string;
  selected: string;
  setSelected(arg: ICategory): void;
  theme?: Color;
  animated?: boolean;
  padding?: boolean | string;
  extraClass?: string;
  extraBorderClass: string;
}

function MySelect({
  list,
  label,
  selected,
  setSelected,
  theme = 'mainLight',
  animated = false,
  padding = true,
  extraClass,
  extraBorderClass,
}: ISelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const combinedSelectClasses = classNames(s.select, extraClass);
  const combinedLabelWrapper = classNames(
    s.labelWrapper,
    s[theme],
    extraBorderClass,
  );
  return (
    <div
      className={cx(combinedSelectClasses)}
      onClick={list ? () => setIsOpen(!isOpen) : () => setIsOpen(false)}
      id="select"
    >
      <div
        style={typeof padding === 'string' ? { padding } : null}
        className={cx(combinedLabelWrapper, {
          disabled: !list,
          withPadding: padding,
          noPadding: !padding,
          deviderCenter: typeof padding === 'string',
        })}
      >
        <div
          className={cx(s.label, s[theme], {
            animated: (animated && isOpen) || (animated && selected),
            hidden: selected && !animated,
            isOpen: animated && isOpen,
          })}
        >
          {label ? label : 'Select'}
        </div>
        <div className={cx(s.selectedValue, s[theme], { noPadding: !padding })}>
          {selected}
        </div>
        <div
          className={cx(s.icon, s[theme], {
            iconDown: isOpen,
            disabled: !list,
          })}
        >
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
      <div
        className={cx(s.list, s[theme], {
          isOpen,
        })}
      >
        {list &&
          list.map((item, i) => {
            return (
              <div
                className={cx(s.listItem, s[theme])}
                key={i}
                onClick={() => {
                  setSelected(item), setIsOpen(false);
                }}
              >
                {item.label}
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default MySelect;
