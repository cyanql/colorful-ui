<template>
	<div class="c-input" :class="oClass">
		<textarea
			v-if="multiline"
			ref="textarea"
			class="c-input-inner"
			:name="name"
			:rows="rows"
			:required="required"
			:readonly="readonly"
			:disabled="disabled"
			:autofocus="autofocus"
			:value="value"
			@input="onInput"
			@change="onChange"
			@focus="onFocus"
			@blur="onBlur"
			>
		</textarea>
		<input
			v-else
			class="c-input-inner"
			:name="name"
			:type="type"
			:required="required"
			:readonly="readonly"
			:disabled="disabled"
			:autofocus="autofocus"
			:autocomplete="autocomplete"
			:maxlength="maxlength"
			:minlength="minlength"
			:min="min"
			:max="max"
			:value="value"
			@input="onInput"
			@change="onChange"
			@focus="onFocus"
			@blur="onBlur"
		>
		<span class="c-input-placeholder" v-if="placeholder">{{placeholder}}</span>
		<span class="c-input-label-indicator">{{label}}</span>
		<span class="c-input-hint" v-if="hint" v-show="hintVisible">{{hint}}</span>
	</div>
</template>

<script>
import autosize from 'autosize'

export default {
	name: 'c-input',
	props: {
		name: String,
		type: {
			type: String,
			default: 'text'
		},
		required: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		autocomplete: String,
		autofocus: {
			type: Boolean,
			default: false
		},
		maxlength: Number,
		minlength: Number,
		min: Number,
		max: Number,
		floatingLabel: {
			type: Boolean,
			default: false
		},
		label: String,
		placeholder: String,
		value: [String, Number],
		controlled: {
			type: Boolean,
			default: false
		},
		hint: String,
		hintVisible: {
			type: Boolean,
			default: false
		},
		hintColor: {
			type: String,
			default: 'error'
		},
		multiline: {
			type: Boolean,
			default: false
		},
		rows: {
			type: Number,
			default: 2
		},
		autosize: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			isFocus: false
		}
	},
	computed: {
		oClass() {
			return {
				[this.hintColor]: this.hintVisible,
				'focus': this.isFocus,
				'disabled': this.disabled,
				'has-value': this.value,
				'has-floating-label': this.floatingLabel
			}
		}
	},
	methods: {
		onInput(e) {
			this.$emit('input', e.target.value, e)

			if (this.controlled) {
				e.target.value = this.value || ''
			}
		},
		onChange(e) {
			this.$emit('change', e.target.value, e)
		},
		onFocus(e) {
			this.isFocus = true
			this.$emit('focus', e)
		},
		onBlur(e) {
			this.isFocus = false
			this.$emit('blur', e)
		}
	},
	mounted() {
		if (this.multiline && this.autosize) {
			autosize(this.$refs.textarea)
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

@mixin input-secondary() {
	display: block;
	position: absolute;
	top: $input-vertical-padding + $input-inner-vertical-padding;
	left: 0;
	bottom: 0;
	width: 100%;
	color: $input-secondary-color;
	pointer-events: none;
	overflow: hidden;
	white-space: nowrap;
	text-align: left;
}

@mixin hint-color($color) {
	.c-input-label-indicator {
		color: $color;

		&:after {
			left: 0;
			width: 100%;
			visibility: visible;
			background-color: $color;
		}
	}
	.c-input-hint {
		color: $color;
	}
}

.c-input {
	display: inline-block;
	position: relative;
	width: $input-width;
	margin: 0;
	padding: $input-vertical-padding 0;
	color: $input-color;

	&.has-value {
		.c-input-placeholder {
			opacity: 0;
		}
	}

	&.focus {
		.c-input-label-indicator {
			color: $input-primary;

			&:after {
				left: 0;
				width: 100%;
				visibility: visible;
			}
		}
	}

	&.has-floating-label {
		&.has-value,
		&.focus {
			.c-input-label-indicator {
				top: $input-inner-vertical-padding;
				font-size: $font-size-small;
			}
		}

		&.focus:not(.has-value) {
			.c-input-placeholder {
				opacity: 1;
				transition: opacity .5s ease;
			}
		}

		.c-input-label-indicator {
			top: $input-vertical-padding + $input-inner-vertical-padding;
			font-size: $font-size-large;
		}

		.c-input-placeholder {
			opacity: 0;
		}
	}

	&.disabled {
		cursor: not-allowed;

		.c-input-inner {
			border-bottom-style: dashed;
		}
	}

	&-label-indicator {
		@include input-secondary;
		top: $input-inner-vertical-padding;
		font-size: $input-label-font-size;
		transition-duration: .2s;
		transition-timing-function: cubic-bezier(.4,0,.2,1);

		&:after {
			content: '';
			position: absolute;
			left: 45%;
			bottom: $input-vertical-padding;
			width: 10px;
			height: 2px;
			visibility: hidden;
			background-color: $input-primary;
			transition-duration: .2s;
			transition-timing-function: cubic-bezier(.4,0,.2,1);
		}
	}

	&-placeholder {
		@include input-secondary;
		font-size: $input-placeholder-font-size;
	}

	&-hint {
		position: absolute;
		color: rgba(0,0,0,.5);
		font-size: $input-hint-font-size;
	}

	&-inner {
		display: block;
		width: 100%;
		margin: 0;
		padding: $input-inner-vertical-padding 0;
		cursor: inherit;
		outline: none;
		border: none;
		border-bottom: 1px solid $input-secondary-color;
		color: inherit;
		background: 0 0;
		font-size: $input-font-size;
		text-align: left;

		&:hover {
			border-bottom-color: $input-secondary-hover-color;
		}
	}

	&.error {
		@include hint-color($red-6);
	}

	&.primary {
		@include hint-color($input-primary);
	}

	&.success {
		@include hint-color($green-6);
	}

	&.warning {
		@include hint-color($orange-6);
	}
}
</style>
