export function SVGCurveArcShaper(originX, originY, endX, endY) {
  let deltaOffset = 0.5;
  let deltaX = endX - originX;
  let deltaY = endY - originY;

  let originHandleX = originX + (deltaX * deltaOffset);
  let originHandleY = originY;
  let endHandleX = endX;
  let endHandleY = endY - (deltaY * deltaOffset);

  return [originHandleX, originHandleY, endHandleX, endHandleY]
}

export function SVGCurveSShaper(originX, originY, endX, endY) {
  let deltaOffset = 0.5;
  let deltaX = endX - originX;

  let originHandleX = originX + (deltaX * deltaOffset);
  let originHandleY = originY;

  let endHandleX = endX - (deltaX * deltaOffset);
  let endHandleY = endY;

  return [originHandleX, originHandleY, endHandleX, endHandleY]
}
