# Dropdown


## 示例


::: 颜色
===
`Dropdown`配置项同`Popover`一致，可以理解为`Popover`的另一种使用方式，`$slot.default`为宿主元素，`$slot.content`为内容
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
				<c-sub-menu title="submenu" expand>
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
	</div>
</template>
```
:::


## API

同[**Popover**](#/popover)一致
