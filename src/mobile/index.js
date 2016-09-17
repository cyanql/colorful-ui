import Button from './Button.vue'
import Icon from './Icon.vue'

export default {
    install(Vue) {
        Vue.component(Button.name, Button)
        Vue.component(Icon.name, Icon)
    }
}
