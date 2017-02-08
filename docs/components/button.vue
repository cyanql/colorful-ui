<template>
	<ul class="component">
		<li>
		<p>color</p>
			<c-button class="test-color">default</c-button>
			<c-button class="test-color" color="primary">primary</c-button>
			<c-button class="test-color" color="success">success</c-button>
			<c-button class="test-color" color="warning">warning</c-button>
			<c-button class="test-color" color="error">error</c-button>
			<c-button class="test-color" color="#808">#808</c-button>
		</li>
		<li>
			<p>icon</p>
			<c-button class="test-icon" icon="email">icon</c-button>
			<c-button class="test-icon" icon="email" color="primary">icon</c-button>
		</li>
		<li>
			<p>style</p>
			<c-button class="test-style" :style="{backgroundColor: '#336699', color: 'white'}">style</c-button>
		</li>
		<li>
			<p>loading</p>
			<c-button class="test-loading" loading>loading</c-button>
		</li>
		<li>
			<p>disabled</p>
			<c-button class="test-loading" disabled>disabled</c-button>
		</li>
		<li>
			<p>shape</p>
			<c-button shape="circle">circle</c-button>
			<c-button shape="circle" icon="email"></c-button>
		</li>
	</ul>
</template>
<style scoped>
.component > li {
	padding: 20px 50px;
}
</style>
