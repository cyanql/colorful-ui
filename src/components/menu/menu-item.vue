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
import Event from 'src/mixins/event'

export default {
	name: 'c-menu-item',
	mixins: [Event],
	props: {
		selected: Boolean,
		level: {
			type: Number,
			default: 1
		},
		indent: {
			type: Number,
			default: 30
		},
		data: null,
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
			return {
				paddingLeft: this.level * this.indent + 'px'
			}
		},
		oClass() {
			return {
				selected: this.selected,
				disabled: this.disabled
			}
		}
	},
	methods: {
		onClick(e) {
			if (!this.disabled) {
				this.$emit('click', e)
				this.bubble('c-menu', 'select', this.data)
				this.triggerHref()
			}
		},
		triggerHref() {
			if (this.autoTriggerHref) {
				const els = this.$el.querySelectorAll('[href]')
				els && els.forEach(el => el.click())
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
