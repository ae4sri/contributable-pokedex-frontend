import Chart from "react-apexcharts";

export const StatsChart = ({ hp, atk, def, spatk, spdef, speed }) => {

  const series = [{
    name: "Points",
    data: [hp, atk, def, spatk, spdef, speed]
  }]

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed']
    }
  }

  return (
    <div id="chart">
      <Chart options={options} series={series} type="bar" height={250} />
    </div>
  )
}

