import Button from './Button.vue'
import Icon from './Icon.vue'
import DatePicker from './DatePicker.vue'
import './common.less'

export default {
    install(Vue) {
        Vue.component(Button.name, Button)
        Vue.component(Icon.name, Icon)
		Vue.component(DatePicker.name, DatePicker)
    }
}
