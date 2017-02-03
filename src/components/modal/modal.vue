<template>
	<transition name="modal" @enter="enter">
		<div class="c-modal" v-show="visible">
			<div class="c-modal-mask"></div>
			<div class="c-modal-container" ref="cModalContainer">
				<div class="c-modal-header">
					<slot name="header">
						<span class="c-modal-title">{{title}}</span>
					</slot>
				</div>
				<div class="c-modal-body">
					<slot></slot>
				</div>
				<div class="c-modal-footer">
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
		title: String
	},
	data() {
		return {
			triggerEl: null
		}
	},
	methods: {
		enter(el) {
			let containerEl, triggerRect, x, y

			containerEl = this.$refs.cModalContainer
			triggerRect = this.triggerEl.getBoundingClientRect()

			x = triggerRect.left - containerEl.offsetLeft + 'px'
			y = triggerRect.top - containerEl.offsetTop + 'px'

			containerEl.style.transformOrigin = [x, y].join(' ')
		}
	},
	mounted() {
		document.addEventListener('mousedown', e => {
			this.triggerEl = e.target
		})
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
	z-index: 1050;

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
		background-color: rgba(0,0,0,.5);
		z-index: -1;
	}

	&-container {
		display: inline-block;
		vertical-align: middle;
		text-align: left;
		width: 520px;
		padding: 0 20px;
		border-radius: 3px;
		background-color: #fff;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);

	}


	&-header {
		display: inline-block;
	    padding: 20px 0;
	    font-size: 22px;
	    line-height: 32px;
	    font-weight: 400;
	    border-bottom: none;
	}

	&-body {
		font-size: 16px;
	    color: $text-color;
	    padding: 0 5px;
		padding-bottom: 25px;
	    box-sizing: border-box;
	    overflow-y: hidden;
	}

	&-footer {
		padding: 10px 0;
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
e.clientX - container.clientLeft
e.clientY - container.clientTop
