import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faCaretDown,
  faCaretRight,
  faCode,
  faEnvelope,
  faList,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faJs
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
  faBars,
  faCaretDown,
  faCaretRight,
  faCode,
  faEnvelope,
  faList,
  faJs,
  faTimes,

  faGithub
)

Vue.component('b-icon', {
  functional: true,
  render (createElement, context) {
    return createElement(FontAwesomeIcon, context.data)
  }
})
