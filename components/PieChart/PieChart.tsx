import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { IInvestItem } from '../../types/investTypes';
import getRandomRgb from "../../utils/getRandomRGB";

Chart.register();

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4

  }]
};

const options = {

  title: {
    display: true,
    text: 'Crypto Chart'
  },
  borderAlign: 'inner'
}

export default function PieChart({ prop }) {

  function dataChartCreator(rawData: IInvestItem[], label: string) {

    interface IDatasets extends Object {
      label: string,
      data: (number | string)[],
      backgroundColor: string[],
    }

    interface IChartData {
      labels: string[],
      datasets: IDatasets[]
    }

    const chartData: IChartData = {
      labels: [],
      datasets: [{
        label,
        data: [],
        backgroundColor: [],
      }]
    }
    rawData?.forEach(item => {
      chartData.labels.push(item.asset)

      chartData.datasets.forEach((subItem) => {
        subItem.data.push(item.invested);
        subItem.backgroundColor.push(getRandomRgb())
      });

    })
    return chartData
  }

  console.log(dataChartCreator(prop, 'My portfolio'));


  console.log(prop);

  return <div><Doughnut data={dataChartCreator(prop, 'My portfolio')} /* options={options} */ /></div>

}