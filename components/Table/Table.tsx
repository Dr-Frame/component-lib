import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { cryptoApi } from '../../services/CryptoService';
import { investAPI } from '../../services/InvestService';
import { ICategory, IInvestItem } from '../../types/investTypes';
import InvestTableRow from '../InvestTableRow';
import s from './Table.module.scss';

const cx = classNames.bind(s);

interface ITableProps {
  investments: IInvestItem[];
  categories: ICategory[];
}

function Table({ investments, categories }: ITableProps) {
  const investedCrypto = investments.map(item => item.asset.uuid);
  const { data: currentCryptoStats } =
    cryptoApi.useSearchCoinByIdQuery(investedCrypto);
  const [editInvestment] = investAPI.useEditInvestmentMutation();

  useEffect(() => {
    getNewData(investments, currentCryptoStats?.data.coins);
  }, [investments]);

  function getNewData(oldData: IInvestItem[], newData: IInvestItem[]) {
    if (oldData && newData) {
      oldData.map(item => {
        currentCryptoStats?.data.coins.forEach(subItem => {
          if (subItem.name === item.asset.name) {
            editInvestment({ id: item.id, asset: subItem });
          }
        });
      });
    }
    return;
  }

  return (
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr className={s.tableRow}>
          <th className={cx(s.headCell, s.number)}>№</th>
          <th className={cx(s.headCell, s.asset)}>Asset</th>
          <th className={cx(s.headCell, s.symbol)}>Symbol</th>
          <th className={cx(s.headCell, s.type)}>Type</th>
          <th className={cx(s.headCell, s.category)}>Category</th>
          <th className={cx(s.headCell, s.amount)}>Amount</th>
          <th className={cx(s.headCell, s.invested)}>Invested, $</th>
          <th className={cx(s.headCell, s.avarage)}>Entry price, $</th>
          <th className={cx(s.headCell, s.current)}>Current price</th>
          <th className={cx(s.headCell, s.profit)}>Profit, $</th>
          <th className={cx(s.headCell, s.profitPercent)}>Profit, %</th>
          <th className={cx(s.headCell, s.edit)}></th>
          <th className={cx(s.headCell, s.delete)}></th>
        </tr>
      </thead>
      <tbody className={s.tableBody}>
        {investments &&
          investments.map((investment, i) => (
            <InvestTableRow
              key={investment.id}
              index={i}
              item={investment}
              categories={categories}
            />
          ))}
      </tbody>
    </table>
  );
}

export default Table;
