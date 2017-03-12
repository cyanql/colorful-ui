# 更新日志

#### 版本号修订规则

- 主版号：不向下兼容的 API 修改
- 次版号：向下兼容的功能性新增
- 修订号：向下兼容的问题修正
> 举例：版本号 1.2.3 （1为主版号，2为次版号，3为修订号）

---

## 0.1.0
- 新增 **Table** 组件

## 0.0.3
- 修复 **Menu** 初始化子级选中状态下父级不显示的问题
- 修复 **Button** `position`被覆盖的问题
- **Modal**
  + 新增`mask-closable`属性，用于背景层关闭
  + 优化样式
- **Notification**
  + 新增`notice`静态方法，首次调用自动创建 **NotificationContainer** 组件
  + 新增`destroy`静态方法，用于销毁自动创建的 **NotificationContainer** 组件

## 0.0.2
- 新增 **Tooltip** 组件和文档
- 新增 **Select** 组件和文档
- 新增 **Tabs** 组件和文档
- 优化 **Dropdown**
- 优化 **Menu**
- 优化 **Modal**
- 优化 **Popover**
- 优化 `docs-loader` 模块
- 优化样式文件结构及相关变量

## 0.0.1
- 新增 **Button** 组件和文档
- 新增 **Checkbox** 组件和文档
- 新增 **Dropdown** 组件和文档
- 新增 **Icon** 组件和文档
- 新增 **Input** 组件和文档
- 新增 **Menu** 组件和文档
- 新增 **Modal** 组件和文档
- 新增 **Notification** 组件和文档
- 新增 **Popover** 组件和文档
- 新增 **Progress** 组件和文档
- 新增 **Radio** 组件和文档
- 新增 **Ripple** 组件和文档
- 新增 **Spin** 组件和文档
- 新增 **Switch** 组件和文档
- 新增 `docs-loader` markdown处理模块
