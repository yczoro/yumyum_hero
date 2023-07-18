<script setup>
    import Side from '../side/side.vue'
</script>
<template>
    <div id="header">
        header
        <button @click="count++">
            숫자 세기: {{ count }}
        </button>
        <Side></Side>
        <p>우하하하 소라짱</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        }
    }
</script>