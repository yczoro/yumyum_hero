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