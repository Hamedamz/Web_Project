import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(SuiVue);
Vue.directive('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
})

Vue.filter('formatDate', function (value) {
    if (!value) return ' ';
    let date = value.split("T");
    return date[0] + " " + date[1].substring(0, 5);
})

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')

