# Progress


## 示例


::: 进度
===
当百分比为`100`时，状态自动变更为`success`
===
```html
<template>
	<div>
		<c-progress :radius="50" :stroke-width="1" :percent="percent"></c-progress>

		<c-button icon="remove" @click="onDecrease"></c-button>
		<c-button icon="add" @click="onIncrease"></c-button>
	</div>
</template>
<script>
export default {
	data: () => ({
		percent: 50
	}),
	methods: {
		onIncrease() {
			this.percent += 10
		},
		onDecrease() {
			this.percent -= 10
		}
	}
}
</script>
<style scoped>
.c-progress {
	margin: 20px;
}
</style>
```
:::


::: 单独
===
状态，可选值`success` `error` `active`
===
```html
<template>
	<div>
		<c-progress :percent="75"></c-progress>
		<c-progress :percent="75" status="error"></c-progress>
		<c-progress :percent="100"></c-progress>
	</div>
</template>
<style scoped>
.c-progress {
	margin: 20px;
}
</style>
```
:::


## API

| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| radius | 半径（包含`stroke-width`宽度）                    | number   | 25 |
| stroke-width | 描边宽度                                  | number | 5     |
| status | 状态，可选：`success` `error` `active`        	| number | `active`     |
| duration | 动画时间(ms)                            		| number | 500     |
| percent | 进度(0-100)                         				| number | 0     |
