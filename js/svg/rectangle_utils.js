export function GetRectangleAttributes(rectangle) {
  return ["x", "y", "width", "height"].reduce((output, attribute) => {
    output.push(parseInt(rectangle.getAttribute(attribute)))
    return output;
  }, []);
}