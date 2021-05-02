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

    <div>
      <h2>イベントフォーム</h2>
      <label for="title">TITLE</label>
      <input 
        type="text"
        id='title'
        v-model="eventData.title"
      >
      <p>{{ eventData.title }}</p>
    </div>
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
      eventData: {
        title: "タイトル"
      }
    };
  },
  components: {
    LikeHeader,
    Home,
    About
  }
}

</script>
