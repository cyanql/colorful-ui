# Button


## 示例

::: 颜色
===
颜色类型：除默认、主要、成功、警告、错误、幽灵这6种基本类型以外，还可以通过设置16进制颜色来设置字体颜色
幽灵和16进制类型默认背景色为透明
===
```html
<c-button>default</c-button>
<c-button color="primary">primary</c-button>
<c-button color="success">success</c-button>
<c-button color="warning">warning</c-button>
<c-button color="error">error</c-button>
<c-button color="ghost">ghost</c-button>
<c-button color="#808">#808</c-button>
```
:::


::: 图标
===
当设置`icon`属性时将出现对应的图标，具体值参照`material design`官网
===
```html
<c-button icon="email"></c-button>
<c-button icon="email">icon</c-button>
<c-button icon="email" color="primary">icon</c-button>
```
:::


::: 不可用
===
当设置`disabled`属性为`true`时，按钮即为不可用状态
===
```html
<c-button color="primary" disabled>disabled</c-button>
<c-button disabled>disabled</c-button>
```
:::


::: 加载中
===
当设置`loading`属性为`true`时，则显示加载动画，且不再响应重复点击
===
```html
<c-button loading>loading</c-button>
```
:::


::: 形状
===
当设置`shape`属性为`circle`时，则按钮形状将变更为圆形
===
```html
<c-button shape="circle">circle</c-button>
<c-button shape="circle" icon="email"></c-button>
<c-button shape="circle" icon="email" color="primary"></c-button>
<c-button shape="circle" icon="email" color="#808"></c-button>
```
:::
