import {} from 'chart.js'

function ChartTest() {
    
    const labels = Utils.months({count: 7});
    const data = {
 labels: labels,
    datasets: [{
label: 'My First Dataset',
data: [65, 59, 80, 81, 56, 55, 40],
fill: false,
borderColor: 'rgb(75, 192, 192)',
tension: 0.1
}]
};
const config = {
    type: 'line',
    data: data,
  };
    
    return (
     

        <div>
            <canvas id="barChart"></canvas>
        </div>
    )
}

export default ChartTest;