<template>
	<div class="sample">
		<div class="demo">
			<div class="case">
				<slot name="case"></slot>
			</div>
			<div class="title">
				<slot name="title"></slot>
			</div>
			<div class="description">
				<slot name="description"></slot>
			</div>
		</div>
		<div class="code">
			<slot name="code"></slot>
		</div>
	<div>
</template>

<script>
export default {
	name: 'sample'
}
</script>

<style lang="scss">
.sample {
	position: relative;
	margin: 50px 0;
	white-space: nowrap;
	background-color: #fff;
	border: 1px solid rgba(0,0,0,.075);
	overflow: hidden;

	.demo, .code {
		width: 50%;
	}

	.demo {
		vertical-align: top;
		white-space: normal;
		overflow: hidden;
		border-right: 1px solid rgba(0,0,0,.075);

		p {
			margin: 0;
		}

		.case {
			padding: 30px 20px 40px 20px;
			border-bottom: 1px solid rgba(0,0,0,.075);
		}

		.title {
			position: absolute;
			display: inline-block;
			padding: 0 10px;
			font-size: 14px;
			color: #777;
			background-color: #fff;
			transform: translate(10px, -50%);
		}

		.description {
			font-size: 12.5px;
			padding: 30px 20px;
			white-space: pre-wrap;
		}
	}

	.code {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		padding: 20px 30px;
		overflow: scroll;
		box-shadow: 0 0 0 2px rgba(0,0,0,.01);
		background-color: #f8f8f8;

		pre,
		code {
			background-color: #f8f8f8;
		}
	}
}
</style>
