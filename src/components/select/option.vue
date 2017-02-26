<template>
	<li
		v-show="visible"
		class="c-option"
		:class="oClass"
		@click="onClick"
		>
		<slot></slot>
		<c-ripple v-if="!disabled"></c-ripple>
	</li>
</template>

<script>
import getAncester from 'src/utils/getAncester'

export default {
	name: 'c-option',
	mixins: [Event],
	props: {
		selected: Boolean,
		value: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	created() {
		if (this.selected) {
			this.oParent.onSelect(this.value)
		}
	},
	computed: {
		oParent() {
			const parent = getAncester(this, 'c-select')
			if (!parent)
				throw new Error('[option]必须处于[select]之内')
			return parent
		},
		oSelected() {
			const parent = this.oParent
			return this.selected || (parent.multiple ? parent.value.indexOf(this.value) > -1 : parent.value === this.value)
		},
		visible() {
			const parent = this.oParent
			if (parent.filterable) {
				return this.value.indexOf(parent.filterValue) > -1
			} else {
				return true
			}
		},
		oClass() {
			return {
				selected: this.oSelected,
				disabled: this.disabled
			}
		}
	},
	methods: {
		onClick(e) {
			if (!this.disabled) {
				this.$emit('click', e)
				this.oParent.onSelect(this.value)
			}
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.c-option {
	position: relative;
	cursor: pointer;
	display: block;
	width: 100%;
	padding: $option-padding;

	&.disabled {
		opacity: .6;
		cursor: not-allowed;
	}

	&:not(.disabled):hover {
		background-color: $option-hover-bg-color;
	}

	&.selected {
		color: $blue-6;
		border-right: 2px solid $blue-6;
		background-color: $option-selected-bg-color;
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
