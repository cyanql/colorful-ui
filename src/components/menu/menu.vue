<template>
	<ul class="c-menu">
		<slot></slot>
	</ul>
</template>

<script>
export default {
	name: 'c-menu'
}
</script>

<style lang="scss">

.c-menu {
	width: 200px;
	box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);

	&,
	& ul,
	& ol,
	& li {
		list-style: none !important;
	}
}
</style>
