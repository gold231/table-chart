import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // var gradientStroke = this.$refs.canvas.getContext('2d').createLinearGradient(0, 230, 0, 50);

    // gradientStroke.addColorStop(1, 'rgba(253,93,147,0.8)');
    // gradientStroke .addColorStop(0, 'rgba(253,93,147,0)'); //blue colors

    this.renderChart(this.chartData, this.options)
  }
}