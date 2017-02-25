<template>
	<div class="c-input c-select" :class="oClass" @click="onClick">
		<div class="c-input-inner">
			<transition-group v-if="multiple" class="c-select-chips" name="chip">
				<span
					class="c-select-chip"
					v-for="(subValue, index) in valueState"
					:key="subValue"
					>
					<span class="c-select-chip-text">{{subValue}}</span>
					<c-icon icon="clear" @click.stop="removeChip(index)"></c-icon>
				</span>
			</transition-group>
			<span v-if="!multiple">{{valueState}}</span>
			<input
				v-if="filterable"
				ref="input"
				class="c-select-input"
				:disabled="disabled"
				:value="filterValue"
				@input="onInput"
				@keydown.delete="onDeleteKeydown"
			>
			<span v-if="filterable" class="c-select-input-mirror" ref="inputMirror"></span>
			<c-icon icon="expand_more"></c-icon>
		</div>
		<span class="c-input-placeholder" v-if="placeholder">{{placeholder}}</span>
		<span class="c-input-label-line">{{label}}</span>
		<span class="c-input-hint" v-if="hint" v-show="hintVisible">{{hint}}</span>
		<transition name="options">
			<ul class="c-select-options" v-if="$slots.default" v-show="isFocus" @click.stop>
				<li class="c-option not-found" v-show="!addible && !hasFilterOptions">Not Found</li>
				<li class="c-option" v-show="addible && filterValue" @click="onSelect(filterValue)">{{filterValue}}<c-ripple></c-ripple></li>
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
		filterable: Boolean,
		addible: Boolean,
		disabled: Boolean,
		value: [String, Array],
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
			valueState: this.multiple ? this.value.slice() : this.value,
			isFocus: false,
			filterValue: '',
			hasFilterOptions: true,
			removeClickoutListener: null
		}
	},
	watch: {
		value(val) {
			this.valueState = val
		},
		isFocus(val) {
			val && this.inputFocus()
		},
		filterValue(val) {
			const input = this.$refs.input
			const inputMirror = this.$refs.inputMirror
			// 加一位空格占位符，增大容差
			inputMirror.textContent = val + ' '
			input.style.width = inputMirror.offsetWidth + 'px'
			this.hasFilterOptions = this.$children.some(vm => vm.visible)
		}
	},
	computed: {
		oClass() {
			return {
				[this.hintColor]: this.hintVisible,
				'focus': this.isFocus,
				'disabled': this.disabled,
				'has-value': (this.multiple ? this.valueState.length > 0 : this.valueState) || this.filterValue,
				'has-floating-label': this.floatingLabel
			}
		}
	},
	methods: {
		removeChip(index) {
			this.valueState.splice(index, 1)
		},
		onClick() {
			this.isFocus = true
			this.inputFocus()
		},
		onSelect(optionValue) {
			if (this.multiple) {
				const index = this.valueState.indexOf(optionValue)
				if (index > -1) {
					this.valueState.splice(index, 1)
				} else {
					this.valueState.push(optionValue)
				}
				this.inputFocus()
				this.filterValue = ''
				this.$emit('input', this.valueState, optionValue)
				this.$emit('select', this.valueState, optionValue)
			} else {
				this.isFocus = false
				this.$emit('input', optionValue)
				this.$emit('select', optionValue)
			}
		},
		onInput(e) {
			this.filterValue = e.target.value
		},
		onDeleteKeydown() {
			if (this.multiple && this.filterValue === '') {
				this.valueState.pop()
			}
		},
		inputFocus() {
			if (this.filterable) {
				this.$refs.input.focus()
			}
		}
	},
	mounted() {
		this.removeClickoutListener = addClickoutListener(this.$el, () => {
			this.isFocus = false
		})
	},
	beforeDestroy() {
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

	.c-option.not-found {
		color: #aaa;
		cursor: not-allowed;

		&:hover {
			background-color: inherit;
		}
	}

	.c-input-inner {
		overflow: hidden;

		& > .c-icon {
			float: right;
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

	.chip {
		&-enter-active,
		&-leave-active {
			transition: transform .2s ease, opacity .2s ease;
		}

		&-enter,
		&-leave-active {
			opacity: 0;
			transform: scale(.5);
		}
	}

	&-chips {
	}

	&-chip {
		display: inline-block;
		padding: 1px 5px 1px 10px;
		margin-right: 2px;
		border-radius: 50px;
		background-color: #dedede;
		cursor: default;
		font-size: 14px;

		.c-icon {
			padding: 1px;
			cursor: pointer;
			line-height: 1;
			vertical-align: text-bottom;

			&:hover {
				border-radius: 50%;
				background-color: #bbb;
			}
		}
	}

	&-input {
		width: 5px;
		outline: none;
		border: none;
		color: $text-color;

		&-mirror {
		    position: absolute;
		    top: -9999px;
		    left: -9999px;
			z-index: -9999;
			visibility: hidden;
			opacity: 0;
		    white-space: pre;
		    pointer-events: none;
		}
	}

	&-options {
		position: absolute;
		left: 0;
		width: 100%;
    	max-height: 250px;
		margin-top: 5px;
		font-size: 12px;
		background-color: #fff;
		z-index: $zindex-menu;
		overflow-y: scroll;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
	}

	.options {
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
