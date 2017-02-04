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
		<span class="c-input-label-line">{{label}}</span>
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
        autosize: {
            type: Boolean,
            default: true
        },
        maxlength: Number,
		minlength: Number,
        min: Number,
        max: Number,
        rows: {
            type: Number,
            default: 2
        },
        label: String,
        placeholder: String,
        value: [String, Number],
		floatingLabel: {
			type: Boolean,
			default: false
		},
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
		}
	},
	data() {
		return {
			isFocus: false,
			hasValue: this.value
		}
	},
	computed: {
		oClass() {
			return {
				[this.hintColor]: this.hintVisible,
				'focus': this.isFocus,
				'disabled': this.disabled,
				'has-value': this.hasValue,
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
			this.hasValue = !!e.target.value
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
			this.hasValue = !!this.value
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

$font-normal-size: 16px;
$font-small-size: 12px;

$input-vertical-padding: 20px;
$inner-vertical-padding: 4px;


@mixin input-text() {
	display: block;
	position: absolute;
	top: $input-vertical-padding + $inner-vertical-padding;
	left: 0;
	bottom: 0;
	width: 100%;
	font-size: $font-normal-size;
	color: rgba(0,0,0,.25);
	pointer-events: none;
	overflow: hidden;
	white-space: nowrap;
	text-align: left;
}

@mixin hint-color($color) {
	.c-input-label-line {
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
	width: 300px;
	margin: 0;
	padding: $input-vertical-padding 0;
	color: $text-color;
	font-size: $font-normal-size;

	&.has-value {
		.c-input-placeholder {
			opacity: 0;
		}
	}

	&.focus {
		.c-input-label-line {
			color: $blue-6;

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
			.c-input-label-line {
				top: $inner-vertical-padding;
				font-size: $font-small-size;
			}
		}

		&.focus:not(.has-value) {
			.c-input-placeholder {
				opacity: 1;
				transition: opacity .5s ease;
			}
		}

		.c-input-label-line {
			top: $input-vertical-padding + $inner-vertical-padding;
			font-size: $font-normal-size;
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

	&-label-line {
		@include input-text;
		top: $inner-vertical-padding;
		font-size: $font-small-size;
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
			background-color: $blue-6;
			transition-duration: .2s;
			transition-timing-function: cubic-bezier(.4,0,.2,1);
		}
	}

	&-placeholder {
		@include input-text;
	}

	&-hint {
    	position: absolute;
		color: rgba(0,0,0,.5);
		font-size: $font-small-size;
	}

	&-inner {
		display: block;
	    width: 100%;
	    margin: 0;
	    padding: $inner-vertical-padding 0;
		cursor: inherit;
		outline: none;
		border: none;
    	border-bottom: 1px solid rgba(0,0,0,.15);
		color: inherit;
	    background: 0 0;
	    font-size: $font-normal-size;
	    text-align: left;
	}

	&.error {
		@include hint-color($red-6);
	}

	&.primary {
		@include hint-color($blue-6);
	}

	&.success {
		@include hint-color($green-6);
	}

	&.warning {
		@include hint-color($orange-6);
	}
}
</style>
