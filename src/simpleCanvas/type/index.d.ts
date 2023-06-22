declare namespace SimpleCanvas {

  namespace Parts {

    type Opt = {
      x?: number
      y?: number
      zIndex?: number
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
      pathList: [number, number][]
      backgroundColor?: string
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
