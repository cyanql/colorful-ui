import './styles/reset.scss'
import Vue from 'vue'
import * as Components from './components'
import * as Transitions from './transitions'

export default {
    install(Vue) {
		Object.values(Components).forEach(Component => {
			Component && Component.name && Vue.component(Component.name, Component)
		})
		Object.values(Transitions).forEach(Transition => {
			Transition && Transition.name && Vue.component(Transition.name, Transition)
		})
    }
}
