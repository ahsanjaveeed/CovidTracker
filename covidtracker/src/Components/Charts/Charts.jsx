import style from './Charts.module.css';
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

const Charts = ({ data: {confirmed, recovered, deaths}, country }) => {

  const [dailyData, setDailyData] = useState([]);

  useEffect(()=>{
    const getData = async ()=> {
      setDailyData(await fetchDailyData());
    }
    getData();
  }, []);

  const lineChart = (
    dailyData.length ? (
            <Line data={{
              labels: dailyData.map(({date }) => date),
            datasets: [{
              data: dailyData.map(({confirmed }) => confirmed),
              lable: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            }, {
              data: dailyData.map(({deaths }) => deaths),
              lable: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true,
            }]
          }}/>
        ): <div>NO DATA</div>
    )


    const barChart = (
      confirmed ? (
        <Bar 
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'people',
            backgroundColor:[
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)'
            ],
            data: [confirmed.value, recovered.value, deaths.value]
          }]
        }}
        options={{
          legends: {display: false},
          title: {display: true, text: "Current status of Covid in ${country}"}
        }}
        />
      ): <div>NO DATA</div>
    )

  return (
    <div className={style.container}>
      {country ? barChart: lineChart}
    </div>
  )
}

export default Charts