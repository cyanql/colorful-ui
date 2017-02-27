import Vue from 'vue'
import VueRouter from 'vue-router'
import * as Components from './pages/components'

Vue.use(VueRouter)

const sepRE = /({{|}})/g

function replaceSeparators(text) {
	return text.replace(sepRE, '<span>$1</span>')
}

const routes = Object.keys(Components).map(key => {
	const name = key.toLowerCase()
	const tokens = Components[key]
	const compMap = {}
	let compName, value

	const text = tokens.reduce((prev, token, index) => {
		if (token.type === 'sample') {
			compName = 'sample-case' + index
			value = token.value
			compMap[compName] = value.instance

			return prev + `<sample>
					<template slot="source"><${compName}/></template>
					<template slot="title">${value.title}</template>
					<template slot="description">${value.description}</template>
					<template slot="escape">${replaceSeparators(value.code.escape)}</template>
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
