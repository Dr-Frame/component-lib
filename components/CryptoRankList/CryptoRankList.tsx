import millify from 'millify';
import Image from 'next/image';
import { ICoins } from '../../types/cryptoTypes';
import s from './CryptoRankList.module.scss';

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
              <p className={s.coinRank}>{coin.rank}.</p>
              <img src={coin.iconUrl} alt="coin image" className={s.coinImg} />
              <p className={s.coinName}>{coin.name}</p>
              <p className={s.coinSymbol}>{coin.symbol}</p>
              <p className={s.coinPrice}>
                {Number(coin.price).toFixed(2)} $
                {/* {millify(Number(coin.price), { precision: 3, space: true })} */}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CryptoRankList;
