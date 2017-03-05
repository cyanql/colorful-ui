import Vue from 'vue'
import Notification from './notification'
import NotificationContainer from './notification-container'

Notification.Container = NotificationContainer

function createContainer() {
	const div = document.createElement('div')
	div.id = 'notification-container'
	document.body.append(div)
	const Component = Vue.extend(NotificationContainer)
	return new Component().$mount('#notification-container')
}

let containerVM
Notification.notice = function(opts) {
	containerVM = containerVM || createContainer()
	containerVM.position = opts.position
	containerVM.notice(opts)
}

Notification.destroy = function() {
	if (containerVM) {
		containerVM.$el.parentNode.removeChild(containerVM.$el)
		containerVM = null
	}
}

export default Notification
