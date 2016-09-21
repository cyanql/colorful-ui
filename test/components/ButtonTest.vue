<template>
	<div>
		<p>type button</p>
		<colorful-button class="type" type="button">测试</colorful-button>
		<p>color-type primary</p>
		<colorful-button class="color-type" :color="color">测试</colorful-button>
		<p>color-hex #369</p>
		<colorful-button class="color-hex" color="#336699">测试</colorful-button>
		<p>icon exist && type what</p>
		<colorful-button class="icon-button" icon="circle">测试</colorful-button>
		<p>style background: #369</p>
		<colorful-button class="style" :style="{backgroundColor: '#336699'}">测试</colorful-button>
		<p>className</p>
		<colorful-button class="class">测试</colorful-button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			color: 'default'
		}
	}
}
</script>
