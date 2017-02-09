import Vue from 'vue'
import App from './app'
import router from './router'
import Colorful from 'src'
import './styles/init.scss'

Vue.use(Colorful)

const div = document.createElement('div')
div.id = 'app'
document.body.appendChild(div)

new Vue({
	el: '#app',
	router,
	render: (h) => h(App)
})
