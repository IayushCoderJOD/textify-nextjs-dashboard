
'use client'
import {
  LineChart,
  Table,
} from '@tremor/react';
import { useEffect, useState } from 'react';
import { data } from '../constants/data';

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ');
}

const valueFormatter = (number:number) => `₹${Intl.NumberFormat('us').format(number).toString()}`;

function ImportantMetricCard({ metricName, allTimeMaxValue,allTimeMinValue }:any) {
  return (
    <div className='  pb-2 mt-3 rounded-2xl shadow-2xl shadow-slate-600 h-60 bg-white hover:translate-x-2 hover:-translate-y-2 '>
      <h1 className='bg-cyan-200  shadow-2xl rounded-t-xl text-black w-fit text-3xl p-4  font-extrabold mb-7'>{metricName}</h1>
      <p className='pl-5 mb-3 text-lg font-semibold text-black '>Highest price- ₹{allTimeMaxValue}</p>
      <p className='pl-5 mb-3 text-lg font-semibold text-black'>Lowest price- ₹{allTimeMinValue}</p>
    </div>
  );
}



// .......................................................................................................

// Due to the fact that api is paid and has limit, I am using static data stored in data.tsx , however the code below is exact what we've to do if we have real time api and we want to display the data from that api


//   const [stockData, setStockData] = useState<StockData>({ labels: [], s: [] });

//   const getStocks = async () => {
//     try {
//       const response = await fetch(
//         'https://alpha-vantage.p.rapidapi.com/query?symbol=IBM&function=TIME_SERIES_MONTHLY&datatype=json',
//         {
//           method: 'GET',
//           headers: {
//             'X-RapidAPI-Key': '72d673d368msh185d0fe32c52f6cp1a04a8jsn3c3ca1e7100b',
//             'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
//           }
//         }
//       );
//       const data = await response.json();
//       const timeSeriesData = data['Time Series (5min)'];
//       const labels: string[] = [];
//       const s: number[] = [];
//       for (const timestamp in timeSeriesData) {
//         labels.push(timestamp);
//         s.push(parseFloat(timeSeriesData[timestamp]['4. close']));
//       }
//       setStockData({ labels, s });
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//     }
//   };
//   useEffect(() => {
//     getStocks();
//   }, []);

// .........................................................................................................


export default function MapComponent() {
  const [selectedChart, setSelectedChart] = useState('Amazon stock ');
  const [maxValue, setMaxValue] = useState<number | null>(null);
  const [minValue, setMinValue] = useState<number | null>(null);

  const maxValueOfStock = () => {
    let max = -Infinity; 
    data.forEach((item) => {
      if (item['Amazon stock '] > max) {
        max = item['Amazon stock '];
      }
    });
    setMaxValue(max);
  };
  const minValueOfStock = () => {
    let min = Infinity; 
    data.forEach((item:any) => {
      if (item[selectedChart] < min ) {
        min = item[selectedChart];
      }
    });
    setMinValue(min);
  };
  useEffect(()=>{
    maxValueOfStock();
    minValueOfStock();
  },[selectedChart])
  
  const handleChartSelection = (chartName:any) => {
    setSelectedChart(chartName);
  };


  return (
    <>
      <h3 className="text-3xl font-serif   text-tremor-content dark:text-dark-tremor-content">
      Historical price movement stocks.
      </h3>
      <div className=' flex'>        
      <div className='w-[40%] mt-3 flex justify-center align-middle items-center'>

          <ImportantMetricCard metricName={selectedChart}  allTimeMaxValue={maxValue} allTimeMinValue={minValue} />
        </div>

    <div className='  w-[60%] p-4'>

      <div className="flex flex-wrap justify-center">
        <select className='rounded-2xl shadow-2xl' value={selectedChart} onChange={(e) => handleChartSelection(e.target.value)}>
          <option value="Amazon stock ">Amazon stock </option>
          <option value="Textify stock ">Textify stock </option>
          <option value="Microsoft stock ">Microsoft stock </option>
        </select>
      </div>
      <div className='bg-black mt-3  shadow-2xl shadow-slate-800 rounded-xl' >
      {selectedChart && (
        <LineChart
        data={data}
        index="date"
        categories={[selectedChart]}
        colors={['cyan']}
        valueFormatter={valueFormatter}
        yAxisWidth={55}
        onValueChange={() => {}}
        className="mt-6 block h-96 sm:block"
        />
      )}
      </div>
      <Table className="mt-8"></Table>
    </div>
      </div>
        </>
  );
}
