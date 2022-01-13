import { ICoins } from '../../types/cryptoTypes';
import s from './CryptoRankList.module.scss';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { ImArrowDown, ImArrowUp } from 'react-icons/im';
import classNames from 'classnames/bind';
const cx = classNames.bind(s);

interface ICryptoRankListProps {
  coinList: ICoins[];
}

function CryptoRankList({ coinList }: ICryptoRankListProps) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Coin Ranks</h2>
      <ul className={s.list}>
        {coinList.map(coin => {
          return (
            <li key={coin.uuid} className={s.listItem}>
              <div className={s.leftWrapper}>
                <p className={s.coinRank}>{coin.rank}.</p>
                <img
                  src={coin.iconUrl}
                  alt="coin image"
                  className={s.coinImg}
                />
                <p className={s.coinName}>{coin.name}</p>
                <p className={s.coinSymbol}>{coin.symbol}</p>
                <p className={s.coinPrice}>{Number(coin.price).toFixed(2)} $</p>
              </div>

              <div className={s.coinChangeWrapper}>
                {Number(coin.change) > 0 ? (
                  <>
                    <ImArrowUp className={cx(s.coinChangeIcon, s.green)} />
                    <p className={cx(s.coinChange, s.green)}>{coin.change}%</p>
                  </>
                ) : (
                  <>
                    <ImArrowDown className={cx(s.coinChangeIcon, s.red)} />
                    <p className={cx(s.coinChange, s.red)}>{coin.change}%</p>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CryptoRankList;
