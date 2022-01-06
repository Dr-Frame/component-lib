import Select, { components } from 'react-select';
import classNames from 'classnames/bind';
import s from './MultiSelect.module.scss';
import Checkbox from './Checkbox';
import color from '../../styles/exportColorVars.module.scss';

const cx = classNames.bind(s);

interface IData {
  id?: number;
  value: string;
  label: string;
}

interface MultiSelectProps<T> {
  data: IData[];
  value?: IData[];
  label: string;
  isMulti: boolean;
  onChange(e: any): void;
  selectedOption?: string | number;
  isSearchable: boolean;
  placeholder?: string;
  minWidth?: string;
  maxWidth?: string;
  placeholderColor?: string;
  placeholderFontSize?: string;
  boxFontSize?: string;
  arrowColor?: string;
  borderThickness?: string;
  borderColor?: string;
  isLabelHidden?: boolean;
  innerPading?: string;
  rest?: T[];
}

const Option = props => (
  <div className={s.optionVar}>
    <components.Option {...props}>
      <Checkbox
        state={props.isSelected}
        text={props.label}
        changeState={() => null}
      />
    </components.Option>
  </div>
);

function MultiSelect<T>({
  data,
  value,
  label = 'label',
  isMulti,
  onChange,
  selectedOption,
  isSearchable,
  placeholder,
  minWidth = '140px',
  maxWidth,
  placeholderColor,
  placeholderFontSize,
  boxFontSize,
  borderThickness,
  borderColor,
  arrowColor,
  isLabelHidden,
  innerPading,
  ...rest
}: MultiSelectProps<T>) {
  const customStyle = {
    container: (base: object) => ({
      ...base,
      maxWidth,
      minWidth,
    }),
    control: (base: object) => ({
      ...base,
      border: `${borderThickness} solid ${color.colorLightMainTheme}`,
      /* paddingRight: '2px', */
      /*  minHeight: '52px', */
    }),
    placeholder: (base: object) => ({
      ...base,
      color: placeholderColor || color.colorLightMainTheme,
      fontWeight: '400',
      fontSize: placeholderFontSize || '16px',
      /* lineHeight: '15px', */
    }),
    valueContainer: (base: object) => ({
      ...base,
      padding: innerPading || '11px 12px',
    }),
    indicatorSeparator: (base: object) => ({
      ...base,
      backgroundColor: color.colorMediumMainTheme,
    }),
    multiValue: (base: object) => ({
      ...base,
      margin: '5px',
      borderRadius: '3px',
      padding: '3px 3px 3px 0',
      fontWeight: '400',
      fontSize: boxFontSize || '13px',
      /* lineHeight: '11px', */
    }),
    menu: (base: object) => ({
      ...base,
      zIndex: 4,
    }),
    option: (base: object) => ({
      ...base,
      padding: '0',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: color.white,
    }),
  };

  return (
    <div className={s.selectWrapper}>
      <p
        className={cx(s.label, {
          active: selectedOption,
          isLabelHidden,
        })}
      >
        {label}
      </p>
      <div /* className={s.selectWrapper} */>
        <Select
          options={data}
          theme={theme => ({
            ...theme,
            controlHeight: '42px',
            borderRadius: '3px',
            colors: {
              ...theme.colors,
              primary50: color.white,
              primary75: color.white,
              primary25: color.white,
              primary: color.colorMainMainTheme,
              neutral10: color.colorLightMainTheme,
              neutral20: arrowColor || color.colorMediumMainTheme,
              dangerLight: color.colorLightMainTheme,
            },
          })}
          styles={customStyle}
          isMulti={isMulti}
          isSearchable={isSearchable}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{ Option }}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
}

export default MultiSelect;
