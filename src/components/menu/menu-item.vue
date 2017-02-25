<template>
	<li
		class="c-menu-item"
		:class="oClass"
		:style="oStyle"
		@click="onClick"
		>
		<slot></slot>
		<c-ripple v-if="!disabled"></c-ripple>
	</li>
</template>

<script>
import mixin from './mixin'

export default {
	name: 'c-menu-item',
	mixins: [mixin],
	props: {
		selected: Boolean,
		indent: Number,
		value: null,
		disabled: {
			type: Boolean,
			default: false
		},
		autoTriggerHref: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		oStyle() {
			const indent = this.indent || this.menuParent.indent
			let level = this.subMenuParent && this.subMenuParent.level
			level = level ? level + 1 : 1

			return {
				paddingLeft: level * indent + 'px'
			}
		},
		oSelected() {
			const parent = this.menuParent
			return this.selected || (parent.multiple ? parent.valueState.indexOf(this.value) > -1 : this.value && parent.valueState === this.value)
		},
		oClass() {
			return {
				selected: this.oSelected,
				disabled: this.disabled
			}
		}
	},
	created() {
		if (this.selected) {
			this.menuParent.onSelect(this.value)
		}
	},
	methods: {
		onClick(e) {
			if (!this.disabled) {
				this.$emit('click', e)
				this.menuParent.onSelect(this.value)
				this.triggerHref()
			}
		},
		triggerHref() {
			if (this.autoTriggerHref) {
				const els = this.$el.querySelectorAll('[href]')
				Array.from(els).forEach(el => el.click())
			}
		}
	}
}
</script>

<style lang="scss">
.c-menu-item {
	position: relative;
	cursor: pointer;
	display: block;
	text-align: left;
	width: 100%;
	padding: 10px 20px;
	border-radius: 0;

	&.disabled {
		opacity: .6;
		cursor: not-allowed;
	}

	&:not(.disabled):hover {
		background: #e7e7e7;
	}

	&.selected {
		border-right: 2px solid #108ee9;
		background: #f6f6f6;
	}

	a,
	a:hover,
	a:visited,
	a:focus,
	a:link {
		text-decoration: none;
		pointer-events: none;
	}
}
</style>
