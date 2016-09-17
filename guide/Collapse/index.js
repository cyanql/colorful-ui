import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'
import './collapse.less'
import Icon from '../Icon'

@immutableRenderDecorator
export default
class Collapse extends Component {
	state = {
		showedFullCollapseContent: false,
		showedCollapseFooter: true,
		collapseContentEl: null
	}

	toggleCollapseContent() {
		this.setState({
			showedFullCollapseContent: !this.state.showedFullCollapseContent
		})
	}

	componentDidMount() {
		this.setState({
			collapseContentEl: ReactDOM.findDOMNode(this.refs.collapseContentEl)
		})
	}

	componentWillReceiveProps() {
		const unit = this.props.maxHeight && this.props.maxHeight.match(/[a-z]*$/).toString()
		let height = parseFloat(this.props.maxHeight)
		switch (unit) {
			case 'px':
				break
			case '':
			case 'rem':
				height*=100
				break
			default:
				throw new Error('maxHeight若存在单位，必须为 px || rem，默认单位为rem')
		}
		// this.setState({
		// 	showedCollapseFooter: this.state.collapseContentEl.offsetHeight > height
		// })
		//
	}

	render() {
		const {
			title,
			children,
			className,
			overflow,
			maxHeight,
			...other
		} = this.props

		const {
			showedFullCollapseContent,
			showedCollapseFooter
		} = this.state

		return (
			<div className={["collapse", className].join(' ')} {...other} style={{overflow}}>
				<div className="collapse-title">{title}</div>
				<div
					ref="collapseContentEl"
					className="collapse-content"
					style={{maxHeight: showedFullCollapseContent ? 'none' : maxHeight}}
					>
					{children}
				</div>
				<div
					className="collapse-footer"
					style={{display: !showedFullCollapseContent && showedCollapseFooter ? '' : 'none'}}
					onClick={() => this.toggleCollapseContent()}
					>
					<span>展开</span>
					<Icon className="icon" type="unfold"/>
				</div>
				<div
					className="collapse-footer"
					style={{display: showedFullCollapseContent && showedCollapseFooter ? '' : 'none'}}
					onClick={() => this.toggleCollapseContent()}
					>
					<span>收拢</span>
					<Icon className="icon" type="pack-up"/>
				</div>
			</div>
		)
	}
}
