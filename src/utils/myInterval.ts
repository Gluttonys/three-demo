/**
 *
 * @desc interval 实现
 * @param cb    回调函数
 * @param delay 延时时间
 *
 * ! todo 数组扩容
 */
import {find, isUndefined, noop, pad, random} from "lodash";

type TimerStackType = {
  timerRef: number,
  terminationMark: boolean
}

const timerStack: TimerStackType[] = []

const myInterval = (cb: Function, delay: number): number => {
  const timerRef = random(1, 10000)

  /* 迭代上限 */
  const iterationUpperLimit = 1000
  /* 迭代数组 */
  const tempString = pad(" ", iterationUpperLimit)
  const tempList = tempString.split('')

  const flag = {
    terminationMark: true,
    timerRef: timerRef
  }

  timerStack.push(flag)

  tempList.reduce(async (prePromise, curr, index): Promise<boolean> => {
    await prePromise

    if (!flag.terminationMark) return Promise.resolve(false)

    return new Promise((resolve) => {

      const timer = setTimeout(() => {
        cb.call(null, index)
        clearTimeout(timer)
        resolve(true)
      }, delay)

    })
  }, Promise.resolve(true)).then(noop)

  return timerRef
}


export const clearMyInterval = (timerRef: number) => {
  const targetRef = find(timerStack, {timerRef})

  if (isUndefined(targetRef)) return

  targetRef.terminationMark = false
}


export default myInterval
