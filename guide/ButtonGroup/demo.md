---
category: components
chinese: 按钮栏
type: ‘ghost’
english: ButtonGroup
---

按钮栏用于放置多个按钮。

## 何时使用

多个按钮形成一组。


## API

按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 设置按钮类型，可选值为 `primary` `ghost` 或者不设 若Button指定type时则失效| string | ｀ghost｀
style | 按钮栏的添加样式 可不设 | object | -
fixInBottom ｜ 将按钮栏固定在窗口底部，当窗口大小变化时显示或隐藏 可不设 ｜  ｜
onClick | `click` 事件的 handler | function | -
className ｜ 增加的类名 ｜ string ｜ － 

 除了上表中的属性，其它属性都会直接传到 `<div></div>`。
----