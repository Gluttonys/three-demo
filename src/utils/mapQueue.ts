export type CallbackFun = (map: any, AMapObject?: any) => void

export default class MapQueue {

  private readonly map: any = null
  private readonly AMapObject: any = null
  private cbs: CallbackFun[] = []

  constructor(map: any, AMapObject: any) {
    this.map = map
    this.AMapObject = AMapObject
  }

  register(cb: CallbackFun) {
    this.cbs.push(cb)
  }

  run() {
    this.cbs.forEach(cb => cb.call(null, this.map, this.AMapObject))
  }

}



