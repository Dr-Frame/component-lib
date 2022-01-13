import millify from 'millify';
import { cryptoApi } from '../../services/CryptoService';
import { ICryptoData, IStats } from '../../types/cryptoTypes';
import CryptoRankList from '../CryptoRankList';
import s from './CryptoStatsBar.module.scss';

const units = ['', 'K', 'M', 'Billion', 'Trillion', 'P', 'E'];

function CryptoStatsBar() {
  const { data: stats, isLoading } = cryptoApi.useFetchCryptoDataQuery(
    50 /* , {
    refetchOnFocus: true,
  } */,
  ); //будет делать запрос когда снова зашли на страницу (меняли вкладки в браузере например)

  return (
    <>
      {!isLoading && (
        <div className={s.wrapper}>
          <div>
            <h2 className={s.title}>Crypto market stats</h2>
            <ul className={s.statList}>
              <li className={s.statItem}>
                <h3 className={s.statTitle}>Total Market Cap</h3>
                <p className={s.statValue}>
                  {millify(Number(stats?.data.stats.totalMarketCap), {
                    precision: 3,
                    space: true,
                    units,
                  })}
                </p>
              </li>
              <li className={s.statItem}>
                <h3 className={s.statTitle}>Total Volume</h3>
                <p className={s.statValue}>
                  {millify(Number(stats?.data.stats.total24hVolume), {
                    precision: 2,
                    space: true,
                    units,
                  })}
                </p>
              </li>
              <li className={s.statItem}>
                <h3 className={s.statTitle}>Total Cryptocurrencies</h3>
                <p className={s.statValue}>{stats?.data.stats.totalCoins}</p>
              </li>
              <li className={s.statItem}>
                <h3 className={s.statTitle}>Total Markets</h3>
                <p className={s.statValue}>{stats?.data.stats.totalMarkets}</p>
              </li>
              <li className={s.statItem}>
                <h3 className={s.statTitle}>Total Exchanges</h3>
                <p className={s.statValue}>
                  {stats?.data.stats.totalExchanges}
                </p>
              </li>
            </ul>
          </div>
          {stats && <CryptoRankList coinList={stats?.data.coins} />}
        </div>
      )}
    </>
  );
}

export default CryptoStatsBar;
