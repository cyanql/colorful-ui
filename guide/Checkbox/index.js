import React from 'react';
import immutableRenderMixin from 'react-immutable-render-mixin';
import styles from './checkbox.css';

const Checkbox = React.createClass({
	mixins: [immutableRenderMixin],
	getDefaultProps() {
		return {
			onChange: () => console.log('Checkbox 未添加onChange事件')
		}
	},
	propTypes: {
		checked: React.PropTypes.bool,
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onChange: React.PropTypes.func,
		checkedColor: React.PropTypes.string
	},
	render() {
		const { className, checkedColor, checked, onChange, ...other } = this.props;

		return (
			<span {...other} className={`${styles[checked ? 'checked' : 'checkbox']}${className ? ' '+ className : ''}`}>
				<span className={styles['inner']} style={checked ? {borderColor: checkedColor, backgroundColor: checkedColor} : {}}></span>
				<input
					type="checkbox"
					className={styles['input']}
					checked={checked}
					onChange={e => onChange(e)}
				/>
			</span>
		)
	}
});
export default Checkbox;
