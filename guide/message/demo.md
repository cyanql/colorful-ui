---
category: Components
chinese: 全局提示
type: 展示
noinstant: true
english: Message
---

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## API

- `message.success(content, duration)`
- `message.error(content, duration)`
- `message.info(content, duration)`
- `message.loading(content, true)`

组件提供了四个静态方法，参数如下：

| 参数       | 说明           | 类型                       | 默认值       |
|------------|---------------|----------------------------|--------------|
| content    | 提示内容       | React.Element or String    | 无           |
| duration   | 自动关闭的延时，单位秒 | number  or bool     | 1.5          |
```
import React from 'react';
import ReactDom from 'react-dom';
import message from './components/Message';
var Msg = React.createClass({

	render: function() {
		console.log('进入main.js的Msg中');
		return (<div style={{width:500,height:500}}>
				<button onClick={function(){
					message.info('ggggg', 0);
				}}>提示</button>
				<button  onClick={function(){
					message.warn('ggggg', 4);
				}}>警告</button>
				<button  onClick={function(){
					message.error('ggggg', 5);
				}}>错误</button>
				<button  onClick={function(){
					message.success('ggggg', 2);
				}}>成功</button>
			</div>)
	}
});
var mainCom = ReactDom.render(
	< Msg  />,
	document.getElementById('content'),
	function() {
		console.log('渲染完成!');
	}
);