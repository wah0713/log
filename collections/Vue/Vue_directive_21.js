// 指令

// toos/vue-extension.js
export default function(Vue){
    Vue.directive('loading',function(el,binding){
        // do somethings
    })
}

// main.js
import VueExtension from './toos/vue-extension'
VueExtension(Vue)