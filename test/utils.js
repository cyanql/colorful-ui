import Vue from 'vue'

export function registerComponent(Component, propsData) {
    const New = Vue.extend(Component)
    New.prototype.$ = function(selector) {
        return this.$el.querySelector(selector)
    }
    New.prototype.nextTick = function() {
        return new Promise((resolve) => {
            this.$nextTick(resolve)
        })
    }
    return new New({
        el: 'body',
        replace: false,
		propsData
    })
}



export function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? `rgb(${result.slice(1, 4).map(v =>  parseInt(v, 16)).join(', ')})` : undefined
}
