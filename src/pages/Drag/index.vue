<template>
  <div class="layout">
    <aside-component-container></aside-component-container>
    <stage class="stage"></stage>
  </div>
</template>

<script lang="ts" setup>
/* 具体逻辑拆分组件 */
import AsideComponentContainer from './components/AsideComponentContainer.vue';
import Stage from './components/Stage.vue';

</script>

<style lang="less" scoped>
.layout {
  display: flex;
  align-items: flex-start;
  gap: 10px;

  .stage {
    flex: 1;
  }
}


</style>
