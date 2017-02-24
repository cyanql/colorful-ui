<template>
	<c-dropdown class="c-tooltip" :position="position">
		<slot></slot>
		<template slot="content">
			{{text}}
		</template>
	</c-dropdown>
</template>
<script>
export default {
	name: 'c-tooltip',
	props: {
		position: String,
		text: String
	}
}
</script>
<style lang="scss">
.c-tooltip {
	.c-dropdown-content {
		font-size: 12px;
		color: white;
		padding: 5px 10px;
		border-radius: 3px;
		background-color: rgba(0,0,0,.5);
	}
}
</style>
