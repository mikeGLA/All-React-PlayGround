import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
}   from "chart.js";
import {Bar, Line} from "react-chartjs-2";
import React, {useState, useEffect } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ChartExample = () =>{

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
            datasets: [
                {
                    label: "Whom'st let the dog out",
                    data: [12, 55, 34 ,120, 720],
                    borderColor: "yellow",
                    backgroundColor: "red",
                },
            ],
        });
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: "Whom'st let the dog out"
                }
            }
        })
    }, [])

    return(
        <div>
            <Bar options={chartOptions} data={chartData} />

        </div>


    );
}

export default ChartExample;