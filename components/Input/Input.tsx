import React from 'react';
import classNames from 'classnames/bind';
import s from './Input.module.scss';
import { InputType, Color } from '../../types/classnameTypes';

const cx = classNames.bind(s);

interface InputProps<T> {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  label: string;
  name: string;
  value: string;
  type: InputType;
  theme: Color;
  extraClass?: string;
  rest?: T[];
}

function Input<T>({
  onChange,
  name,
  label,
  value,
  theme,
  type,
  extraClass,
}: InputProps<T>) {
  const combinedClassesWrapper = classNames(s.wrapper, s[type], extraClass);
  const combinedClassesLabel = classNames(
    s.label,
    s[type],
    s[theme],
    extraClass,
  );
  const combinedClassesInput = classNames(
    s.input,
    s[type],
    s[theme],
    extraClass,
  );
  console.log(value);

  return (
    <div className={combinedClassesWrapper}>
      <label
        className={cx(combinedClassesLabel, {
          notEmpty: value?.length !== 0,
        })}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={combinedClassesInput}
        onChange={onChange}
        value={value}
        type="text"
        id={name}
        autoComplete="off"
        name={name}
      />
    </div>
  );
}

export default Input;
