<template>
	<ul>
		<li>
			<p>color</p>
			<c-button @click="toggle">Toggle</c-button>
			<c-modal title="标题" :visible="visible">
				内容
				<div slot="footer">
					<c-button color="ghost" @click="toggle">Cancel</c-button>
					<c-button color="primary">Enter</c-button>
				</div>
			</c-modal>
		</li>
	</ul>
</template>
<script>
export default {
	data() {
		return {
			visible: false
		}
	},
	methods: {
		toggle() {
			this.visible = !this.visible
		}
	}
}
</script>
<style>
li {
	padding: 20px 50px;
}
</style>
