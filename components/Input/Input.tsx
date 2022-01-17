import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import s from './Input.module.scss';
import { InputStyleType, Color } from '../../types/classnameTypes';
import { ICryptoList } from '../../types/investTypes';

const cx = classNames.bind(s);

type inputType = 'text' | 'number' | 'password' | 'email' | 'tel';

interface InputProps<T> {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  label: string;
  name: string;
  value: string | number;
  type?: inputType;
  styleType: InputStyleType;
  isLabelHidden?: boolean;
  isAutocomplete?: boolean;
  list?: ICryptoList[];
  setChoosedAsset?(e: string): void;
  setClickedValue?(e: string): void;
  theme: Color;
  extraClass?: string;
  extraWrapperClass?: string;
  rest?: T[];
}

function Input<T>({
  onChange,
  placeholder,
  label,
  name,
  value,
  type = 'text',
  styleType,
  isLabelHidden = false,
  isAutocomplete = false,
  list,
  setChoosedAsset,
  setClickedValue,
  theme,
  extraClass,
  extraWrapperClass,
  ...rest
}: InputProps<T>) {
  const [suggestions, setSuggestions] = useState<ICryptoList[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (isAutocomplete) {
      let matches: ICryptoList[] = [];
      if (e.target.value.length > 0 && list) {
        matches = list.filter(asset => {
          const regex = new RegExp(`${e.target.value}`, 'gi');
          return asset.name.match(regex) || asset.symbol.match(regex);
        });
      }
      setSuggestions(matches);
      if (setClickedValue) {
        setClickedValue(e.target.value);
      }
      return;
    }
    onChange(e);
  }

  function onSuggestHandler(item: object) {
    if (setClickedValue) {
      setChoosedAsset(item);
      setClickedValue(item.name);
    }
    setSuggestions([]);
  }

  const combinedClassesWrapper = classNames(
    s.wrapper,
    s[styleType],
    extraWrapperClass,
  );
  const combinedClassesLabel = classNames(
    s.label,
    s[styleType],
    s[theme],
    extraClass,
  );
  const combinedClassesInput = classNames(
    s.input,
    s[styleType],
    s[theme],
    extraClass,
  );

  return (
    <div className={combinedClassesWrapper}>
      <label
        className={cx(combinedClassesLabel, {
          notEmpty:
            typeof value === 'string' ? value?.length !== 0 : value !== 0,
          hiddenLabel: isLabelHidden,
        })}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={combinedClassesInput}
        onChange={handleChange}
        value={value}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 300);
        }}
        type={type}
        id={name}
        name={name}
        autoComplete="off"
        placeholder={placeholder}
      />
      {suggestions?.length > 0 && (
        <div className={cx(s.autocompleteWrapper, {})}>
          <ul className={s.autocompleteList}>
            {suggestions.map((item, i) => {
              return (
                <li
                  className={s.autocompleteItem}
                  key={i}
                  onClick={() => onSuggestHandler(item)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Input;
