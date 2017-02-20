export default function(vm, name) {
	let parent = vm.$parent

	while(parent) {
		if (parent.$options.name === name) {
			break
		}
		parent = parent.$parent
	}

	return parent
}
