import { Bar } from "react-chartjs-2";

function barChart({chartData}){
    return(
        <Bar data={chartData} />
    )
}

export default barChart;