<template>
  <aside class="absolute w-32 h-screen bg-white py-3 px-5">
    <h3>控制器</h3>
    <hr>

    <a-form-item label="坐标辅助">
      <a-switch
          v-model:checked="axesHelperController"
          checked-children="开"
          un-checked-children="关"/>
    </a-form-item>

    <a-form-item label="光线辅助">
      <a-switch
          v-model:checked="dirLightController"
          checked-children="开"
          un-checked-children="关"/>
    </a-form-item>

  </aside>
</template>

<script lang="ts" setup>

import {ref, watch} from "vue";
import {useDirectionalLight, useScene} from "../../hooks/threeD";
import {AXES_HELPER_NAME} from "../../constant/common";
import {AxesHelper} from "three";

const axesHelperController = ref<boolean>(true)
watch(axesHelperController, (value) => {
  const scene = useScene()
  const axes = scene.getObjectByName(AXES_HELPER_NAME) as AxesHelper

  if (value && !axes) {
    const _tempAxes: AxesHelper = new AxesHelper(1000)
    _tempAxes.name = AXES_HELPER_NAME
    scene.add(_tempAxes)
  } else {
    axes.dispose()
    scene.remove(axes)
  }
})


const dirLightController = ref<boolean>(true)
watch(dirLightController, (value) => {
  const [dirLight, dirLightHelper] = useDirectionalLight()
  const scene = useScene()

  if (value) {
    const [, tempDirLightHelper] = useDirectionalLight()
    scene.add(tempDirLightHelper)
  } else {
    dirLight.dispose()
    dirLightHelper.dispose()
    scene.remove(dirLight, dirLightHelper)
  }
})

</script>
