import { SetElementAttributes } from "../dom/utils";

export function SVGNode(nodeType, attributes = {}) {
  let node = document.createElementNS('http://www.w3.org/2000/svg', nodeType);
  SetElementAttributes(node, attributes);
  return node;
}

export function SVGDot(x, y, attributes = {}){
  let defaultAttributes = {'fill': '#000000', 'cx': x, 'cy': y, 'r': 5};
  let mergedAttributes = {...defaultAttributes, ...attributes};
  return SVGNode('circle', mergedAttributes);
}

export function SVGCanvas(width, height, attributes = {}) {
  let defaultAttributes = {'width': width, 'height': height};
  let mergedAttributes = {...defaultAttributes, ...attributes};

  return SVGNode('svg', mergedAttributes);
}

export function SVGText(content, attributes = {}) {
  let textNode = SVGNode('text', attributes);
  textNode.textContent = content;
  return textNode
}

export function SVGLine(OriginX, OriginY, EndX, EndY, attributes = {}) {
  let pathString = `M ${OriginX} ${OriginY} L ${EndX}, ${EndY}`;

  let defaultAttributes = {'d': pathString, 'stroke': 'red', 'fill': 'transparent', 'stroke-linecap': 'round', 'stroke-width': 3}
  let mergedAttributes = {...defaultAttributes, ...attributes}

  let line = SVGNode('path', mergedAttributes);
  return line;
}

export function SVGRectangle(x, y, width, height, cornerRadius, attributes = {}) {
  let rectangle = SVGNode('rect');

  let coreAttributes = {"x": x, "y": y, "width": width, "height": height, "rx": cornerRadius};
  let mergedAttributes = {...coreAttributes, ...attributes};

  SetElementAttributes(rectangle, mergedAttributes);

  return rectangle;
}

export function SVGAutoCurve(originX, originY, endX, endY, curveShaper, attributes = {}) {
  let [originHandleX, originHandleY, endHandleX, endHandleY] = curveShaper(originX, originY, endX, endY);
  let pathString = `M ${originX} ${originY} C ${originHandleX} ${originHandleY}, ${endHandleX} ${endHandleY}, ${endX} ${endY}`;

  let defaultAttributes = {'d': pathString, 'stroke': 'black', 'fill': 'transparent', 'stroke-linecap': 'round', 'stroke-width': 3};
  let mergedAttributes = {...defaultAttributes, ...attributes};

  return SVGNode('path', mergedAttributes);
}


export function SVGGroup() {
  return SVGNode('g');
}