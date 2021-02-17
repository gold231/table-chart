<template>
    <b-container>
        <line-chart :chart-data="datacollection" :options="options"></line-chart>
    </b-container>
</template>

<script>
import LineChart from "./LineChart.js";

export default {
  name: "Chart",
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [
          {
            data: [0, 10, 24, 32, 23, 45, 38, 57, 49, 60],
            label: "Data 1",
            borderColor: "#276094",
            pointBorderColor: "#276094",
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#276094",
            fill: true,
            backgroundColor: "rgba(178,194,210, 0.2)"
          },
          {
            data: [0, 12, 26, 38, 45, 50, 63, 78, 87, 80],
            label: "Data 2",
            borderColor: "#3D546A",
            pointBorderColor: "#3D546A",
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#3D546A",
            fill: true,
            backgroundColor: "rgba(216,220,225,0.5)"
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: { 
          xAxes: [
            { 
              ticks: { display: false }, 
            }
          ],
          yAxes: [
            {
              position: 'right',
              ticks: {
                fontSize: 16
              },
            }
          ]
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    };
  },
  mounted: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
