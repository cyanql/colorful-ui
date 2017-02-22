import Vue from 'vue'
import App from './app'
import router from './router'
import DocsUI from './components'
import ColorfulUI from 'src'
import './styles/init.scss'

Vue.use(ColorfulUI)
Vue.use(DocsUI)

new Vue({
	el: '#app',
	router,
	render: (h) => h(App)
})
