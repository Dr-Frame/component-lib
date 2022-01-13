import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styles from './Select.module.scss';

const cx = classNames.bind(styles);

interface SelectProps {
  label: string;
  items: string[];
  selected: string;
  setSelected(value: string): void;
}

function Select({ label, items, selected, setSelected }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.select}>
      <div
        className={cx('selectHeader', {
          disabled: !items,
          selected: isOpen || selected,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected ? selected : label}
        <MdOutlineKeyboardArrowDown
          className={cx('selectIcon', {
            isOpen: isOpen === true,
          })}
        />
      </div>
      <div
        className={cx('selectContent', {
          isOpen: isOpen === true,
        })}
      >
        {items &&
          items.map((item, i) => (
            <div
              key={item}
              className={styles.selectItem}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                setSelected(e.target.textContent);
                setIsOpen(false);
              }}
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Select;

/* interface ISelectProps {
  list: string[];
  label: string;
  placeholder: string;
  multiple?: boolean;
}

function Select({
  onClick,
  list,
  label,
  placeholder,
  multiple = false,
}: ISelectProps) {
  return (
    <div>
      select
      <label htmlFor={label}>{label}</label>
      <select
        placeholder={placeholder}
        name={label}
        id={label}
        multiple={multiple}
      >
        {list.map((item, i) => {
          return (
            <option selected key={i} value={item} onClick={e => onClick(e.target)}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select; */
