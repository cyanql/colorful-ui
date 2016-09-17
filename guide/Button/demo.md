---
category: components
chinese: 按钮
type: 木偶组件
english: Button
---

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。


## API

按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 设置按钮类型，可选值为 `primary` `ghost` `button` 或者不设 | string | -
style | 按钮的添加样式 可不设 | object | -
onClick | `click` 事件的 handler | function | -
className ｜ 增加的类名 ｜ string ｜ －

`<Button>Hello world!</Button>` 最终会被渲染为
 `<a>Hello world!</a>`，
 并且除了上表中的属性，其它属性都会直接传到 `<a></a>`。
----
