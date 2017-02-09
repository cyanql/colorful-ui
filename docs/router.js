import Vue from 'vue'
import VueRouter from 'vue-router'
import * as Components from './components'

Vue.use(VueRouter)

const routes = Object.keys(Components).map(key => {
	return {
		path: '/' + key.toLowerCase(),
		component: Vue.component(key, {
			template: '<div v-html="html"><div>',
			data: () => ({
				html: Components[key]
			})
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
