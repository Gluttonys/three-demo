<template>
  <main class="w-screen h-screen flex">

    <a-menu v-model:selected-keys="selectMenuKey" class="h-screen" mode="inline" style="width: 256px" theme="dark">
      <a-menu-item
          v-for="route in legalRouterMap"
          :key="route.path"
          @click="router.push(route.path)">
        <span>{{ route.name }}</span>
      </a-menu-item>
    </a-menu>

    <section class="overflow-hidden p-4 shadow" style="height: 100vh;width: calc(100vw - 256px)">
      <router-view v-slot="{ Component }">
        <component :is="Component"/>
      </router-view>
    </section>

  </main>
</template>


<script lang="ts" setup>
import routerMap from "@/router/routerMap";
import {computed, ref} from "vue";
import {eq, forEach} from "lodash";
import {RouteRecordRaw} from "vue-router";
import router from "@/router";


const legalRouterMap = computed(() => {
  const legal: RouteRecordRaw[] = []

  forEach(routerMap, route => {
    if (!eq(route.path, '/')) {
      legal.push(route)
    }
  })

  return legal
})

const selectMenuKey = ref([location.pathname])


</script>


