import { FC } from 'react';
import Button from '../../components/Button';
import styles from './ButtonPage.module.scss';
import AcUnitIcon from '@mui/icons-material/AcUnit';

interface ButtonPageProps {}

const ButtonPage: FC<ButtonPageProps> = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Button
            as="button"
            size="medium"
            view="outlined"
            color="mainDark"
            disabled={false}
            animation="mouseRipple"
            isFlex={true}
          >
            Button
            <AcUnitIcon />
          </Button>
        </li>
        <li className={styles.listItem}>
          <Button
            as="button"
            size="medium"
            view="contained"
            color="mainLight"
            disabled={false}
            animation="rippleCenter"
          >
            Button
          </Button>
        </li>
        <li className={styles.listItem}>
          <Button
            as="button"
            size="medium"
            view="transparent"
            color="mainLight"
            disabled={false}
            animation="rippleCenter"
          >
            Button
          </Button>
        </li>
        <li className={styles.listItem}>
          <Button
            as="button"
            size="medium"
            view="transparent"
            color="mainDark"
            disabled={false}
            animation="scaleUp"
          >
            Button
          </Button>
        </li>
      </ul>
      {/* <div className={styles.colors}>
        <ul>
          <li style={{ width: '200px', height: '50px', background: '#eceff1' }}>
            superLight
          </li>
          <li style={{ width: '200px', height: '50px', background: '#b0bec5' }}>
            light
          </li>
          <li style={{ width: '200px', height: '50px', background: '#78909c' }}>
            medium
          </li>
          <li style={{ width: '200px', height: '50px', background: '#455a64' }}>
            main
          </li>
          <li style={{ width: '200px', height: '50px', background: '#37474f' }}>
            dark
          </li>
          <li style={{ width: '200px', height: '50px', background: '#263238' }}>
            darkest
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default ButtonPage;
