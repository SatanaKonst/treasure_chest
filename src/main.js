import {createApp} from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import App from './App.vue'

const publicPath = process.env.NODE_ENV === "production" ? "/treasure_chest/" : "/";

createApp(
    App,
    {
        publicPath: publicPath
    }
).mount('#app')