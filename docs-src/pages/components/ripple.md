# Ripple

## 示例

::: 使用
===
依赖父级元素（非组件）的`position`值定位，背景色与父级的`color`的值同步
===
```html
<template>
	<div class="parent">
		click me
		<c-ripple></c-ripple>
	</div>
</template>
<style scoped>
.parent {
	position: relative; /*required*/
	color: blue;
	text-align: center;
	line-height: 50px;
}
</style>
```
:::



## 要求

父级元素的`position`属性为非`static`的值
