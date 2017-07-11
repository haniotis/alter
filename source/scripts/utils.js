export const shuffleElements = el => {
  for (let i = el.children.length; i >= 0; i--) {
    el.appendChild(el.children[Math.random() * i | 0])
  }
}