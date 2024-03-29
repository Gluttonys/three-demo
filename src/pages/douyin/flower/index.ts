import one from './assets/img/1.png'
import two from './assets/img/2.png'
import three from './assets/img/3.png'
import four from './assets/img/4.png'
import five from './assets/img/5.png'
import six from './assets/img/6.png'
import seven from './assets/img/7.png'
import eight from './assets/img/8.png'
import {delay, eq, forEach, isNull, isUndefined, random} from "lodash";
import {createElement} from "@/pages/Douyin/flower/utils/common";
import './assets/css/index.css'

type ImageEnhancement = {
  dom: HTMLImageElement,
  active: boolean,
  idx: number
}

type ParagraphEnhancement = {
  dom: HTMLParagraphElement,
  active: boolean,
}


class Flowering {

  /* 图片dom列表 */
  imgDomList: ImageEnhancement[] = []

  /**
   * @description 间隙时间 【毫秒】 1分钟
   *              连续点击时间大于该时间，则重新计数
   */
  gapTime: number = 1_000 * 2
  /* 计数器 */
  counter: number = 0
  /* 上一次点击时间 */
  preTimeStamp: number = 0
  /* 上一次出现的图片对象 */
  preImage: ImageEnhancement = null
  container: HTMLElement
  // imgContainer: HTMLElement = createElement<HTMLElement>('div')

  textObj: ParagraphEnhancement = {
    dom: createElement<HTMLParagraphElement>('p'),
    active: false
  }

  /* 事件函数引用 */
  eventReferences: (event: MouseEvent) => void

  /* 是否显示计数器 */

  // private showLabel: boolean = true

  constructor(container: HTMLElement) {
    this.container = container
    this.fillingImgs()
    this.initText()

    this.eventReferences = this.containerClick.bind(this)

    this.container.addEventListener('click', this.eventReferences)
  }

  /* 初始化计数文字标签 */
  initText() {
    const textWrapStyle: Partial<CSSStyleDeclaration> = {
      fontSize: '20px',
      color: '#ffffff',
      fontWeight: '900',
      position: 'absolute',
      width: '120px',
      height: '14px',
      fontStyle: 'italic'
    }

    Object.keys(textWrapStyle).forEach(styleKey => this.textObj.dom.style[styleKey] = textWrapStyle[styleKey])
    this.container.append(this.textObj.dom)
  }

  /* 获取文字对应类名 */
  computedTextSize(count: number): string {
    if (count <= 20) {
      return "text-active-level-1"
    } else if (count <= 50) {
      return "text-active-level-2"
    } else if (count <= 100) {
      return "text-active-level-3"
    } else {
      return "text-active-level-4"
    }
  }


  containerClick(event: MouseEvent) {
    this.counter = (event.timeStamp - this.preTimeStamp >= this.gapTime)
      ? 1
      : this.counter + 1

    /* 点击位置 */
    const {pageX: x, pageY: y} = event

    let preIndex: number = -1
    if (!isNull(this.preImage)) preIndex = this.preImage.idx

    /* 永远不重复于上一张图片 */
    let curIdx = random(this.imgDomList.length - 1)
    while (eq(curIdx, preIndex)) curIdx = random(this.imgDomList.length - 1)

    const randomImgObj = this.imgDomList[curIdx]
    const {dom} = randomImgObj

    randomImgObj.active = true
    dom.style.left = `${x - 30}px`
    dom.style.top = `${y - 30}px`
    dom.style.animationName = `progressive-${random(1, 11)}`
    dom.classList.add("active")

    this.preTimeStamp = event.timeStamp
    this.preImage = randomImgObj

    delay(() => {
      dom.classList.remove("active")
      randomImgObj.active = false
    }, 7_00)

    const textClass = this.computedTextSize(this.counter)
    if (this.textObj.active) return
    this.textObj.dom.style.left = `${x}px`
    this.textObj.dom.style.top = `${y - 70}px`
    this.textObj.dom.innerText = `x ${this.counter}`
    this.textObj.dom.classList.add("animate__animated", "animate__lightSpeedInLeft", textClass)
    this.textObj.active = true

    delay(() => {
      this.textObj.dom.classList.remove("animate__animated", "animate__lightSpeedInLeft", textClass)
      this.textObj.dom.style.opacity = '0'
      this.textObj.active = false
    }, 9_00)
  }


  /* 填装图片， 将图片放置于 body 内 */
  fillingImgs(images?: string[]) {
    if (!isUndefined(images) && images.length < 2) throw new Error("传入的图片不能少于两张")

    forEach(this.imgDomList, imgObj => imgObj.dom.remove())
    this.imgDomList = []
    this.preImage = null

    const imgPathList = images || [one, two, three, four, five, six, seven, eight]

    const imgStyle: Partial<CSSStyleDeclaration> = {
      width: '60px',
      height: '60px',
      position: 'absolute',
      zIndex: '9',
      opacity: '0',
      userSelect: 'none'
    }

    forEach(imgPathList, (img, index) => {
      const imgDom = createElement<HTMLImageElement>('img', {src: img, alt: img})
      Object.keys(imgStyle).forEach(key => imgDom.style[key] = imgStyle[key])

      this.imgDomList.push({dom: imgDom, active: false, idx: index})
      this.container.insertAdjacentElement("beforeend", imgDom)
    })
  }

  /* 销毁特效 */
  dispose() {
    this.container.removeEventListener('click', this.eventReferences)

    forEach(this.imgDomList, imgObj => imgObj.dom.remove())
    this.imgDomList = []
    this.preImage = null

    this.textObj.dom.remove()
  }
}


export {
  Flowering
}




