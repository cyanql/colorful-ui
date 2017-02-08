<template>
	<ul class="component">
		<li>
			<p>title</p>
			<c-button @click="titleModalToggle">Toggle</c-button>
			<c-modal title="标题" :visible="titleModalVisible">
				内容
				<div slot="footer">
					<c-button color="ghost" @click="titleModalToggle">Cancel</c-button>
					<c-button color="primary">Enter</c-button>
				</div>
			</c-modal>
		</li>
		<li>
			<p>header</p>
			<c-button @click="headerModalToggle">Toggle</c-button>
			<c-modal :visible="headerModalVisible">
				<h1 slot="header">h1</h1>
				内容
				<div slot="footer">
					<c-button color="ghost" @click="headerModalToggle">Cancel</c-button>
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
			titleModalVisible: false,
			headerModalVisible: false
		}
	},
	methods: {
		titleModalToggle() {
			this.titleModalVisible = !this.titleModalVisible
		},
		headerModalToggle() {
			this.headerModalVisible = !this.headerModalVisible
		}
	}
}
</script>
<style scoped>
.component > li {
	padding: 20px 50px;
}
</style>
