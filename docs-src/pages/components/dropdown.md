# Dropdown


## 示例


::: 使用
===
`Dropdown`配置项基本同`Popover`一致，可以理解为`Popover`的另一种使用方式，`$slot.default`为宿主元素，`$slot.content`为内容
===
```html
<template>
	<div>
		<c-dropdown trigger="click">
			<c-button>click</c-button>
			<c-menu slot="content">
				<c-menu-item>item 1</c-menu-item>
				<c-menu-item>item 2</c-menu-item>
				<c-menu-item>item 3</c-menu-item>
				<c-sub-menu title="submenu" @click.stop expand>
					<c-menu-item>item 4</c-menu-item>
					<c-menu-item>item 5</c-menu-item>
				</c-sub-menu>
			</c-menu>
		</c-dropdown>

		<c-dropdown trigger="hover" position="right">
			<c-button>hover</c-button>
			<c-menu slot="content">
				<c-menu-item>item 1</c-menu-item>
				<c-menu-item>item 2</c-menu-item>
				<c-menu-item>item 3</c-menu-item>
				<c-sub-menu title="submenu" mode="vertical">
					<c-menu-item>item 4</c-menu-item>
					<c-menu-item>item 5</c-menu-item>
				</c-sub-menu>
			</c-menu>
		</c-dropdown>

		<c-dropdown>
			1
		</c-dropdown>
	</div>
</template>
```
:::

## 同**Popover**的区别

- **Popover** 定位点为根元素，当`resize`等事件的触发，内容元素需要主动更新坐标
- **Dropdown** 定位点为宿主元素，内容元素由于未脱离原来的DOM结构，自动跟随文档移动


## API

| 属性       | 说明                                       | 类型       | 默认值           |
| -------- | ---------------------------------------- | -------- | ------------- |
| trigger  | 设置触发事件类型，可选值为`hover` `click` 或者不设        | string   | `hover`       |
| position | 设置浮动层显示位置，可选值为`top-left` `top` `top-right` 等12种 | string   | `bottom-left` |
| visible  | 设置初始的浮动层是否显示                             | boolean  | false         |
| @open    | 浮动层显示时触发                                 | function | -             |
| @close   | 浮动层隐藏时触发                                 | function | -             |
| @toggle  | 浮动层显示关闭都触发                               | function | -             |
| $slots.default | 宿主元素                                | component | -     |
| $slots.content | 内容                                | component | -     |
