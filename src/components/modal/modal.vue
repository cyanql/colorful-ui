<template>
	<transition name="modal" @enter="enter">
		<div class="c-modal" v-show="visible">
			<div class="c-modal-mask"></div>
			<div class="c-modal-container" :style="{transformOrigin}">
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
		title: String,
		closeButtonDisabled: Boolean,
		maskButtonDisabled: Boolean
	},
	data() {
		return {
			position: null,
			transformOrigin: 'center'
		}
	},
	methods: {
		enter(el) {
			let rect, x, y, left, top, position
			position = this.position
			// rect中的left不包含translate的偏移量，即translateX(-50%)
			// 所以实际left = 目前所处于位置的x + 50%的width
			rect = el.querySelector('.c-modal-container').getBoundingClientRect()
			console.log(rect)
			left = rect.left - 520 / 2
			top = rect.top - 176 / 2
			x = position.x - left + 'px'
			y = position.y - top + 'px'
			this.transformOrigin = [x, y].join(' ')
		}
	},
	mounted() {
		document.addEventListener('mousedown', e => {
			this.position = {
				x: e.clientX,
				y: e.clientY
			}
		})
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.c-modal {
	&-mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1050px;
		background-color: rgba(0,0,0,.5);
	}

	&-container {
		position: fixed;
		width: 520px;
		top: 50%;
		left: 50%;
		padding: 0 20px;
		border-radius: 3px;
		background-color: #fff;
		transform: translateX(-50%) translateY(-50%) scale(1);
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
	}


	&-title {
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
	    max-height: 639px;
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
			// opacity: 1;
			transform: translateX(-50%) translateY(-50%) scale(0);
		}
	}
}
</style>
