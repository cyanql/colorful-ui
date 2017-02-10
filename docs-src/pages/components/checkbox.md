# Checkbox


## 示例


::: 颜色
===
颜色类型：除默认、主要、成功、警告、错误、幽灵这6种基本类型以外，还可以通过设置16进制颜色来设置字体颜色
幽灵和16进制类型默认背景色为透明
===
```html
<c-checkbox checked>default</c-checkbox>
<c-checkbox color="primary">primary</c-checkbox>
<c-checkbox color="success">success</c-checkbox>
<c-checkbox color="warning">warning</c-checkbox>
<c-checkbox color="error">error</c-checkbox>
<c-checkbox color="ghost">ghost</c-checkbox>
<c-checkbox color="#808">#808</c-checkbox>
```
:::


::: 不可用
===
当设置`disabled`属性为`true`时，按钮即为不可用状态
===
```html
<c-checkbox checked disabled>disabled</c-checkbox>
<c-checkbox disabled>disabled</c-checkbox>
```
:::
