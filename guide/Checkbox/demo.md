---
category: components
chinese: 多选框
english: Checkbox
type: 木偶组件
---

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。


## API

按钮的属性说明如下：

属性 | 说明 | 类型 | 可选值 | 默认值
-----|-----|-----|-----|------
| checked | 指定当前是否选中 | boolean  |   | false  |
| style | 附加样式 | object |  | ｛｝ |
| onChange | 变化时回调函数 |Function(e: Event)|  |  | |
| className ｜ 增加的类名 ｜ string ｜ －
| checkedColor | 选中时chenxbox的底色 | string | -

 并且除了上表中的属性，其它属性都会直接传到 `<span></span>`。
----
示例：
```
import React from 'react';
import ReactDom from 'react-dom';
import Checkbox from './components/Checkbox';
const CheckboxTest = React.createClass({ 
	render: function(){
		return (
			<div style={{margin:20,width:200}}>
				<Checkbox checked={true} style={{display:'block'}}/>
			</div>
			
		)
	}
});

var mainCom = ReactDom.render(
  <CheckboxTest />,
  document.getElementById('content'),
  function() {
    //console.log('渲染完成!');
  }
);
```