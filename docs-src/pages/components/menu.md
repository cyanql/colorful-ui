# Menu

## 示例

::: 模式
===
共有`inline`、`vertical`、`horizontal`三种模式
===
```html
<template>
	<div>
		<c-menu>
			<c-menu-item>item 1</c-menu-item>
			<c-menu-item>item 2</c-menu-item>
			<c-menu-item>item 3</c-menu-item>
			<c-sub-menu title="submenu" mode="inline">
				<c-menu-item selected>item 4</c-menu-item>
				<c-menu-item>item 5</c-menu-item>
				<c-sub-menu title="subsubmenu" mode="inline">
					<c-menu-item selected>item 6</c-menu-item>
					<c-menu-item>item 7</c-menu-item>
				</c-sub-menu>
			</c-sub-menu>
		</c-menu>

		<c-menu>
			<c-menu-item>item 1</c-menu-item>
			<c-menu-item>item 2</c-menu-item>
			<c-menu-item>item 3</c-menu-item>
			<c-sub-menu title="submenu" mode="vertical">
				<c-menu-item selected>item 4</c-menu-item>
				<c-menu-item>item 5</c-menu-item>
				<c-sub-menu title="subsubmenu" mode="vertical">
					<c-menu-item selected>item 6</c-menu-item>
					<c-menu-item>item 7</c-menu-item>
				</c-sub-menu>
			</c-sub-menu>
		</c-menu>
	</div>
</template>
<style scoped>
.c-menu + .c-menu {
	margin-top: 30px;
}
</style>
```
:::



## API


### Menu

| 属性      | 说明      | 类型       | 默认值  |
| ------- | ------- | -------- | ---- |
| @select | 状态变化时触发 | function | -    |

### Menu.Item

| 属性       | 说明                         | 类型       | 默认值   |
| -------- | -------------------------- | -------- | ----- |
| selected | 是否选中                       | boolean | false |
| level    | 层级                         | number   | 1     |
| indent   | 缩进距离                       | number   | 30    |
| data     | 存放的数据，待触发`select`事件时做为参数返回 | any   | -    |
| @select  | 状态变化时触发                    | function | -     |


### Menu.SubMenu

| 属性      | 说明                                       | 类型       | 默认值    |
| ------- | ---------------------------------------- | -------- | ------ |
| title   | 标题                                       | string | -      |
| level   | 层级                                       | number   | 1      |
| expand  | 是否展开子菜单                                  | boolean   | false  |
| mode    | 子菜单展开模式，可选值为`inline` `vertical` `horizontal` | string   | `inline` |
| @open   | 子菜单展开时触发                                 | function | -      |
| @close  | 子菜单收拢时触发                                 | function | -      |
| @toggle | 子菜单展开收拢都触发                               | function | -      |

### Menu.ItemGroup

| 属性    | 说明   | 类型       | 默认值  |
| ----- | ---- | -------- | ---- |
| title | 标题   | string | -    |
