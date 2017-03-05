# Notification

## 示例



::: 容器
===
**NotificationContainer** 为 **Notification** 的容器，用来管理通知信息，例如确立出现位置、提供过渡效果，限制数量、入队等。获取容器的组件实例，可以调用其`notice`方法来创建通知信息
> 尽量使得容器处于顶级标签，防止祖先级元素设置`overflow:hidden`等影响通知信息显示的属性

===
```html
<template>
	<div>
		<c-input label="text" v-model="text" floating-label></c-input>
		<c-input label="buttonText" v-model="buttonText" floating-label></c-input>
		<c-input label="buttonColor" v-model="buttonColor" floating-label></c-input>
		<c-input type="number" label="duration" v-model="duration" floating-label></c-input>
		<br>

		<c-radio-group v-model="position">
			<c-radio checkedValue="top-left">top-left</c-radio>
			<c-radio checkedValue="top">top</c-radio>
			<c-radio checkedValue="top-right">top-right</c-radio>
			<br>
			<c-radio checkedValue="bottom-left">bottom-left</c-radio>
			<c-radio checkedValue="bottom">bottom</c-radio>
			<c-radio checkedValue="bottom-right">bottom-right</c-radio>
		</c-radio-group>
		<br>

		<c-button @click="notice">notice</c-button>
		<c-notification-container ref="test" :position="position" :only-one="false" enqueued></c-notification-container>
	</div>
</template>
<script>
export default {
	data: () => ({
		text: 'TEXT CONTENT',
		buttonText: 'UNDO',
		buttonColor: '#b8b',
		duration: 2000,
		position: 'bottom-left'
	}),
	methods: {
		notice() {
			const opts = {
				text: this.text,
				buttonText: this.buttonText,
				buttonColor: this.buttonColor,
				duration: this.duration
			}
			this.$refs.test.notice(opts)
		}
	}
}
</script>

<style scoped>
.c-radio {
	padding: 5px 10px 5px 0;
}

.c-radio-group {
	margin: 10px 0;
}
</style>
```
:::

::: 外部调用
===
调用 **Notification** 组件（非实例）上的`notice`方法，首次调用自动创建容器，可通过`destroy`方法主动销毁容器
===
```html
<template>
	<c-button @click="notice">notice</c-button>
</template>
<script>
import { Notification } from 'src/components'
const notice = Notification.notice
const destroy = Notification.destroy

// 用于浏览器测试，可打开Chrome开发者工具，在控制台调用
global.notice = notice
global.destroy = destroy

export default {
	methods: {
		notice() {
			notice({
				text: 'TEXT CONTENT',
				buttonText: 'UNDO',
				buttonColor: '#b8b',
				duration: 2000,
				position: 'bottom-left'
			})
		}
	},
	beforeDestroy() {
		destroy()
	}
}
</script>
```
:::
## API

### NotificationContainer

| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| position   | 设置位置，可选值为`top-left` `top` `top-right` `bottom-left` `bottom` `bottom-right` | string   | 'bottom-left'     |
| only-one | 用于限制同时出现的通知信息的数量                 | boolean   | false |
| enqueued | 设置是否排队，及当前一条信息消失时才显示下一条信息   | boolean   | false |

### notice options
| 属性      | 说明                                       | 类型       | 默认值   |
| ------- | ---------------------------------------- | -------- | ----- |
| message   | 通知信息内容							 | string   | -     |
| buttonText   | 通知信息按钮文本							 | string   | -     |
| buttonColor   | 通知信息按钮颜色，同[**Button**](#/button)一致 | string   | -     |
| duration   | 通知信息持续显示时间							 | number   | 2000   |
