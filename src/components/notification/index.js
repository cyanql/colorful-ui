import Notification from './notification'
import Notice from './notice'

export const queue = []

Notification.Notice = Notice
Notification.notice = function(messageOrOpts) {
	const opts = typeof messageOrOpts === 'string' ? {
		message: messageOrOpts
	} : messageOrOpts

	queue.push(opts)
}

export default Notification
