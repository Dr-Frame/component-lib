import classNames from 'classnames/bind';
import { ICategory, IInvestItem } from '../../types/investTypes';
import InvestTableRow from '../InvestTableRow';
import s from './Table.module.scss';

const cx = classNames.bind(s);

interface ITableProps {
  investments: IInvestItem[];
  categories: ICategory[];
}

function Table({ investments, categories }: ITableProps) {
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
