import { IInvestItem } from '../types/investTypes';
import shadeColor from './shadeColor';

function dataChartCreator(rawData: IInvestItem[], label: string) {
  interface IDatasets extends Object {
    label: string;
    data: (number | string)[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }

  interface IChartData {
    labels: string[];
    datasets: IDatasets[];
  }

  const chartData: IChartData = {
    labels: [],
    datasets: [
      {
        label,
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
        /* borderColor: [], */
        borderWidth: 2,
        /* hoverBorderWidth: 4, */
        borderRadius: 2,
        hoverOffset: 15,
        cutout: '40%',
      },
    ],
    options: {
      legend: {
        display: true,
      },
    },
  };

  rawData?.forEach(item => {
    chartData.labels.push(item.asset.name);
    chartData.datasets.forEach(subItem => {
      subItem.data.push(item.invested);
      subItem.backgroundColor.push(item.asset.color);
      subItem.hoverBackgroundColor.push(shadeColor(item.asset.color, 40));
    });
  });
  return chartData;
}

export default dataChartCreator;
