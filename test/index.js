import Vue from 'vue'
import Colorful from 'src'

Vue.use(Colorful)

const testsContext = require.context('.', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
