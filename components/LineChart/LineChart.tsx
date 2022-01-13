import { Line } from 'react-chartjs-2';
import s from './LineChart.module.scss';
import Chart from 'chart.js/auto';
import shadeColor from '../../utils/shadeColor';
import millify from 'millify';
import { ImArrowDown, ImArrowUp } from 'react-icons/im';
import classNames from 'classnames';

Chart.register();

const cx = classNames.bind(s);

function LineChart({}) {
  const asset = {
    uuid: 'Qwsogvtv82FCd',
    symbol: 'BTC',
    name: 'Bitcoin',
    color: '#f7931A',
    iconUrl: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
    marketCap: '813191430772',
    price: '42965.03674163466',
    listedAt: 1330214400,
    tier: 1,
    change: '2.8',
    rank: 1,
    sparkline: [
      '41795.3244020905709596330000',
      '41934.6123327404858464710000',
      '41985.4122959532464145330000',
      '41895.7894392128760646030000',
      '41730.1817715743033335380000',
      '41924.1390483173737005820000',
      '42401.6125052275810299670000',
      '42849.3298210328552694000000',
      '42741.0548617439382812640000',
      '42899.6608079364611305490000',
      '43034.2331900288424765970000',
      '42909.3485109849527389370000',
      '42839.9073234107287929520000',
      '42905.4701197095974977950000',
      '42935.6152158607196243100000',
      '42846.2677012665714777280000',
      '42798.7083532145479149390000',
      '42721.5546313448053182600000',
      '42785.6921795161218676350000',
      '42763.3880851028240294730000',
      '42850.1807051029065683160000',
      '42842.8501192429838598740000',
      '42718.2238437567340317200000',
      '42789.8413537538186488450000',
      '42905.9006892658440686530000',
      '43006.1015830006694431690000',
      '42965.0367416346634723820000',
    ],
    lowVolume: false,
    coinrankingUrl: 'https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc',
    '24hVolume': '22037872081',
    btcPrice: '1',
  };

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
        data: priceData /* [
          Number(asset.sparkline[2]).toFixed(0),
          Number(asset.sparkline[5]).toFixed(0),
          Number(asset.sparkline[8]).toFixed(0),
          Number(asset.sparkline[11]).toFixed(0),
          Number(asset.sparkline[14]).toFixed(0),
          Number(asset.sparkline[17]).toFixed(0),
          Number(asset.sparkline[20]).toFixed(0),
          Number(asset.sparkline[23]).toFixed(0),
          Number(asset.sparkline[26]).toFixed(0),
        ] */,
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
