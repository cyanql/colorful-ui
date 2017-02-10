const slice = Array.prototype.slice

export default {
	methods: {
		bubble(componentName) {
			const params = slice.call(arguments, 1)

			let parent = this.$parent

			while(parent) {
				if (parent.$options.name === componentName) {
					break
				}
				parent = parent.$parent
			}

			if (parent)
				parent.$emit.apply(parent, params)
		}
	}
}
