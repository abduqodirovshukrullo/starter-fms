/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'

import layoutsPlugin from '@/plugins/layouts'
import ability from '@/plugins/casl/ability'
import { abilitiesPlugin } from '@casl/vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core-scss/template/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import VTextEditor from "@core/components/VTextEditor.vue";
loadFonts()


// Create vue app
const app = createApp(App)


// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(layoutsPlugin)
app.use(abilitiesPlugin, ability, {
    useGlobalProperties: true,
})
app.component('VTextEditor',VTextEditor)
// Mount vue app
app.mount('#app')