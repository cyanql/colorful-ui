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
					<template slot="source-code"><${compName}/></template>
					<template slot="title">${token.value.title}</template>
					<template slot="description">${token.value.description}</template>
					<template slot="escape-code">${token.value.code.escape}</template>
				</sample>`
		} else {
			return prev + token.value
		}
	}, '')

	return {
		path: '/' + name,
		component: Vue.component('docs-' + name, {
			template: `<div>${text}<div>`,
			components: compMap
		})
	}

})

function compileSourceCode(source) {
	const div = document.createElement('div')
	div.innerHTML = source

	const template = div.querySelector('template')
	const script = div.querySelector('script')
	return {
		template: template && template.innerHTML,
		script: script && script.textContent
	}
}



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
