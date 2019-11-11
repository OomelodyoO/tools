import Vue from 'vue'
import Router from 'vue-router'

const Encryption = () => import("@/components/content/encryption/Encryption");
const Transcoding = () => import("@/components/content/transcoding/Transcoding");
const Time = () => import("@/components/content/time/Time");
const Letter = () => import("@/components/content/letter/Letter");

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'encryption'
        },
        {
            path: '/encryption',
            name: 'encryption',
            components: {default: Encryption}
        },
        {
            path: '/transcoding',
            name: 'transcoding',
            components: {default: Transcoding}
        },
        {
            path: '/time',
            name: 'time',
            components: {default: Time}
        },
        {
            path: '/letter',
            name: 'letter',
            components: {default: Letter}
        }
    ]
})