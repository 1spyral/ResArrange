import "./assets/main.css"

import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faFileLines, faGear, faList, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import * as pdfjs from "pdfjs-dist"
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url"

// Set up pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker

// Set up fontawesome
library.add(faScrewdriverWrench)
library.add(faList)
library.add(faFileLines)
library.add(faGear)

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon).use(createPinia()).mount("#app")
