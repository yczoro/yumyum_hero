<template>
    <div id="header">
        <div class="header-cont">
            <div class="header-logo">
                <a href="">yumyum-hero</a>
            </div>
            <div class="nav-menu">
                <ul>
                    <li>home</li>
                    <li>메뉴1</li>
                    <li>메뉴2</li>
                    <li>메뉴3</li>
                    <li>메뉴4</li>
                    <li>메뉴5</li>
                </ul>
            </div>
        </div>
    </div>
    <Side></Side>
</template>

<script setup>
    import '../../../assets/head.css'
    import { ref, onMounted, reactive  } from 'vue'
    import Side from '../side/side.vue'

    // ref 는 단일 변수형
    const countnum = ref(0)

    // reactive 는 객체형
    const state = reactive({
        count: 0
    }) 

    function counts() {
        
        return state.count++;
    }
</script>