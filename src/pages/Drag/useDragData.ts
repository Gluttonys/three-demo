import {reactive} from "vue";

const useDragData = () => {
  return  reactive({
    curElementId: null  // 当前拖拽的元素ID
  })
}


export default useDragData
