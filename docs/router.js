import Vue from 'vue'
import VueRouter from 'vue-router'
import * as Components from './pages/components'

Vue.use(VueRouter)

const routes = Object.keys(Components).map(key => {
	const name = key.toLowerCase()
	return {
		path: '/' + name,
		component: Vue.component('docs-' + name, {
			template: `<div>${Components[key]}<div>`
		})
	}
})

routes.unshift({
    path: '',
    redirect: '/button'
})

// routes.push({
//     path: '*',
//     redirect: '/'
// })

export default new VueRouter({
	routes
})
