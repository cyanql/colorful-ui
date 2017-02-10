import Sample from './sample'

export {
	Sample
}

export default {
    install(Vue) {
		Vue.component(Sample.name, Sample)
    }
}
