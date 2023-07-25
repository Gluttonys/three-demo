import {isNil} from "lodash";
import ParamsError from "@/simpleCanvas/src/utils/ParamsError";

/**
 * @description 零部件基类
 */

type PartsOpt = SimpleCanvas.Parts.Opt

abstract class BaseParts {
  protected ctx: CanvasRenderingContext2D = null

  /**
   * @description 默认配置
   * @private
   */
  protected defaultOpt: PartsOpt = {
    x: 0,
    y: 0,
    zIndex: 1
  }

  protected constructor(partsOpt?: PartsOpt) {
    this.setOpt(partsOpt)
  }

  abstract setOpt(partsOpt?: PartsOpt): BaseParts

  getOpt(): PartsOpt & Record<string, any> {
    return this.defaultOpt
  }

  /**
   * @description 绘制图形
   */
  abstract draw(ctx: CanvasRenderingContext2D): BaseParts | Promise<BaseParts>

  /**
   * @description 检查 ctx 合法性
   * @param ctx
   * @protected
   */
  protected checkCtx(ctx: CanvasRenderingContext2D) {
    if (isNil(ctx)) throw new ParamsError("ctx 传值不正确")
    this.ctx = ctx
  }
}


export default BaseParts
