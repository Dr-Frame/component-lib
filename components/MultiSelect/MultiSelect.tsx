import Select, { components } from 'react-select';
import classNames from 'classnames';
import styles from './MultiSelect.module.scss';
import Checkbox from './Checkbox';
import variables from '../../styles/exportColorVars.module.scss';

interface IData {
  value: string;
  label: string;
}

interface MultiSelectProps<T> {
  data: IData[];
  value?: IData[];
  label: string;
  isMulti: boolean;
  isSearchable: boolean;
  minWidth?: string;
  maxWidth?: string;
  multiSelectType?: string;
  placeholderColor?: string;
  placeholderFontSize?: string;
  boxFontSize?: string;
  arrowColor?: string;
  rest?: T[];
}

const Option = props => (
  <div className={styles.optionVar}>
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
  label = 'район',
  isMulti,
  isSearchable,
  minWidth = '200px',
  maxWidth = '400px',
  multiSelectType,
  placeholderColor,
  placeholderFontSize,
  boxFontSize,
  arrowColor,
  ...rest
}: MultiSelectProps<T>) {
  const customStyle = {
    container: (base: object) => ({
      ...base,
      width: '100%',
    }),
    control: (base: object) => ({
      ...base,
      paddingRight: '2px',
      minHeight: '42px',
      borderColor: '#AFAFAF',
    }),
    placeholder: (base: object) => ({
      ...base,
      color: placeholderColor || '#737B7D',
      fontWeight: '400',
      fontSize: placeholderFontSize || '12px',
      lineHeight: '15px',
    }),
    valueContainer: (base: object) => ({
      ...base,
      padding: '5px',
    }),
    indicatorSeparator: (base: object) => ({
      ...base,
      backgroundColor: '#AFAFAF',
    }),
    multiValue: (base: object) => ({
      ...base,
      margin: '5px',
      borderRadius: '3px',
      padding: '3px 3px 3px 0',
      fontWeight: '400',
      fontSize: boxFontSize || '10px',
      lineHeight: '11px',
    }),
    menu: (base: object) => ({
      ...base,
      minWidth,
      maxWidth,
      zIndex: 4,
    }),
    option: (base: object) => ({
      ...base,
      padding: '0',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    }),
  };

  return (
    <>
      <Select
      options={data}
      theme={theme => ({
        ...theme,
        controlHeight: '42px',
        borderRadius: '3px',
        colors: {
          ...theme.colors,
          primary50: '#ffffff',
          primary75: '#ffffff',
          primary25: '#ffffff',
          primary: '#737B7D',
          neutral10: '#D0D0D0',
          neutral20: arrowColor || '#737B7D',
          dangerLight: '#D0D0D0',
        },
      })}
      styles={customStyle}
      isMulti={isMulti}
      isSearchable={isSearchable}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{ Option }}
      value={value}
      placeholder={'Не вибрано'}
      {...rest}
    />
    </>
    
  );
}

export default MultiSelect;
