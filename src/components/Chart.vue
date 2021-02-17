<template>
    <b-container>
        <line-chart :chart-data="datacollection" :options="options"></line-chart>
        <canvas id="canvas"></canvas>
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
      gradient1: null, 
      gradient2: null,
      options: {
        legend: {
          display: false
        },
        scales: { 
          xAxes: [
            { 
              ticks: { 
                display: false 
              }, 
            }
          ],
          yAxes: [
            {
              position: 'right',
              ticks: {
                fontSize: 16
              },
              gridLines: {
                display:false
              } 
            }
          ]
        },
        elements: {
          point:{
            radius: 0
          },
          line:{
            tension: 0
          }
        },
        responsive: true,
        maintainAspectRatio: false,
      }   
    };
  },
  computed: {
    datacollection() { 
      return {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [
          {
            data: [0, 10, 24, 32, 23, 45, 38, 57, 49, 60],
            label: "Data 1",
            borderColor: "#276094",
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#276094",
            fill: true,
            backgroundColor: this.gradient1
          },
          {
            data: [0, 12, 26, 38, 45, 50, 63, 78, 87, 80],
            label: "Data 2",
            borderColor: "#3D546A",
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#3D546A",
            fill: true,
            backgroundColor: this.gradient2
          }
        ]
      };
    }      
  },
  mounted() {
    this.gradient1 = document.getElementById("canvas").getContext('2d').createLinearGradient(0, 0, 0, 450);
    this.gradient1.addColorStop(0, 'rgba(178,194,210, 0.8)');
    this.gradient1.addColorStop(0.5, 'rgba(178,194,210, 0.35)');
    this.gradient1.addColorStop(1, 'rgba(178,194,210, 0)');    

    this.gradient2 = document.getElementById("canvas").getContext('2d').createLinearGradient(0, 0, 0, 450);
    this.gradient2.addColorStop(0, 'rgba(216,220,225, 0.8)');
    this.gradient2.addColorStop(0.5, 'rgba(216,220,225, 0.35)');
    this.gradient2.addColorStop(1, 'rgba(216,220,225, 0)');    
  }
};
</script>

<style scoped>
</style>
