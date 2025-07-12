import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { Box, ScrollArea } from '@mantine/core'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    // Legend
)

export const options = {
    responsive: true,
    plugins: {
        // legend: {
        //     position: 'top',
        // },
        title: {
            display: true,
            text: 'Monthly Price Rates',
        }
    }
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Bitcoin',
            data: labels.map(() => faker.datatype.number(({ min: 20000, max: 50000 }))),
            borderColor: 'rgba(227, 197, 27)',
            backgroundColor: 'rgba(227, 197, 27, 0.5)',
        },
        {
            label: 'Ethereum',
            data: labels.map(() => faker.datatype.number({ min: 20000, max: 50000 })),
            borderColor: 'rgb(27, 124, 227)',
            backgroundColor: 'rgba(27, 124, 227, 0.5)',
        },
        {
            label: 'Tether',
            data: labels.map(() => faker.datatype.number({ min: 20000, max: 50000 })),
            borderColor: 'rgb(66, 168, 151)',
            backgroundColor: 'rgba(66, 168, 151, 0.5)',
        },
    ]
}

const CryptoPriceLineChart = () => {
    return (
        <div className="">
            <Line className="w-[520px]" options={options} data={data} />
        </div>
    )
}

export default CryptoPriceLineChart
