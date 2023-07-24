<template>
  <section class="flex gap-4">
    <canvas id="sketchpad"></canvas>

    <aside class="w-96">

      <a-form ref="formRef" :label-col="{span: 8}" :model="form" :rules="rules">
        <a-form-item label="画笔颜色" name="color">
          <a-input v-model:value="form.color" type="color"></a-input>
        </a-form-item>
        <a-form-item label="画笔粗细" name="width">
          <a-input-number v-model:value="form.width"></a-input-number>
        </a-form-item>

        <a-form-item label=" ">
          <a-button type="primary" @click="reset">重置</a-button>
        </a-form-item>
      </a-form>

    </aside>
  </section>
</template>

<script lang="ts" setup>

import SimpleCanvas from "@/simpleCanvas/src/SimpleCanvas";
import {onMounted, ref} from "vue";
import {inRange, isNil, isNull} from "lodash";
import {FormInstance, Rule} from "ant-design-vue/lib/form";

let SCIns: SimpleCanvas = null

const form = ref({
  color: '#000000',
  width: 1
})

const formRef = ref<FormInstance>()

const rules: Record<string, Rule[]> = {
  width: [{
    required: true,
    min: 1,
    validator: (_, value) => {
      if (isNil(value)) return Promise.reject("请输入合法值")
      if (!inRange(value, 1, 200)) return Promise.reject("请输入正确值")
      return Promise.resolve()
    }
  }]
}

onMounted(() => {
  SCIns = new SimpleCanvas('sketchpad')
      .setWidthAndHeight(1500, 1100)
      .setBackGround('#ffffff')
      .openGrid()

  let effectiveOperation = false
  const ctx = SCIns.get2DCtx()

  SCIns.canvasDom.addEventListener('mousedown', (event: MouseEvent) => {
    effectiveOperation = true
    const {offsetX, offsetY} = event
    const {color, width} = form.value
    ctx.save()
    ctx.lineWidth = width
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.moveTo(offsetX, offsetY)
  })

  SCIns.canvasDom.addEventListener('mousemove', (event: MouseEvent) => {
    if (!effectiveOperation) return

    const {offsetX, offsetY} = event
    ctx.lineTo(offsetX, offsetY)
    ctx.stroke()
  })

  SCIns.canvasDom.addEventListener('mouseup', (event) => {
    ctx.closePath()
    ctx.restore()
    effectiveOperation = false
  })

})


const reset = () => {
  if (isNull(SCIns)) return

  formRef.value.resetFields()
  SCIns.clean().openGrid()
}


</script>

