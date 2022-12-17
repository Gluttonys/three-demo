<template>
  <section class="link-block border shadow p-2 bg-blue-50 mb-4">
    <h1 v-if="props?.titleName?.length" class="text-blue-800">{{ props.titleName }}</h1>

    <section class="flex items-center">
      <div v-for="item in props.links" :key="item.link"
           :title="item.link"
           class="px-4 py-2 bg-blue-400 cursor-pointer text-white rounded shadow mr-4 hover:bg-blue-700 transition"
           @click="toLink(item)">
        {{ item.title }}
      </div>
    </section>

  </section>
</template>

<script lang="ts" setup>

type Props = {
  links: Base.Link[],
  titleName?: string
}

const props = withDefaults(defineProps<Props>(), {
  links: () => [],
  titleName: ''
})

const toLink = (linkItem: Base.Link) => {
  const {link} = linkItem
  window.open(link, "_black")
}


</script>
