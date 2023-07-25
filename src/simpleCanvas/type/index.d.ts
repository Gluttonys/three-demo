declare namespace SimpleCanvas {

  type LayerOpt = {
    name?: string
    zIndex?: number
  }

  type GridOpt = {
    font?: Omit<Parts.TextOpt, 'content'>
    line?: {
      color?: string
      spacing?: number
    }
  }

  type Point = [number, number]

  namespace Parts {

    type Opt = {
      x?: number
      y?: number
      zIndex?: number
    }

    type Dash = {
      /**
       * @description 当该属性数组有值时， 该线段为虚线
       * 数组内值表示虚线周期间隔
       */
      dashLine?: number[]
      /**
       * @description 虚线起始偏移量， 单独使用无效， 要和 【dashLine】 配合使用
       */
      dashLineOffset?: number
    }

    type RectOpt = Opt & {
      width?: number
      height?: number
      backgroundColor?: string
    }

    type StrokeRect = Omit<RectOpt, 'backgroundColor'> & {
      borderColor: string
      lineWidth?: number
    }

    type RegionOpt = Opt & {
      pathList: Point[]
      backgroundColor?: string
    }

    type LineOpt = Opt & Dash & {
      pointList: [Point, Point]
      /**
       * @description 曲率点 A
       * 当 曲率点A | B 只存在一个时， 该线段为二次贝塞尔曲线
       * 当 曲率点A | B 都存在时候， 该线段为三次贝塞尔曲线
       */
      curvatureA?: Point,

      /**
       * @description 曲率点 B
       */
      curvatureB?: Point
      lineWidth?: number
      color?: string
    }


    type ImageOpt = Opt & {
      src: string
      width?: number
      height?: number
      backgroundColor?: string
    }


    type TextOpt = Opt & {
      content: string
      color?: string
      fontSize?: number
      fontStyle?: string
      stroke?: boolean
      textAlign?: 'start' | 'end' | 'left' | 'right' | 'center'
      textBaseline?: 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom'
      direction?: 'ltr' | 'rtl' | 'inherit'
      maxWidth?: number
      backgroundColor?: string
    }


  }


}
