<template>
	<div class="docs">
		<header class="docs-header">
			<!-- <span class="logo">Colorful</span> -->
			<span class="logo">
				<span>C</span>
				<span>o</span>
				<span>l</span>
				<span>o</span>
				<span>r</span>
				<span>f</span>
				<span>u</span>
				<span>l</span>
			</span>
			<nav class="nav">
				<a target="_blank" href="https://github.com/keyves/colorful-ui"><c-button class="github" shape="circle" ghost :ripple-visible="false"><svg aria-hidden="true" width="25" height="25" version="1.1" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></c-button></a>
			</nav>
		</header>
		<c-menu class="docs-sidebar" :value="selectRouteName" :indent="30">
			<c-menu-item-group v-for="group in groups" :title="group.title">
				<c-menu-item v-for="item in group.items" :value="item.name" auto-trigger-href>
					<router-link :to="item.name">
						<span>{{item.english}}</span>
						<span class="chinese">{{item.chinese}}</span>
					</router-link>
				</c-menu-item>
			</c-menu-item-group>
		</c-menu>
		<div class="docs-content docs-markdown">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import conf from './conf'

export default {
	name: 'app',
	data() {
		return {
			groups: conf.groups.filter(v => {
				v.items = v.items.filter(w => !w.disabled)
				return v.items.length > 0
			}).map(v => {
				v.items.map(w => {
					w.name = w.english.toLowerCase()
					return w
				})
				return v
			})
		}
	},
	computed: {
		selectRouteName() {
			return this.$route.name
		}
	}
}
</script>

<style lang="scss">
@import "~src/styles/variables";

.docs {
	&-header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 0 50px;
		line-height: 60px;
		height: 60px;
		box-shadow: 0 0 1px rgba(0,0,0,0.25);
		background-color: #fff;
		z-index: 1;

		&:after {
			content: '';
			clear: both;
		}

		.logo {
			display: inline-block;
			font-weight: bold;
			font-size: 10px;
			font-family: fantasy;
			vertical-align: middle;

			& > span {
				font-size: 20px;
				vertical-align: -webkit-baseline-middle;

				&:nth-child(1) {color: $blue-6;}
				&:nth-child(2) {color: $red-6;}
				&:nth-child(3) {color: $yellow-6;}
				&:nth-child(4) {color: $green-6;}
				&:nth-child(5) {color: $red-6;}
				&:nth-child(6) {color: $blue-6;}
				&:nth-child(7) {color: $yellow-6;}
				&:nth-child(8) {color: $green-6;}
			}
		}

		.nav {
			display: inline-block;
			float: right;

			.github {
				display: inline-block;
				vertical-align: middle;

				&:hover {
					opacity: .5;
				}
			}
		}
	}

	&-sidebar {
		position: fixed;
		top: 60px;
		left: 0;
		bottom: 0;
		height: 100%;
		overflow-y: scroll;
		padding-top: 20px;
		padding-bottom: 200px;
		width: 200px;
		white-space: nowrap;
		z-index: 1;

		.chinese {
			font-size: 12px;
			opacity: .7;
		}

		a {
			color: inherit;
		}
	}

	&-content {
		margin-top: 60px;
		margin-left: 200px;
		padding: 50px;
		padding-bottom: 200px;
		// overflow-y: scroll;
		// overflow-x: hidden;
	}
}
</style>
