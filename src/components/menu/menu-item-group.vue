<template>
	<li class="c-menu-item-group">
		<div class="c-menu-item-group-title" :style="titleStyle">{{title}}</div>
		<ul>
			<slot></slot>
		</ul>
	</li>
</template>

<script>
import mixin from './mixin'

export default {
	name: 'c-menu-item-group',
	mixins: [mixin],
	props: {
		title: String,
		indent: Number,
	},
	computed: {
		titleStyle() {
			const indent = this.indent || this.menuParent.indent
			let level = this.subMenuParent && this.subMenuParent.level
			level = level ? level + 1 : 1

			return {
				paddingLeft: (level - 2 / 5) * indent + 'px'
			}
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.c-menu-item-group {
	&-title {
		padding: $menu-item-group-title-padding;
		font-size: $menu-item-group-title-font-size;
		color: $menu-item-group-title-color;
	}
}
</style>
