import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { BASE_URL } from 'utils/requests';
import { round } from 'utils/format'
import { SaleSuccess } from 'types/sale'

type SeriesData = {
  name: string;
  data: number[];
}

type ChartData = {
  labels: {
    categories: string[]
  };
  series: SeriesData[];
}

function BarChart() {
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [{
      name: '',
      data: []
    }]
  })

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`)
      .then(response => {
        const data = response.data as SaleSuccess[];
        const myLabels = data.map(x => x.sallerName)
        const mySeries = data.map(x => round(x.deals / x.visited * 100, 1))

        setChartData({
          labels: {
            categories: myLabels
          },
          series: [{
            name: '% Success',
            data: mySeries
          }]
        })
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type='bar'
      height='240'
    />
  );
}

export default BarChart;