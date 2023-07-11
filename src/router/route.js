// 공식사이트 방식으로 불가
import { createRouter, createWebHistory } from 'vue-router'

// 컴포넌트 연결
import main from '../components/main.vue'

// 라우터 연결
const routes = [
    { path: '/', component: main }
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export {router}