import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';


export const LineChart = () => {
    return (
        <div style={{ height: '290px', width: '99%' }}>
            <Line
                data={{
                    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    datasets: [
                        {
                            label: 'Current',
                            data: [20, 50, 40, 80, 42, 50, 70],

                        },
                        {
                            label: 'Previous',
                            data: [40, 30, 50, 22, 50, 40, 30],
                        }
                    ],



                }}

                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            max: 100,
                            min: 0,

                            ticks: {
                                stepSize: 20,
                            }
                        },

                    }
                }}
            />
        </div>
    )
}



