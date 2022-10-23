import {isUndefined} from "lodash";

const blockingCesiumError = () => {
  const iframe = document.getElementsByClassName("cesium-infoBox-iframe")[0]
  if (isUndefined(iframe)) return

  iframe.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms")
  iframe.setAttribute("src", "")
}


export {
  blockingCesiumError
}
