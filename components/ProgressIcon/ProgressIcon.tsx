import { BsBook, BsBookHalf, BsBookFill } from 'react-icons/bs';
import classNames from 'classnames/bind';
import s from './ProgressIcon.module.scss';

const cx = classNames.bind(s);

interface IProgressIconProps {
  trainingsCompleteAmount: number;
}

export default function ProgressIcon({
  trainingsCompleteAmount,
}: IProgressIconProps) {
  return (
    <>
      <div
        className={cx(s.border, {
          stage0: trainingsCompleteAmount === 0,
          stage1: trainingsCompleteAmount === 1,
          stage2: trainingsCompleteAmount === 2,
          stage3: trainingsCompleteAmount === 3,
          stage4: trainingsCompleteAmount === 4,
        })}
      >
        <div className={cx(s.setSize, s.chartsContainer)}>
          <div
            className={cx(s.pieWrapper, s.pieWrapperSolid, {
              progress0: trainingsCompleteAmount === 0,
              progress25: trainingsCompleteAmount === 1,
              progress50: trainingsCompleteAmount === 2,
              progress75: trainingsCompleteAmount === 3,
              progress100: trainingsCompleteAmount === 4,
            })}
          >
            <span className={cx(s.label)}>
              {trainingsCompleteAmount === 0 && <BsBook />}
              {(trainingsCompleteAmount === 1 ||
                trainingsCompleteAmount === 2 ||
                trainingsCompleteAmount === 3) && <BsBookHalf />}
              {trainingsCompleteAmount === 4 && <BsBookFill />}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
