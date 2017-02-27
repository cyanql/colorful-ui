import Vue from 'vue'
import VueRouter from 'vue-router'
import * as Components from './pages/components'


Vue.use(VueRouter)

const routes = Object.keys(Components).map(key => {
	const name = key.toLowerCase()
	const tokens = Components[key]
	const compMap = {}

	const text = tokens.reduce((prev, token, index) => {
		if (token.type === 'sample') {
			const compName = 'sample-case' + index
			compMap[compName] = token.value.instance

			return prev + `<sample>
					<template slot="source"><${compName}/></template>
					<template slot="title">${token.value.title}</template>
					<template slot="description">${token.value.description}</template>
					<template slot="escape">${token.value.code.escape}</template>
				</sample>`
		} else {
			return prev + token.value
		}
	}, '')

	return {
		name,
		path: '/' + name,
		component: Vue.component('docs-' + name, {
			template: `<div>${text}<div>`,
			components: compMap
		})
	}

})


routes.unshift({
	path: '',
	redirect: '/button'
})

// routes.push({
//	 path: '*',
//	 redirect: '/'
// })

export default new VueRouter({
	routes
})
