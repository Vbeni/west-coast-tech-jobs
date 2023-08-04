import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const TechBreakdown = () => {

    // Define your data
    const data = {
        labels: ['React', 'Node.js', 'Express', 'MongoDB', 'GraphQL'],
        datasets: [{
            label: 'Technology Usage Percentage',
            data: [75, 60, 55, 50, 30],  // Placeholder data
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Define chart options
    const options = {
        scales: {
            y: {
              beginAtZero: true
            }
        }
    };

    return (
        <div>
            <h2>Technology Breakdown</h2>
            <Bar data={data} options={options} />
        </div>
    );
}

export default TechBreakdown;
