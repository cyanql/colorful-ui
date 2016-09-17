import React from 'react'
import './iconfont.less'

export default
class Icon extends React.Component {
	static propTypes = {
		type: React.PropTypes.string,
		className: React.PropTypes.string,
		// style: React.PropTypes.object,
		color: React.PropTypes.string
	}

	render() {
		const {
			className,
			type,
			color,
			style,
			size,
			...other
		} = this.props

		return (
			<i
				{...other}
				className={['icon', 'icon-' + type, className].join(' ')}
				style={Object.assign({
					color,
					fontSize: size && size / 100 + 'rem'
				}, style)}
				>
			</i>
		)
	}
}
