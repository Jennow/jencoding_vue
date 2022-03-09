import { createApp } from 'vue'
import App from './App.vue'
import ScrollAnimation from './directives/scrollanimation'
import i18n from './i18n'

createApp(App)
    .use(i18n)
    .use(i18n)
    .directive('scrollanimation', ScrollAnimation)
    .mount('#app')
;
