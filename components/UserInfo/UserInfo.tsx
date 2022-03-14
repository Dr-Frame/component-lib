import s from './UserInfo.module.scss';
import { FaUserAstronaut } from 'react-icons/fa';
import { userExpApi } from '../../services/DictionaryService';
import level from '../../utils/levelExp';
import { useEffect, useState } from 'react';
import { IUser } from '../../types/dictionaryTypes';
import { GiRank1, GiRank2, GiRank3 } from 'react-icons/gi';
import getLevelAndExp from '../../utils/calculateExpLevel';

export default function UserInfo() {
  const [user, setUser] = useState<IUser | null>(null);
  const [totalLevelExp, setTotalLevelExp] = useState(0);
  const [prevLvlExp, setPrevLvlExp] = useState(0);
  const { data: userData } = userExpApi.useGetUserExpQuery(null);

  useEffect(() => {
    if (userData) {
      setUser({ ...userData });
    }
  }, [userData]);

  useEffect(() => {
    const exp = level.find(item => item.lvl === user?.lvl)?.exp;
    if (exp) {
      setTotalLevelExp(exp);
    }
    const prevExp = level.find(item => item.lvl === user?.lvl - 1)?.exp;
    if (prevExp) {
      setPrevLvlExp(prevExp);
    }
  }, [user]);

  return (
    <div className={s.wrapper}>
      {user && (
        <>
          <div className={s.userData}>
            <div className={s.dataWrapper}>
              <div className={s.iconWrapper}>
                <FaUserAstronaut className={s.userIcon} />
              </div>
              <p className={s.userName}>{user.name}</p>
            </div>

            <div className={s.rankWrapper}>
              <p className={s.userLvl}>{user.lvl}</p>
              <div className={s.rankIcon}>
                {(user.lvl === 1 || user.lvl === 2 || user.lvl === 3) && (
                  <GiRank1 className={s.rank} />
                )}
                {(user.lvl === 4 || user.lvl === 5 || user.lvl === 6) && (
                  <GiRank2 className={s.rank} />
                )}
                {(user.lvl === 7 || user.lvl === 8 || user.lvl === 9) && (
                  <GiRank3 className={s.rank} />
                )}
              </div>
            </div>
          </div>

          <div className={s.expWrapper}>
            <div
              className={s.yourExp}
              style={{
                width: `${
                  ((user.exp - prevLvlExp) / (totalLevelExp - prevLvlExp)) * 100
                }%`,
              }}
            ></div>
            <div className={s.expLeft} style={{ width: `${100}%` }}></div>
            <p className={s.expText}>{`${user.exp}/${totalLevelExp}`}</p>
          </div>
        </>
      )}
    </div>
  );
}
