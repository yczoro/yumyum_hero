<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div>
    <img alt="Vue logo" class="logo" src="./assets/img/yum_cat.png" width="125" height="125" />
    <p>막냉아~ 고양이 캐릭터 그려줘라!!! 야무지게~</p>
    <p> -- 여기 밑으로 본인 이름이으로 사인 남길것 ex) 홍길동 연결함! --</p>
    <p>혜원 연결 성공함!<img alt="Vue logo" class="logo" src="./assets/img/yum_heart.png" width="125" height="125" /></p>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
