# Table

## 示例



::: 使用
===

===
```html
<template>
	<c-table selectable>
		<c-thead>
			<c-tr>
				<c-th>Name</c-th>
				<c-th>Age</c-th>
				<c-th>Number</c-th>
				<c-th>Weight</c-th>
				<c-th>Gender</c-th>
			</c-tr>
		</c-thead>

		<c-tbody>
			<c-tr v-for="(info, index) in details" :disabled="info.disabled" :value="index" :checked="info.checked">
				<c-td>{{info.name}}</c-td>
				<c-td>{{info.age}}</c-td>
				<c-td>{{info.number}}</c-td>
				<c-td>{{info.weight}}</c-td>
				<c-td>{{info.gender}}</c-td>
			</c-tr>
		</c-tbody>
	</c-table>
</template>
<script>
export default {
	data() {
		return {
			details: [{
				name: 'Mike',
				age: '13',
				number: '1000',
				weight: '60',
				gender: 'male'
			}, {
				name: 'Marry',
				age: '14',
				number: '1001',
				weight: '45',
				gender: 'female',
				disabled: true
			}, {
				name: 'Trump',
				age: '13',
				number: '1002',
				weight: '75',
				gender: 'male'
			}, {
				name: 'Jane',
				age: '13',
				number: '1003',
				weight: '46',
				gender: 'female',
				checked: true
			}]
		}
	}
}
</script>
```
:::


## API

### Table

| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| selectable   | 设置 **Tr** 是否可选					 | boolean   | false     |
| @select| 状态变化时触发                                  | function | -     |

### Table.Thead

### Table.Tbody

### Table.Tr
| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| checked   | 是否选中											 | boolean   | false     |
| disabled   | 在 **Table** 设置`selectable`的情况，禁止功能		 | boolean   | false     |

### Table.Th

### Table.Td
