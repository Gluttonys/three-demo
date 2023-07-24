<template>

  <div id="c1"></div>

  <div ref=""></div>


</template>

<script lang="ts" setup>
import {Chart} from '@antv/g2';
import {computed, onMounted, ref} from "vue";

onMounted(() => {
  const chart = new Chart({
    container: 'c1',
    autoFit: true,
    width: 600,
    height: 600,
    padding: [40, 40, 80, 40]
  });


  chart.data([
    {date: '6.30', weight: 165.5},
    {date: '7.1', weight: 162.1},
    {date: '7.2', weight: 162.8},
    {date: '7.3', weight: 164.1},
    {date: '7.4', weight: 163.9},
    {date: '7.5', weight: 163.5},
    {date: '7.6', weight: 163.3},
    {date: '7.7', weight: 162.7},
    {date: '7.8', weight: 162.3},
    {date: '7.9', weight: 163.3},
    {date: '7.10', weight: 162.4},
    {date: '7.11', weight: 162.3},
    {date: '7.12', weight: 162.1},
    {date: '7.13', weight: 161.8},
    {date: '7.14', weight: 162.7},
    {date: '7.15', weight: 161.7},
    {date: '7.16', weight: 161.75},
    {date: '7.17', weight: 161.8},
    {date: '7.18', weight: 162.8},
    {date: '7.19', weight: 161.5},
    {date: '7.20', weight: 160.1},
  ]);


  chart.axis('weight', {
    label: {
      formatter: (val) => {
        return val + '斤';
      },
    },
  });

  chart.axis('date', {
    label: {
      formatter: (val) => {
        return val + '日';
      },
    },
  });

  chart.scale({
    weight: {
      min: 155,
      max: 170
    }
  })


  chart.line()
      .position('date*weight')
      .color('#1890ff')
      .shape('smooth')

  chart
      .point()
      .position('date*weight')
      .color('weight')
      .shape('circle')
      .style({
        stroke: '#7b0000',
        lineWidth: 2
      })

  chart.render(); // 更新图表
})


const a = ref({name: 'xie'})

const computA = computed((): number => {
  return 1
})


</script>

