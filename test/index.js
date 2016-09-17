import Vue from 'vue'
import Colorful from 'mobile'

Vue.use(Colorful)

const testsContext = require.context('.', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
