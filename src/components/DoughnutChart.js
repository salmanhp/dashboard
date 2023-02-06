import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';


export const DoughnutChart = () => {
    return (
        <div style={{ height: '340px', width: '99%' }}>
            <Doughnut
                data={{
                    labels: ['Completed', 'Pending', 'Cancel'],
                    datasets: [{
                        label: 'Order',
                        data: [63, 25, 12],


                    }
                    ],


                }}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    )
}
