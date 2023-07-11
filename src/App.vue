<script setup>
  import Header from './components/layout/header/header.vue'
  import Footer from './components/layout/footer/footer.vue'
</script>

<template>
  <Header></Header>
  <div id="container">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>
