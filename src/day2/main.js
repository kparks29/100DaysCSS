import './main.css';

function handleOnClick() {
  const keys = ['top', 'middle', 'bottom']

  for (const key of keys) {
    const element = document.querySelector(`#${key}`)
    if (element.classList.contains(`hamburger-close-${key}`)) {
      // remove close
      element.classList.remove(`hamburger-close-${key}`)
      void element.offsetHeight // force reflow
      // add open
      element.classList.add(`hamburger-open-${key}`)
    } else if (element.classList.contains(`hamburger-open-${key}`)) {
      // remove open
      element.classList.remove(`hamburger-open-${key}`)
      void element.offsetHeight // force reflow
      // add close
      element.classList.add(`hamburger-close-${key}`)
    } else {
      // first time add close
      element.classList.add(`hamburger-close-${key}`)
    }
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('#hamburger')
  hamburger.addEventListener('click', handleOnClick)
})
