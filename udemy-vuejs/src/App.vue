<template>
  <div>
    <LikeHeader>
      <h1>こんにちは</h1>
    </LikeHeader>

    <LikeNumber :totalNumber="parent_number" v-on:button-click="parent_number = $event"></LikeNumber>
  
    <!-- keep-aliveの中はキャッシュされる -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>

    <button @click="currentComponent = 'Home'">home</button>
    <button @click="currentComponent = 'About'">about</button>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';
import Home from './components/Home.vue'
import About from './components/Abount.vue'

export default {
  data(){
    return {
      parent_number: 12,
      currentComponent: 'Home',
    };
  },
  components: {
    LikeHeader,
    Home,
    About
  }
}

</script>
