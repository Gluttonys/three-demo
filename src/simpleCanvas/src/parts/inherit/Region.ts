import BaseParts from "@/simpleCanvas/src/parts/BaseParts";
import SimpleCanvas from "@/simpleCanvas/src/SimpleCanvas";
import {assign, cloneDeep, defaultTo, first, isEmpty, last} from "lodash";


type RegionOpt = SimpleCanvas.Parts.RegionOpt

class Region extends BaseParts {

  protected defaultOpt: RegionOpt = {
    pathList: [],
    backgroundColor: 'black'
  }

  constructor(opt?: RegionOpt) {
    super(opt);
    this.setOpt(opt)
  }

  setOpt(opt?: RegionOpt): Region {
    assign(this.defaultOpt, defaultTo(opt, {}))
    return this
  }


  draw(ctx: CanvasRenderingContext2D): Region {
    this.checkCtx(ctx)

    const {backgroundColor, pathList} = this.defaultOpt

    if (isEmpty(pathList)) return

    this.ctx.save()
    this.ctx.fillStyle = backgroundColor
    this.ctx.beginPath()

    const _tempPath = cloneDeep(pathList)

    const topPos = _tempPath.shift()

    this.ctx.moveTo(...topPos)

    _tempPath.forEach(pos => this.ctx.lineTo(...pos))
    this.ctx.closePath()
    this.ctx.fill()

    this.ctx.restore()
    return this
  }


  remove(): Region {
    const {pathList} = this.defaultOpt

    const xList = []
    const yList = []

    pathList.forEach(pos => {
      xList.push(pos[0])
      yList.push(pos[1])
    })

    xList.sort()
    yList.sort()

    const minX = first(xList)
    const minY = first(yList)

    const maxX = last(xList)
    const maxY = last(yList)

    this.ctx.clearRect(minX, minY, maxX - minX, maxY - minY)
    return this
  }

}


export default Region
