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
.c-option {
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
