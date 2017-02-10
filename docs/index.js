import Vue from 'vue'
import App from './app'
import router from './router'
import DocsUI from './components'
import ColorfulUI from 'src'
import 'highlight.js/styles/vs.css'
import './styles/init.scss'

Vue.use(ColorfulUI)
Vue.use(DocsUI)

const div = document.createElement('div')
div.id = 'app'
document.body.appendChild(div)

new Vue({
	el: '#app',
	router,
	render: (h) => h(App)
})
