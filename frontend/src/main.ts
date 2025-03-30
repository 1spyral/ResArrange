import "./assets/main.css"

import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faFileLines, faGear, faList, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faScrewdriverWrench)
library.add(faList)
library.add(faFileLines)
library.add(faGear)

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon).use(createPinia()).mount("#app")
