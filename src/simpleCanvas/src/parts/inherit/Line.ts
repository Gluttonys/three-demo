import BaseParts from "@/simpleCanvas/src/parts/BaseParts";
import {assign, defaultTo, isEmpty, isUndefined} from "lodash";

type LineOpt = SimpleCanvas.Parts.LineOpt


class Line extends BaseParts {

  defaultOpt: LineOpt = {
    pointList: [
      [0, 0],
      [0, 0]
    ],
    lineWidth: 1,
    color: '#000000',
    dashLine: [],
    dashLineOffset: 0
  }

  constructor(opt?: LineOpt) {
    super(opt);
    this.setOpt(opt)
  }

  setOpt(opt?: LineOpt): Line {
    assign(this.defaultOpt, defaultTo(opt, {}))
    return this
  }

  draw(ctx: CanvasRenderingContext2D): Line {
    this.checkCtx(ctx)
    const {pointList, lineWidth, color, dashLine, dashLineOffset, curvatureA, curvatureB} = this.defaultOpt
    this.ctx.save()

    this.ctx.strokeStyle = color
    this.ctx.lineWidth = lineWidth

    const [start, end] = pointList

    this.ctx.beginPath()

    if (!isEmpty(dashLine)) {
      this.ctx.setLineDash(dashLine)
      this.ctx.lineDashOffset = dashLineOffset
    }

    this.ctx.moveTo(...start)

    if (curvatureA && isUndefined(curvatureB)) {
      this.ctx.quadraticCurveTo(...curvatureA, ...end)
    } else if (curvatureA && curvatureB) /* 三次贝塞尔曲线 */ {
      this.ctx.bezierCurveTo(...curvatureA, ...curvatureB, ...end)
    } else if (isUndefined(curvatureA) && isUndefined(curvatureB)) {
      this.ctx.lineTo(...end)
    }

    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.restore()
    return this;
  }


}

export default Line
