import Vue from 'vue'

const sizes = Vue.observable({
  breakpoint: '',
  // eslint-disable-next-line
  sm: false, md: false, lg: false, xl: false,
  // eslint-disable-next-line
  smOnly: false, mdOnly: false, lgOnly: false,
  // eslint-disable-next-line
  smDown: false, mdDown: false, lgDown: false, xlDown: false
})

_sizeListener()

window.addEventListener('resize', _sizeListener)

function _sizeListener () {
  const w = window.innerWidth
  if (w < 640) {
    Object.assign(sizes, _updateSize('xs', ['smDown', 'mdDown', 'lgDown', 'xlDown']))
  } else if (w < 768) {
    Object.assign(sizes, _updateSize('sm', ['sm', 'xlDown', 'lgDown', 'mdDown', 'smOnly']))
  } else if (w < 1024) {
    Object.assign(sizes, _updateSize('md', ['md', 'sm', 'xlDown', 'lgDown', 'mdOnly']))
  } else if (w < 1280) {
    Object.assign(sizes, _updateSize('lg', ['lg', 'md', 'sm', 'xlDown', 'lgOnly']))
  } else {
    Object.assign(sizes, _updateSize('xl', ['xl', 'lg', 'md', 'sm']))
  }
}

function _updateSize (breakpoint, items) {
  Object.keys(sizes).forEach((k) => {
    sizes[k] = items.includes(k)
  })
  sizes.breakpoint = breakpoint
}

export default (ctx, inject) => {
  inject('screen', sizes)
}
