import './styles/reset.scss'
import 'src/lib/classlist-polyfill'
import 'core-js/fn/array/find-index'
import 'core-js/fn/array/includes'
import * as Components from './components'
import * as Transitions from './transitions'

const Colorful =  {
    install(Vue) {
		Object.values(Components).forEach(Component => {
			Component && Component.name && Vue.component(Component.name, Component)
		})
		Object.values(Transitions).forEach(Transition => {
			Transition && Transition.name && Vue.component(Transition.name, Transition)
		})
    }
}

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(Colorful)
}

export default Colorful
