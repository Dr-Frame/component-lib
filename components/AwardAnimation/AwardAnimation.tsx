import s from './AwardAnimation.module.scss';
import { BsStarFill } from 'react-icons/bs';
import { motion, useAnimation } from 'framer-motion';
import { GiTrophyCup } from 'react-icons/gi';
import { useEffect } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cx = classNames.bind(s);

interface IAwardAnimationProps {
  place: number;
  totalQuesedWords: number;
  listLength: number;
}

export default function AwardAnimation({
  place,
  totalQuesedWords,
  listLength,
}: IAwardAnimationProps) {
  let starsAmount = 30;
  let starsArr = new Array(starsAmount).fill(1);

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getRandomFloat(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const animation = useAnimation();

  async function sequince() {
    await animation.start({
      opacity: [0, 1],
      scale: [0.5, 2, 1],
    });
    await animation.start({ rotate: [0, 40, -40, 0] });
  }

  async function trophy() {
    await animation.start({
      rotate: [0, 40, -40, 0],
    });
  }

  useEffect(() => {
    sequince();
  }, []);

  const duration = 0.3;

  const placeColors = {
    1: ['rgb(255, 185, 35)', 'rgb(255, 174, 0)'],
    2: ['rgb(128, 128, 128)', 'rgb(150, 150, 150)'],
    3: ['rgb(205, 127, 50)', 'rgb(177, 111, 45)'],
  };

  function getDelay(place: number) {
    const possibleSequence = [
      [0, 0.6, 0.3],
      [0, 0.3, 0.6],
      [0.6, 0, 0.3],
    ];
    return possibleSequence[place - 1];
  }

  return (
    <div className={s.congratsWrapper}>
      <h1 className={s.awardText}>Congradulations!</h1>
      {place && totalQuesedWords && (
        <>
          <div className={s.congrats}>
            <div className={s.trophyWrapper}>
              {starsArr.map((_, i) => {
                return (
                  <motion.div
                    key={i}
                    className={cx(s.blob, {
                      bronze: place === 3,
                      silver: place === 2,
                      gold: place === 1,
                    })}
                    animate={{
                      x: [0, getRandomInt(-300, 300)],
                      y: [0, getRandomInt(-100, 300)],
                      translateX: '-50%',
                      scale: [
                        getRandomFloat(0.3, 1.6),
                        getRandomFloat(0.3, 1.6),
                      ],
                      rotate: -360,
                      opacity: [0, 1, 0],
                      color: placeColors[place],
                      backgroundColor: ['transparent', 'transparent'],
                      transitionEnd: {
                        display: 'none',
                      },
                    }}
                    transition={{
                      delay: 1.8,
                      duration: 1.8,
                      ease: 'easeOut',
                      repeat: 1,
                    }}
                  >
                    <BsStarFill />
                  </motion.div>
                );
              })}
              <motion.div
                className={s.trophy}
                onTap={trophy}
                animate={animation}
                transition={{
                  duration: duration,
                  delay: getDelay(place)[0],
                }}
              >
                {place === 3 && <p className={s.number}>3</p>}
                <GiTrophyCup
                  className={cx(s.bronzeIcon, {
                    inActive: place !== 3,
                  })}
                />
              </motion.div>
              <motion.div
                onTap={trophy}
                className={s.trophy}
                animate={animation}
                transition={{
                  duration: duration,
                  delay: getDelay(place)[1],
                }}
              >
                {place === 1 && <p className={s.number}>1</p>}

                <GiTrophyCup
                  className={cx(s.goldIcon, {
                    inActive: place !== 1,
                  })}
                />
              </motion.div>
              <motion.div
                className={s.trophy}
                animate={animation}
                onTap={trophy}
                transition={{
                  duration: duration,
                  delay: getDelay(place)[2],
                }}
              >
                {place === 2 && <p className={s.number}>2</p>}
                <GiTrophyCup
                  className={cx(s.silverIcon, {
                    inActive: place !== 2,
                  })}
                />
              </motion.div>
            </div>
          </div>
          <p className={s.quessed}>
            {totalQuesedWords}/{listLength} guessed words!
          </p>
          <p className={s.success}>You successfuly passed a training!</p>
          <p className={s.success}>You got {place} place trophy reward!</p>

          <Link href="/dictionary">
            <a className={s.homeLink}>Go to the dictionary</a>
          </Link>
        </>
      )}
    </div>
  );
}
