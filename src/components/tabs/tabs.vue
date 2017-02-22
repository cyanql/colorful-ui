<template>
	<div class="c-tabs" :class="oClass">
		<ul class="c-tabs-nav" ref="nav">
			<li
				v-for="(item, index) in tabs"
				:class="index === activeTabIndex && 'active'"
				@click="ctrlClick($event, item, index)"
				>
				<c-icon icon="item.icon" v-if="item.icon"></c-icon>
				<span>{{item.title}}</span>
				<c-ripple></c-ripple>
			</li>
			<div class="c-tabs-nav-indicator" :style="indicatorStyle"></div>
		</ul>
		<div class="c-tabs-content" :style="contentStyle">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'c-tabs',
	props: {
		value: null,
		color: {
			type: String,
			default: 'default',
			validator(value) {
				return !value || ['default', 'primary', 'success', 'warning', 'error'].includes(value) || value.indexOf('#') === 0
			}
		}
	},
	data() {
		return {
			tabs: [],
			activeTabIndex: NaN,
			indicatorStyle: null
		}
	},
	watch: {
		tabs(value) {
			this.activeTabIndex = value.findIndex(v => v.value === this.value)
		}
	},
	computed: {
		oClass() {
			return [this.color]
		},
		contentStyle() {
			return {
				transform: `translateX(-${this.activeTabIndex}00%)`
			}
		}
	},
	methods: {
		ctrlClick(e, item, index) {
			this.activeTabIndex = index
			this.adjustIndicatorPostion(e.currentTarget)
			this.$emit('change', item.value, index)
		},
		adjustIndicatorPostion(el) {
			this.indicatorStyle = {
				left: el.offsetLeft + 'px',
				right: this.$refs.nav.offsetWidth - el.offsetLeft - el.offsetWidth + 'px'
			}
		}
	},
	mounted() {
		this.tabs = this.$children.map((vm, i) => vm.$options.propsData)
		this.$nextTick(() => {
			this.adjustIndicatorPostion(this.$refs.nav.children[this.activeTabIndex])
		})
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

@mixin color-type($color, $background-color) {
	.c-tabs-nav {
		color: $color;
		background-color: $background-color;

		&-indicator {
			background-color: $color;
		}
	}
}

.c-tabs {
	overflow: hidden;

	&.default { @include color-type($text-color, #f7f7f7); }
	&.primary { @include color-type(white, $blue-6); }
	&.success { @include color-type(white, $green-6); }
	&.warning { @include color-type(white, $orange-6); }
	&.error { @include color-type(white, $red-6); }

	&-nav {
		position: relative;
		display: flex;

		&  > li {
			position: relative;
			display: inline-block;
			flex: 1;
			padding: 0 30px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			opacity: .6;

			&.active {
				opacity: 1;
			}
		}

		&-indicator {
			position: absolute;
			bottom: 0;
			height: 2px;
			transition: left .3s cubic-bezier(.645,.045,.355,1), right .3s cubic-bezier(.645,.045,.355,1);
		}
	}

	&-content {
		// display: table;
		// word-spacing: -1em;
    	word-spacing: -.31em; /* webkit */
		white-space: nowrap;
		transition: transform .5s ease;
	}
}

</style>
