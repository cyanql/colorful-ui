import getAncester from 'src/utils/getAncester'
const slice = Array.prototype.slice

export default {
	methods: {
		bubble(componentName) {
			const params = slice.call(arguments, 1)

			const parent = getAncester(this, componentName)

			if (parent)
				parent.$emit.apply(parent, params)
		}
	}
}
