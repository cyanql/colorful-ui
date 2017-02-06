import Vue from 'vue'
import Colorful from 'src'

import App from './app'

import Button from './components/button'
import Checkbox from './components/checkbox'
import Dropdown from './components/dropdown'
import Input from './components/input'
import Menu from './components/menu'
import Modal from './components/modal'
import Popover from './components/popover'
import Radio from './components/radio'
import Switch from './components/switch'
// import Ripple from './ripple'

console.log(Button)

Vue.use(Colorful)

// const testsContext = require.context('./components/', true, /\.vue$/)
// testsContext.keys().forEach(testsContext)


const div = document.createElement('div')
div.id = 'root'
document.body.appendChild(div)

new Vue({
	el: '#root',
	render: (h) => h(App)
})
