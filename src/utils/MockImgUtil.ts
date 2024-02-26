import {random as _random} from "lodash";

type Base = {
  width?: number,     // 图片高度
  height?: number,    // 图片高度
  grayscale?: boolean // 是否是灰色
  blur?: number       // 模糊度
  random?: boolean    // 是否开启随机
  suffix?: '.jpg' | '.webp'
}

type ImageSeedOpt = {
  seed?: string       // 随机种子
} & Base

type ImageIdOpt = {
  id?: number         // 图片ID
} & Base

/**
 * 模拟图片地址生成工具
 * @see {@link https://picsum.photos/}
 */
class MockImgUtil {
  static readonly MOCK_IMAGE_URL: string = 'https://picsum.photos'
  
  /**
   * 生成图片地址
   * @param opt {ImageSeedOpt | ImageIdOpt} 图片参数
   */
  static getMockImgUrl(opt: ImageSeedOpt | ImageIdOpt): string {
    const defaultOpt = Object.assign({
      width: 200,
      height: 200,
      grayscale: false,
      blur: 0,
      random: true,
      suffix: '.jpg'
    }, opt)
    
    const {width, height, grayscale, blur, random, suffix} = defaultOpt
    
    if ('seed' in opt && 'id' in opt) {
      throw new Error("seed 和 id 不能同时使用")
    }
    
    let url = MockImgUtil.MOCK_IMAGE_URL
    if ('seed' in defaultOpt) url += `/seed/${defaultOpt.seed}`
    if ('id' in defaultOpt) url += `/id/${defaultOpt.id}`
    
    url += `/${width}/${height}`
    
    if (suffix) url += `${suffix}?`
    if (random) url += `random=${_random(1, 1000)}&`
    if (blur) url += `blur=${blur}&`
    if (grayscale) url += 'grayscale'
    
    return url
  }
}


export default MockImgUtil

