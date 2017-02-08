<template>
	<li class="c-menu-item-group">
		<div class="c-menu-item-group-title">{{title}}</div>
		<ul>
			<slot></slot>
		</ul>
	</li>
</template>

<script>
export default {
	name: 'c-menu-item-group',
	props: {
		title: String
	}
}
</script>

<style lang="scss">

.c-menu-item-group {
	&-title {
		padding: 10px 15px;
		font-size: 12px;
		color: rgba(0,0,0,.4);
	}
}
</style>
