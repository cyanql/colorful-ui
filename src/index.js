import './styles/reset.scss'
import Vue from 'vue'
import * as Components from './components'

export default {
    install(Vue) {
		Object.values(Components).forEach(Component => {
			Component && Component.name && Vue.component(Component.name, Component)
		})
    }
}
