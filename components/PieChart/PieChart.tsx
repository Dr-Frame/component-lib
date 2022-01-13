import { Doughnut, Pie } from 'react-chartjs-2';
import s from './PieChart.module.scss';
import Chart from 'chart.js/auto';
import { IInvestItem } from '../../types/investTypes';
import dataChartCreator from '../../utils/pieChartDataCreator';
import colors from '../../styles/exportColorVars.module.scss';
import { useRef } from 'react';

Chart.register();
Chart.defaults.color = colors.white;

interface IPieChartProps {
  investments: IInvestItem[];
  investType: 'Sell' | 'Buy';
  options?: object[];
  type?: 'pie' | 'doughnut';
}

export default function PieChart({
  investments,
  options,
  type = 'doughnut',
  investType,
}: IPieChartProps) {
  const sortedByInvestType = investments.filter(
    item => investType === item.investType,
  );
  const totalMoneyInvested = sortedByInvestType.reduce(
    (acc, item) => acc + item.invested,
    0,
  );

  const chartRef = useRef();

  return (
    <div className={s.chartWrapper}>
      {type === 'doughnut' && (
        <Doughnut
          ref={chartRef}
          data={dataChartCreator(sortedByInvestType, 'My portfolio')}
          options={options}
        />
      )}
      {type === 'pie' && (
        <Pie
          data={dataChartCreator(sortedByInvestType, 'My portfolio')}
          options={options}
        />
      )}
      {chartRef.current && (
        <p
          style={{
            top: `${
              chartRef.current.height / 2 + chartRef.current.chartArea.top / 2
            }px`,
          }}
          className={s.total}
        >
          Total ,$ :{' '}
          <span className={s.totalAmount}>{`${totalMoneyInvested.toFixed(
            2,
          )} `}</span>{' '}
        </p>
      )}
    </div>
  );
}
