import { createApp } from 'vue'
import App from './App.vue'
import ScrollAnimation from './directives/scrollanimation'
import i18n from './i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDisplay, faServer, faScrewdriverWrench, faDatabase, faCode, faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import brands from "@fortawesome/fontawesome-free-brands";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( brands, faDisplay, faServer, faScrewdriverWrench, faDatabase, faCode, faMobileScreen)

createApp(App)
    .use(i18n)
    .component('font-awesome-icon', FontAwesomeIcon)
    .directive('scrollanimation', ScrollAnimation)
    .mount('#app')
;
