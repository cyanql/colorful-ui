import React, { Component, PropTypes } from 'react'
import { immutableRenderDecorator }	from 'react-immutable-render-mixin'

@immutableRenderDecorator
export default
class Amount extends Component {
	static propTypes = {
		className: PropTypes.string,
		showZero: PropTypes.bool
	}
	render() {
		const {
			className,
			showZero
		} = this.props

		const amount = this.props.children ? Number(this.props.children) : 0
		const Amount = amount.toFixed(2).toString()

		function formatNum(str){
			var newStr = "";
			var count = 0;
			for(let i = str.indexOf(".")-1;i>=0;i--){
				if(count % 3 == 0 && count != 0){
					newStr = str.charAt(i) + "," + newStr;
				}else{
					newStr = str.charAt(i) + newStr; //逐个字符相接起来
				}
				count++;
			}
			str = newStr + (str + "00").substr((str + "00").indexOf("."),3);
			return str
		}
		let showAmount
		if(Amount.indexOf('-')==0){
			const _amount= Amount.replace('-', '')
			showAmount = '-'+formatNum(_amount)
		} else {
			showAmount = formatNum(Amount)
		}

		return (
			<span className={className} style={{color: this.props.children < 0 ? 'red' : undefined}}>{showZero ? showAmount : (amount == 0 ? '' : showAmount) }</span>
		)
	}
}
