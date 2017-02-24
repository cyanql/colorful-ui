import './styles/reset.scss'
import './polyfill'
import 'src/lib/classlist-polyfill'
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
