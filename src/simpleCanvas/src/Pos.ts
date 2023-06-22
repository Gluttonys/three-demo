import {isNull, isUndefined} from "lodash";

class Pos {
  changeCb: Function = null

  private x: number = 0
  private y: number = 0

  constructor(cb?: Function) {
    if (isUndefined(cb)) return
    this.changeCb = cb
  }

  setX(x: number) {
    this.x = x
    this.emitChange()
  }

  setY(y: number) {
    this.y = y
    this.emitChange()
  }

  set(x: number, y: number) {
    this.setX(x)
    this.setY(y)
    this.emitChange()
  }

  getX(): number {
    return this.x
  }

  getY(): number {
    return this.y
  }

  get(): [number, number] {
    return [
      this.getX(),
      this.getY()
    ]
  }

  emitChange() {
    if (isNull(this.changeCb)) return
    try {
      this.changeCb()
    } catch (e) {
      console.warn("坐标回调cb出错")
      console.error(e)
    }
  }
}

export default Pos
