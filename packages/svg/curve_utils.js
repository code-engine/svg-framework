import { AppendMany } from "../dom/utils";
import { SVGAutoCurve, SVGDot, SVGLine } from "./elements";

export function AddSVGAutoCurve(svg, originX, originY, endX, endY, curveShaper) {
  let curve = SVGAutoCurve(originX, originY, endX, endY, curveShaper);
  let [originHandleX, originHandleY, endHandleX, endHandleY] = curveShaper(originX, originY, endX, endY);
  let curveHandles = SVGCurveHandles(originX, originY, endX, endY, originHandleX, originHandleY, endHandleX, endHandleY);

  AppendMany(svg, ...curveHandles);

  svg.appendChild(curve);
}

export function SVGCurveHandles(originX, originY, endX, endY, originHandleX, originHandleY, endHandleX, endHandleY) {
  return [
    SVGDot(originX, originY),
    SVGDot(endX, endY),
    SVGLine(originX, originY, originHandleX, originHandleY),
    SVGDot(originHandleX, originHandleY),
    SVGLine(endX, endY, endHandleX, endHandleY),
    SVGDot(endHandleX, endHandleY),
  ]
}