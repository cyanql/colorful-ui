<template>
	<colorful-datepicker class="value" :value="date"></colorful-datepicker>
</template>

<script>
export default {
	data() {
		return {
			date: new Date()
		}
	}
}
</script>
