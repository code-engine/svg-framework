export function SetElementAttributes(element, attributes){
  for (let [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value)
  }
}

export function AppendMany(target, ...elements) {
  for (let element of elements) {
    target.appendChild(element);
  }
}
