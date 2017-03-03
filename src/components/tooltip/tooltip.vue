<template>
	<c-dropdown class="c-tooltip" :position="position" :delay="0">
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
@import "~src/styles/variables";
.c-tooltip {
	.c-dropdown-content {
		color: $tooltip-color;
		font-size: $tooltip-font-size;
		padding: $tooltip-padding;
		border-radius: $tooltip-border-radius;
		background-color: $tooltip-bg-color;

		&.top,
		&.top-left,
		&.top-right {
			&:after{border-top-color: $tooltip-bg-color;}
		}
		&.bottom,
		&.bottom-left,
		&.bottom-right {
			&:after{border-bottom-color: $tooltip-bg-color;}
		}
		&.left,
		&.left-top,
		&.left-bottom {
			&:after{border-left-color: $tooltip-bg-color;}
		}
		&.right,
		&.right-top,
		&.right-bottom {
			&:after{border-right-color: $tooltip-bg-color;}
		}

	}
}
</style>
