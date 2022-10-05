/**
 * @desc 返回一个dom
 * @param tag  element tag
 * @param attribute  element 属性
 * @param content    innerText
 */
const createElement = <T extends HTMLElement>(tag: string, attribute?: Record<string, any>, content?: string): T => {
  const element = document.createElement(tag) as T

  if (attribute) {
    Object.keys(attribute).forEach(key => element[key] = attribute[key])
  }

  element.textContent = content

  return element
}


export {
  createElement
}
