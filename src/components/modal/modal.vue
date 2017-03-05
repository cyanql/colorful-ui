<template>
	<transition name="modal" @enter="enter">
		<div class="c-modal" v-show="visibleState">
			<div class="c-modal-mask" @click="onClose"></div>
			<div class="c-modal-container" ref="cModalContainer">
				<div class="c-modal-header" v-if="title || $slots.header">
					<slot name="header">
						<span class="c-modal-title">{{title}}</span>
					</slot>
				</div>
				<div class="c-modal-body">
					<slot></slot>
				</div>
				<div class="c-modal-footer" v-if="$slots.footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'c-modal',
	props: {
		visible: Boolean,
		title: String,
		maskClosable: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			visibleState: this.visible,
			triggerEl: null
		}
	},
	watch: {
		visible(val) {
			this.visibleState = val
		},
		visibleState(val) {
			val ? this.$emit('open', val) : this.$emit('close', val)
			this.$emit('toggle', val)
		}
	},
	methods: {
		updateTriggerEl(e) {
			this.triggerEl = e.target
		},
		enter(el) {
			let containerEl, triggerRect, x, y

			containerEl = this.$refs.cModalContainer

			if (this.triggerEl) {
				triggerRect = this.triggerEl.getBoundingClientRect()

				x = triggerRect.left - containerEl.offsetLeft + 'px'
				y = triggerRect.top - containerEl.offsetTop + 'px'
			}

			containerEl.style.transformOrigin = [x, y].join(' ')
		},
		onClose() {
			if (this.maskClosable) {
				this.visibleState = false
			}
		}
	},
	mounted() {
		document.addEventListener('mousedown', this.updateTriggerEl)
	},
	beforeDestroy() {
		document.removeEventListener('mousedown', this.updateTriggerEl)
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.c-modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: center;
	z-index: $zindex-modal;

	&:before {
		content: "";
		display: inline-block;
		width: 0;
		height: 100%;
		vertical-align: middle;
	}

	&-mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: $model-mask-bg-color;
		z-index: -1;
	}

	&-container {
		display: inline-block;
		vertical-align: middle;
		text-align: left;
		width: $model-width;
		padding: $model-padding;
		border-radius: $model-border-radius;
		background-color: #fff;
		box-shadow: $model-box-shadow;
	}


	&-header {
		display: inline-block;
		padding: $model-header-padding;
		font-size: $model-header-font-size;
		font-weight: 400;
		border-bottom: none;
	}

	&-body {
		font-size: $model-body-font-size;
		padding: $model-body-padding;
		box-sizing: border-box;
		overflow-y: hidden;
	}

	&-footer {
		padding: $model-footer-padding;
		text-align: right;
	}
}

.modal {
	&-enter-active,
	&-leave-active {
		transition: opacity .2s ease;

		.c-modal-container {
			transition: transform .2s ease;//, opacity .2s ease-out;
		}
	}

	&-enter,
	&-leave-active {
		opacity: 0;

		.c-modal-container {
			transform: scale(.2);
		}
	}
}
</style>
