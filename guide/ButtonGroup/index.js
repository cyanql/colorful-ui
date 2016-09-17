import React from 'react'
import immutableRenderMixin from 'react-immutable-render-mixin'
import Button from '../Button'
import './btn-group.less'
import '../All/css/common.css'

const ButtonGroup = React.createClass({
	mixins: [immutableRenderMixin],
	getDefaultProps() {
		return {
			type: 'ghost',
			style: {}
		}
	},
	propTypes: {
		type: React.PropTypes.string,
		style: React.PropTypes.object,
		className: React.PropTypes.string
	},
	render() {
		// 初始化界面
		const { children, className, type, ...other } = this.props
		const availableChildren = children.length ? children : [children]

		return (
			<div
				{...other}
				className={['btn-group', className].join(' ')}
				>
				{availableChildren.map((v, i) =>
					<Button
						{...v.props}
						key={i}
						type={v.props.type ? v.props.type : type}
						>
					</Button>
				)}
			</div>
		)
	}
})
export default ButtonGroup
