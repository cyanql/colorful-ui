<template>
	<ul class="component">
		<li>
			<p>base</p>
			<c-input v-model="text1"></c-input>
		</li>
		<li>
			<p>with placeholder</p>
			<c-input placeholder="placeholder" v-model="text2"></c-input>
		</li>
		<li>
			<p>with label</p>
			<c-input label="label" placeholder="placeholder" v-model="text3"></c-input>
		</li>
		<li>
			<p>with floating-label</p>
			<c-input label="label" placeholder="placeholder" floating-label v-model="text4"></c-input>
		</li>
		<li>
			<p>with controlled, regexp: /^\d*$/</p>
			<c-icon icon="email"></c-icon>
			<c-input placeholder="placeholder" controlled :value="value" @input="input"></c-input>
		</li>
		<li>
			<p>disabled</p>
			<c-input placeholder="placeholder" disabled></c-input>
		</li>
		<li>
			<p>hint</p>
			<c-input hint="hint" hint-visible></c-input>
			<c-input hint="hint" label="primary" hint-color="primary" hint-visible></c-input>
			<c-input hint="hint" label="success" placeholder="placeholder" hint-color="success" hint-visible></c-input>
			<c-input hint="hint" label="warning" placeholder="placeholder" hint-color="warning" hint-visible floating-label></c-input>
		</li>
		<li>
			<p>multiline</p>
			<c-input label="label" placeholder="placeholder" v-model="text6" autosize floating-label multiline></c-input>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			text1: '',
			text2: '',
			text3: '',
			text4: '',
			text5: '',
			text6: ''
		}
	},
	methods: {
		input(value) {
			if (/^\d*$/.test(value)) {
				this.value = value
			}
		}
	}
}
</script>

<style scoped>
p {
	padding: 0;
}
.component > li {
	padding: 20px 50px;
}
</style>
