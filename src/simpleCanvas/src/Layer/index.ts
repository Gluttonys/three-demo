import {castArray, find, isNull, isUndefined, remove, sortBy, uniqueId} from "lodash";
import BaseParts from "@/simpleCanvas/src/parts/BaseParts";
import SimpleCanvas from "@/simpleCanvas/src/SimpleCanvas";

class Layer {

  parent: SimpleCanvas = null

  name: string = uniqueId("simple_canvas_layer_")
  zIndex: number = 0

  private partList: BaseParts[] = []

  constructor(layerOpt?: SimpleCanvas.LayerOpt) {
    this.initLayer(layerOpt)
  }

  add(part: BaseParts | BaseParts[]) {
    const partList = castArray(part)
    this.partList.push(...partList)
  }

  remove(part: BaseParts) {
    const target = find(this.partList, part)
    if (isUndefined(target)) return
    remove(this.partList, target)

    if (isNull(this.parent)) return
    this.parent.reDraw()
  }

  draw(ctx: CanvasRenderingContext2D) {
    const sortPart = sortBy(this.partList, "defaultOpt.zIndex")
    sortPart.forEach(part => part.draw(ctx))
  }

  private initLayer(layerOpt?: SimpleCanvas.LayerOpt) {
    if (!isUndefined(layerOpt)) {
      const {name, zIndex} = layerOpt
      if (!isUndefined(name)) {
        this.name = name
      }

      if (!isUndefined(zIndex)) {
        this.zIndex = zIndex
      }
    }
  }

}


export default Layer
