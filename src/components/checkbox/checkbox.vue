<template>
	<label class="c-checkbox">
		<span class="c-checkbox-mark">
			<span class="c-checkbox-inner" :class="oClass"></span>
			<input class="c-checkbox-input" type="checkbox" @change="onChange" v-model="oChecked">
		</span>
		<span class="c-checkbox-text">
			<slot></slot>
		</span>
	</label>
</template>

<script>
export default {
	name: 'c-checkbox',
	props: {
		checked: {
			type: Boolean,
			default: false
		},
		defaultChecked: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			oChecked: this.checked
		}
	},
	computed: {
		oClass() {
			return this.oChecked ? 'checked' : ''
		}
	},
	methods: {
		onChange(e) {
			this.$emit('change', this.oChecked, e)
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.c-checkbox {
	cursor: pointer;

	&:hover {
		.c-checkbox-inner {
			border-color: $blue-3;
		}
	}

	&-mark {
		position: relative;
		line-height: 1;
	    display: inline-block;
	    vertical-align: middle;
	}

	&-inner {
		display: inline-block;
		position: relative;
		left: 0;
		top: 0;
		width: 16px;
		height: 16px;
		border: 1px solid #d9d9d9;
		border-radius: 3px;
		background-color: #fff;
		transition: background-color .25s ease, border-color .25s ease;

		&.checked {
			background-color: $blue-6;
			border-color: $blue-7;

			&:after {
				transform: rotate(45deg) scale(1);
			}
		}

		&:after {
			position: absolute;
		    content: '';
		    left: 4.5px;
		    top: 1.5px;
		    width: 5px;
		    height: 8px;
		    border-bottom: 2px solid #fff;
		    border-right: 2px solid #fff;
		    transform: rotate(45deg) scale(0);
			transition: transform .2s ease;
		}
	}

	&-input {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -9999;
		visibility: hidden;
		opacity: 0;
		width: 100%;
		height: 100%;
	}

	&-text {
		padding: 0 8px;
	}
}

</style>
