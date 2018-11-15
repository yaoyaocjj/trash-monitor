import echarts from 'echarts'

export default function drawLine(dom, title, data) {
  const legend = data.map(function (ele) {
    return ele.name;
  });
  const seriesData = data.map(function (ele) {
    return {
      name: ele.name,
      type: 'line',
      data: ele.value
    };
  });

  const charts = echarts.init(dom);

  charts.setOption({
    title: {
      text: title,
      subtext: '',
      x: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: legend,
      bottom: '1%'
    },
    xAxis: {
      type: 'category',
      data: ['first hour', 'second hour', 'third hour', 'forth hour', 'fifth hour']
    },
    yAxis: {
      type: 'value'
    },
    series: seriesData
  });
}
