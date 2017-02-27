# Popover

## 示例


::: 目标（宿主）
===
`target`默认值为`parentComponent`，其它可选值`parentNode` `[ref]`
- `parentComponent`父级组件为宿主
- `parentNode`父级节点为宿主
- `[ref]`查找匹配的`ref`

===
```html
<template>
	<div>
		<c-button>
			<span>parentComponent</span>
			<c-popover>
				<p>popover text content</p>
			</c-popover>
		</c-button>

		<button>
			<span>parentNode</span>
			<c-popover target="parentNode">
				<p>popover text content</p>
			</c-popover>
		</button>

		<span ref="xxxx">[ref] + target</span>
		<c-popover target="xxxx">
			<p>popover text content</p>
		</c-popover>
	</div>
</template>
```
:::


::: 触发方式
===
共有`hover` `click`两种触发方式
===
```html
<template>
	<div>
		<c-button>
			<span>hover</span>
			<c-popover trigger="hover">
				<p>popover text content</p>
			</c-popover>
		</c-button>

		<c-button>
			<span>click</span>
			<c-popover trigger="click">
				<p>popover text content</p>
			</c-popover>
		</c-button>
	</div>
</template>
```
:::


::: 位置
===
共有`top-left`、`top`、`top-right`等12种值
===
```html
<template>
	<div>
		<c-button v-for="position in positions">
			<span>{{position}}</span>
			<c-popover :position="position">
				<p>popover text content</p>
				<p>{{position}}</p>
			</c-popover>
		</c-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			positions: [
				'top-left', 'top', 'top-right',
				'bottom-left', 'bottom', 'bottom-right',
				'left-top', 'left', 'left-bottom',
				'right-top', 'right', 'right-bottom'
			]
		}
	}
}
</script>

<style scoped>
.c-button {
	margin: 20px;
}
</style>
```
:::



## API

| 属性       | 说明                                       | 类型       | 默认值           |
| -------- | ---------------------------------------- | -------- | ------------- |
| target   | 设置`parentNode` `parentComponent` 宿主元素的`ref`值  | string   | `parentComponent` |
| trigger  | 设置触发事件类型，可选值为`hover` `click` 或者不设        | string   | `hover`       |
| position | 设置浮动层显示位置，可选值为`top-left` `top` `top-right` 等12种 | string   | `bottom-left` |
| visible  | 设置初始的浮动层是否显示                             | boolean  | false         |
| @open    | 浮动层显示时触发                                 | function | -             |
| @close   | 浮动层隐藏时触发                                 | function | -             |
| @toggle  | 浮动层显示关闭都触发                               | function | -             |
| $slots.default | 浮动层内容                                | component | -     |
