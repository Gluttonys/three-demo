<template>
  <p>hello world</p>
</template>

<script lang="ts" setup>


import {onMounted} from "vue";
import request from "@/utils/require";

onMounted(async () => {
  const data = await request.get("/api/users")
  const data_2 = await request.get("/api/gender")
  console.log(data, data_2)
})


</script>
