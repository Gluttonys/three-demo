import BaseParts from "@/simpleCanvas/src/parts/BaseParts";
import SimpleCanvas from "@/simpleCanvas/src/SimpleCanvas";
import {assign, cloneDeep, defaultTo, isEmpty} from "lodash";


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


}


export default Region
