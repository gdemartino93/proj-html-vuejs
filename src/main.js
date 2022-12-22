import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css"


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import {faLayerGroup, faMagnifyingGlass, faSquare,faMaximize, faExpand, faDesktop } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faUser,faStackOverflow,faGithub,faMagnifyingGlass,faSquare,faLayerGroup,faMaximize,faExpand,faDesktop, faCircleCheck)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')