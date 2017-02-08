<template>
	<ul class="component">
		<li>
			<p>color</p>
			<c-switch checked>primary</c-switch>
			<c-switch color="success" checked>success</c-switch>
			<c-switch color="warning" checked>warning</c-switch>
			<c-switch color="error" checked>error</c-switch>
		</li>
	</ul>
</template>
<style scoped>
.component > li {
	padding: 20px 50px;
}
</style>
