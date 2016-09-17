---
category: Components
chinese: 输入框
type: 木偶组件
english: Input
---

## API

按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 设置按钮类型，可选值为 `text` `textarea` | string |
style | 按钮栏的添加样式 可不设 | object | -
className ｜ 增加的类名 ｜ string ｜ － 
placeholder| 默认显示文字｜ string ｜ － 
----
```
import React from 'react';
import ReactDom from 'react-dom';
import Input from './components/Input'

const InputTest = React.createClass({ 
	render: function(){
		return (
			<div style={{margin:20,width:200}}>
				<Input id={"text1"}  placeholder={"hahaha"} style = {{width:'100%',height:50}}/>
				<Input id={"text2"} disabled type={"textarea"} placeholder={"textarea"} style = {{width:'100%',height:50}}/>
			</div>
			
		)
	}
});
const mainCom = ReactDom.render(
	<InputTest />,
	document.getElementById('content'),
	function() {
		//console.log('渲染完成!');
	}
);
```