import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import ScrollAnimation from './directives/scrollanimation'

createApp(App)
    .use(i18n)
    .directive('scrollanimation', ScrollAnimation)
    .mount('#app')
;
