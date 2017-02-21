import getAncester from 'src/utils/getAncester'

export default {
	computed: {
		menuParent() {
			const parent = getAncester(this, 'c-menu')
			if (!parent)
				throw new Error('[menu-item]必须处于[menu]之内')
			return parent
		},
		subMenuParent() {
			return getAncester(this, 'c-sub-menu')
		}
	}
}
