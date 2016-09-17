import React from 'react';
import ReactDom from 'react-dom';
import { fromJS } from 'immutable';
import { bindActionCreators, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';
import customStore from 'app/utils/customStore.js';
//import Icon from '../Icon';
import styles from './message.css';
//import Notification from 'rc-notification';

let messagecount = -1;
let globalActions = null;
let messageContainer = document.createElement('div');
document.body.appendChild(messageContainer);

const messageboxState = fromJS([{key: -1}]);
const ADD_MESSAGE = 'ADD_MESSAGE';
const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
const LEAVE_MESSAGE = 'LEAVE_MESSAGE';
const ADD_LOADING = 'ADD_LOADING';
const REMOVE_LOADING = 'REMOVE_LOADING';
const LEAVE_LOADING = 'LEAVE_LOADING';
const Actions = {
	addMessage: (value) => ({
			type: ADD_MESSAGE,
			value
	}),
	removeMessage: (duration, index) => dispatch =>
		setTimeout(() => {
            dispatch({
				type: REMOVE_MESSAGE,
				index
			})
    	}, (duration + 0.2) * 1000
    ),
	leaveMessage: (duration, index) => dispatch =>
		setTimeout(() => {
            dispatch({
				type: LEAVE_MESSAGE,
				index
			})
    	}, duration * 1000
    ),
	addLoading: (value) => ({
		type: ADD_LOADING,
		value
	}),
	removeLoading: () => dispatch =>
	 	setTimeout(() => {
            dispatch({
				type: REMOVE_LOADING
			})
    	}, 0.2 * 1000
    ),
	leaveLoading: () => ({
		type: LEAVE_LOADING
	})
};
function handleData(state = messageboxState, action) {
	return ({
		[ADD_MESSAGE]    : () => state.unshift(fromJS(action.value)),
		[REMOVE_MESSAGE] : () => state.filter(v => v.get('key') !== action.index),
		[LEAVE_MESSAGE]  : () => state.map(v => v.get('key') === action.index ? v.set('close', true) : v),
		[ADD_LOADING]    : () => state.filter(v => v.get('type') !== 'loading').unshift(fromJS(action.value)),
		[REMOVE_LOADING] : () => state.filter(v => v.get('type') !== 'loading'),
		[LEAVE_LOADING]  : () => state.map(v => v.get('type') === 'loading' ? v.set('close', true) : v)
	}[action.type] || (() => state))();
}
const rootReducer = combineReducers({
	messageboxState: handleData
})

let MessageBox = React.createClass({
	render() {
		const { messageboxState, actions } = this.props;
		globalActions = actions;
		return (
			<div className={styles['messagebox']}>
				{messageboxState.map(v => {
					if (v.get('key') === -1) {
						return;
					}
					if (v.get('duration') === true ){
						return(
							<div key={v.get('key')}  className={`${styles[v.get('type')]}${v.get('close') ? ' '+styles['slideLeave'] :' '+styles['slideAppear']}`}>
								<span className={styles['first-dot']}></span>
								<span className={styles['second-dot']}></span>
								<span className={styles['third-dot']}></span>
							</div>
						);
					}
					return(
						<div key={v.get('key')} className={`${styles[v.get('type')]}${v.get('close') ? ' '+styles['slideLeave'] :' '+styles['slideAppear']}`}>
							{v.get('content')}
						</div>
					)
				})}
			</div>
		)
	}
});
function notice(content, duration = 2, type) {
	if (type !== 'loading') {
		globalActions.addMessage({
			content,
			duration,
			type,
			close: false,
			key: ++messagecount
		});
		globalActions.leaveMessage(duration, messagecount);
		globalActions.removeMessage(duration, messagecount);
	} else {
		if (duration === true) {
			globalActions.addLoading({
				content,
				duration,
				type,
				close: false,
				key: ++messagecount
			})
		} else {
			globalActions.leaveLoading();
			globalActions.removeLoading();
		}
	}

}
MessageBox = connect(state => state, dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
}))(MessageBox);

const Store = customStore(rootReducer);

ReactDom.render(
	<Provider store={Store}>
		<MessageBox />
	</Provider>,
	messageContainer
);

export default {
	info(content, duration) {
		return notice(content, duration, 'info');
	},
	success(content, duration) {
		return notice(content, duration, 'success');
	},
	error(content, duration) {
		return notice(content, duration, 'error');
	},
	warn(content, duration) {
		return notice(content, duration, 'warn');
	},
	loading(duration) {
		return notice('loading', duration, 'loading');
	}
}
