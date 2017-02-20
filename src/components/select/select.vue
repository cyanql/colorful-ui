<template>
	<div class="c-input c-select" :class="oClass" @click="onClick">
		<div class="c-input-inner">
			<span>{{oValue}}</span>
			<c-icon icon="expand_more"></c-icon>
		</div>
		<span class="c-input-placeholder" v-if="placeholder">{{placeholder}}</span>
		<span class="c-input-label-line">{{label}}</span>
		<span class="c-input-hint" v-if="hint" v-show="hintVisible">{{hint}}</span>
		<transition name="scale">
			<ul class="c-select-options" v-if="$slots.default" v-show="isFocus" @click.stop>
				<slot></slot>
			</ul>
		</transition>
	</div>
</template>
<script>
import addClickoutListener from 'src/utils/addClickoutListener'

export default {
	name: 'c-select',
	props: {
		floatingLabel: {
			type: Boolean,
			default: false
		},
		label: String,
		placeholder: String,
		multiple: Boolean,
		value: null,
		hint: String,
		hintVisible: {
			type: Boolean,
			default: false
		},
		hintColor: {
			type: String,
			default: 'error'
		}
	},
	data() {
		return {
			isFocus: false,
			removeClickoutListener: null
		}
	},
	computed: {
		oClass() {
			return {
				[this.hintColor]: this.hintVisible,
				'focus': this.isFocus,
				'disabled': this.disabled,
				'has-value': this.multiple ? this.value.length > 0 : this.value,
				'has-floating-label': this.floatingLabel
			}
		},
		oValue() {
			return this.multiple ? this.value.join(', ') : this.value
		}
	},
	methods: {
		onClick() {
			this.isFocus = true
		},
		onSelect(optionValue) {
			if (this.multiple) {
				const index = this.value.indexOf(optionValue)
				if (index > -1) {
					this.value.splice(index, 1)
				} else {
					this.value.push(optionValue)
				}
			} else {
				this.$emit('input', optionValue)
				this.$emit('select', optionValue)
				this.isFocus = false
			}
		}
	},
	mounted() {
		this.removeClickoutListener = addClickoutListener(this.$el, () => {
			this.isFocus = false
		})
	},
	destroy() {
		this.removeClickoutListener()
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";


.c-select {
	position: relative;
	cursor: pointer;

	&.focus {
		.c-input-inner {
			& > .c-icon {
				transform: rotate(-180deg);
				color: $blue-6;
			}
		}
	}

	.c-input-inner {
		overflow: hidden;

		& > .c-icon {
			float: right;
			line-height: 1.5;
			transition: transform .2s ease;
		}

		&:after {
			content: '';
			display: block;
			clear: both;
			visibility: hidden;
			opacity: 0;
		}
	}

	&-options {
		position: absolute;
		left: 0;
		width: 100%;
		margin-top: 5px;
		font-size: 12px;
		background-color: #fff;
		z-index: $zindex-menu;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
	}

	.scale {
		&-enter-active,
		&-leave-active {
			transform-origin: center 0;
			transition: transform .2s ease, opacity .2s ease;
		}

		&-enter,
		&-leave-active {
			transform: scale(1, 0);
			opacity: 0;
		}
	}
}

</style>
