import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'
import './scroll-view.less'

@immutableRenderDecorator
export default
class ScrollView extends Component {
	static propTypes = {
		children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
		uniqueKey: PropTypes.string,
		savePosition: PropTypes.bool,
		className: PropTypes.string,
		flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
	}
	componentDidMount() {
		const { savePosition, uniqueKey } = this.props
		if (!savePosition) return
		const position = sessionStorage.getItem(uniqueKey) || '0,0'
		sessionStorage.removeItem(uniqueKey)
		const arr = position.split(',')
		const el = ReactDOM.findDOMNode(this.refs[uniqueKey])
		el.scrollTop = arr[0]
		el.scrollLeft = arr[1]
	}
	handleClick() {
		const { savePosition, uniqueKey } = this.props
		if (!savePosition) return
		const el = ReactDOM.findDOMNode(this.refs[uniqueKey])
		const position = el.scrollTop + ',' + el.scrollLeft
		sessionStorage.setItem(uniqueKey, position)
	}
	render() {
		const {
			children,
			uniqueKey,
			className,
			flex,
			style,
			savePosition,
			...other
		} = this.props

		const fullFlex = [flex, flex, 'auto'].join(' ')

		return (
			<div
				{...other}
				ref={uniqueKey}
				className={["scroll-view", className].join(' ')}
				style={Object.assign({
					WebkitBoxFlex: flex,
					flex: flex
				}, style)}
				onClick={() => this.handleClick()}
				>
				{children}
			</div>
		)
	}
}
