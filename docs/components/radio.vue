<template>
	<ul class="component">
		<li>
			<p>color</p>
			<c-radio :checkedValue="1" v-model="radio1">primary</c-radio>
			<c-radio color="success" :checkedValue="2" v-model="radio1">success</c-radio>
			<c-radio color="warning" :checkedValue="3" v-model="radio1">warning</c-radio>
			<c-radio color="error" :checkedValue="4" v-model="radio1">error</c-radio>
			<c-radio color="error" :checkedValue="5" v-model="radio1" disabled>error</c-radio>
		</li>
		<li>
			<p>group</p>
			<c-radio-group v-model="radio2">
				<c-radio :checkedValue="1">primary</c-radio>
				<c-radio color="success" :checkedValue="2">success</c-radio>
				<c-radio color="warning" :checkedValue="3">warning</c-radio>
				<c-radio color="error" :checkedValue="4">error</c-radio>
				<c-radio color="error" :checkedValue="5" disabled>error</c-radio>
			</c-radio-group>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			radio1: '',
			radio2: ''
		}
	}
}

</script>

<style scoped>
.component > li {
	padding: 20px 50px;
}
</style>
