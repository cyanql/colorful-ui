# Menu

## 示例

::: 内嵌
===

===
```html
<template>
	<div>
		<c-menu v-model="value" multiple>
			<c-menu-item value="item 1">item 1</c-menu-item>
			<c-menu-item value="item 2">item 2</c-menu-item>
			<c-menu-item value="item 3">item 3</c-menu-item>
			<c-sub-menu title="submenu" mode="inline">
				<c-menu-item value="item 4">item 4</c-menu-item>
				<c-menu-item value="item 5">item 5</c-menu-item>
				<c-sub-menu title="sub-submenu" mode="inline">
					<c-menu-item value="item 6">item 6</c-menu-item>
					<c-menu-item value="item 7">item 7</c-menu-item>
				</c-sub-menu>
			</c-sub-menu>
		</c-menu>
		<span>{{value}}</span>
	</div>
</template>
<script>
export default {
	data: () => ({
		value: []
	})
}
</script>
```
:::

::: 垂直
===

===
```html
<template>
	<div>
		<c-menu v-model="value">
			<c-menu-item-group title="group1">
				<c-menu-item value="item 1">item 1</c-menu-item>
				<c-menu-item value="item 2">item 2</c-menu-item>
			</c-menu-item-group>
			<c-menu-item-group title="group2">
				<c-menu-item value="item 3">item 3</c-menu-item>
				<c-sub-menu title="submenu" mode="vertical">
					<c-menu-item value="item 4">item 4</c-menu-item>
					<c-menu-item value="item 5">item 5</c-menu-item>
					<c-sub-menu title="sub-submenu" mode="vertical">
						<c-menu-item value="item 6">item 6</c-menu-item>
						<c-menu-item value="item 7">item 7</c-menu-item>
					</c-sub-menu>
				</c-sub-menu>
			</c-menu-item-group>
		</c-menu>
		<span>{{value}}</span>
	</div>
</template>
<script>
export default {
	data: () => ({
		value: ''
	})
}
</script>
```
:::


## API


### Menu

| 属性      | 说明      | 类型       | 默认值  |
| ------- | ------- | -------- | ---- |
| indent | 缩进	 | number | 20    |
| multiple | 多选，要求`value`类型为数组	| boolean | false  |
| value | 默认选中的 **MenuItem** 值	| any | -  |
| @select | 状态变化时触发 | function | -    |

### Menu.Item

| 属性       | 说明                         | 类型       | 默认值   |
| -------- | -------------------------- | -------- | ----- |
| selected | 是否选中，优先级高（建议不要和`v-model`同时使用） | boolean | false |
| indent   | 缩进距离，优先级高          | number   |  **Menu**的`indent`值   |
| value     | 对应 **Menu** 的`value`		 | any   | -    |


### Menu.SubMenu

| 属性      | 说明                                       | 类型       | 默认值    |
| ------- | ---------------------------------------- | -------- | ------ |
| title   | 标题                                       | string | -      |
| indent   | 缩进距离，优先级高          | number   |  **Menu**的`indent`值   |
| expand  | 是否展开子菜单                                  | boolean   | false  |
| mode    | 子菜单展开模式，可选值为`inline` `vertical` | string   | `inline` |
| @open   | 子菜单展开时触发                                 | function | -      |
| @close  | 子菜单收拢时触发                                 | function | -      |
| @toggle | 子菜单展开收拢都触发                               | function | -      |

### Menu.ItemGroup

| 属性    | 说明   | 类型       | 默认值  |
| ----- | ---- | -------- | ---- |
| title | 标题   | string | -    |
| indent   | 缩进距离(取3/5)，优先级最高          | number   |  **Menu**的`indent`值的3/5   |
