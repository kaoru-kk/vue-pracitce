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
      <!-- lazyはchangeで発火する -->
      <input 
        type="text"
        id='title'
        v-model.lazy="eventData.title"
      >
      <pre>{{ eventData.title }}</pre>

      <label for="capacity">最大人数</label>
      <!-- stringで代入されてしまうので.numberをつける -->
      <input 
        type="number"
        id='capacity'
        v-model.number="eventData.capacity"
      >
      <p>{{ typeof eventData.capacity }}</p>
      <p>{{ eventData.capacity }}</p>

      <label for="host">主催者</label>
      <!-- trimは先頭、末尾の空白をきる -->
      <input 
        type="text"
        id='host'
        v-model.trim="eventData.host"
      >
      <p>{{ typeof eventData.host }}</p>
      <pre>{{ eventData.host }}</pre>
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
        title: "タイトル",
        capacity: 4,
        host: 'kaoru'
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
