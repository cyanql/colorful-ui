import Vue from 'vue'
import VueRouter from 'vue-router'
import * as Components from './components'

Vue.use(VueRouter)

const routes = Object.keys(Components).map(key => {
	return {
		path: '/' + key.toLowerCase(),
		component: Components[key]
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

console.log(routes)

export default new VueRouter({
	routes
})
