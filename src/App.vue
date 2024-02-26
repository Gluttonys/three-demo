<template>
  <header class="bg-blue-100 flex items-center justify-between p-4 text-white" style="height: 60px">
    <section class="left-nav"></section>
    <section class="right-nav">
      <FullScreen/>
    </section>
  </header>

  <main class="w-screen flex" style="height: calc(100vh - 60px);">

    <a-menu v-model:selected-keys="selectMenuKey" class="h-full overflow-auto" style="width: 256px" theme="dark">

      <template v-for="menu in legalRouterMap" :key="menu.path">
        <a-menu-item v-if="!menu.children?.length" :key="menu.path" @click="router.push(menu.path)">
          <span>{{ menu.name }}</span>
        </a-menu-item>

        <a-sub-menu v-else :key="menu.path" :title="menu.name">
          <a-menu-item
              v-for="sonRoute in menu.children"
              :key="sonRoute.path"
              @click="router.push(sonRoute.path)">
            {{ sonRoute.name }}
          </a-menu-item>
        </a-sub-menu>
      </template>

    </a-menu>

    <section class="overflow-hidden p-2 shadow h-full bg-white" style="width: calc(100vw - 256px)">
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
import FullScreen from '@/components/FullScreen/index.vue'


const legalRouterMap = computed(() => {
  const legal: RouteRecordRaw[] = []

  forEach(routerMap, route => {
    if (!eq(route.path, '/')) {
      legal.push(route)
    }
  })

  return legal
})

const selectMenuKey = ref([eq(location.pathname, '/') ? '/douyin' : location.pathname])


</script>


