import { Line } from 'react-chartjs-2';
import s from './LineChart.module.scss';
import Chart from 'chart.js/auto';
import shadeColor from '../../utils/shadeColor';
import millify from 'millify';
import { ImArrowDown, ImArrowUp } from 'react-icons/im';
import classNames from 'classnames';
import { ICoins } from '../../types/cryptoTypes';

Chart.register();

const cx = classNames.bind(s);

interface ILineChartProps {
  asset: ICoins;
}

function LineChart({ asset }: ILineChartProps) {
  const assetColorLighter = shadeColor(asset.color, 60);

  function getPriceNumber(list: (string | number)[]) {
    const priceList: number[] = [];
    list.forEach(item => {
      if (list.indexOf(item) % 2 === 0) {
        priceList.push(Number(item).toFixed(0));
      }
    });
    return priceList;
  }

  const priceData = getPriceNumber(asset.sparkline);

  const data = {
    labels: priceData,
    datasets: [
      {
        data: priceData,
        fill: true,
        backgroundColor: asset.color,
        pointHitRadius: 10,
        borderColor: assetColorLighter,
        tension: 0.1,
        pointBackgroundColor: 'transparent',
        pointHoverBackgroundColor: asset.color,
        pointHoverBorderColor: assetColorLighter,
        pointHoverBorderWidth: 5,
        pointRadius: 20,
        pointHoverRadius: 6,
        pointBorderColor: 'transparent',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: function () {},
          label: context => {
            return '$ ' + context.parsed.y;
          },
        },
        bodyColor: assetColorLighter,
        displayColors: false,
        titleColor: 'transparent',
        backgroundColor: 'rgba(21, 2, 35, 0.3)',
        intersect: true,
        caretPadding: 20,
        caretSize: 5,
        borderColor: assetColorLighter,
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          borderColor: 'transparent',
          display: false,
        },
      },
      y: {
        ticks: {
          crossAlign: 0,
          display: false,
        },
        grid: {
          borderColor: 'transparent',
          display: false,
        },
      },
    },
  };

  return (
    <div className={s.chartWrapper}>
      <div className={s.statWrapper}>
        <div>
          <div className={s.assetWrapper}>
            <img className={s.assetIcon} src={asset.iconUrl} alt="asset icon" />
            <div>
              <p className={s.asset}>{asset.name}</p>
              <p className={s.symbol}>{asset.symbol}</p>
            </div>
          </div>
          <p className={s.volumeWrapper}>
            24h Volume:{' '}
            <span className={s.volume}>
              {millify(Number(asset['24hVolume']), {
                precision: 2,
                space: true,
              })}
            </span>
          </p>
        </div>

        <div className={s.priceWrapper}>
          <p className={s.price}>$ {Number(asset.price).toFixed(0)}</p>
          <div className={s.changeWrapper}>
            {Number(asset.change) > 0 ? (
              <>
                <ImArrowUp className={cx(s.coinChangeIcon, s.green)} />
                <p className={cx(s.coinChange, s.green)}>{asset.change}%</p>
              </>
            ) : (
              <>
                <ImArrowDown className={cx(s.coinChangeIcon, s.red)} />
                <p className={cx(s.coinChange, s.red)}>{asset.change}%</p>
              </>
            )}
          </div>
        </div>
      </div>

      <Line data={data} options={options} className={s.canvas} />
    </div>
  );
}

export default LineChart;
