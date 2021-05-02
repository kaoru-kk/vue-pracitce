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

      <!-- v-model、input typetextの時は以下のことをしている -->
      <input 
        type="text"
        id='title'
        :value="eventData.title"
        @input='eventData.title = $event.target.value'
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

      <label for='detail'></label>
      <textarea v-model='eventData.detail' id="detail" cols="30" rows="10"></textarea>
      <pre>{{ eventData.detail }}</pre>
      <p>{{ eventData.detail }}</p>

      <label for="isPrivate">非公開</label>
      <input 
        type="checkbox"
        id="isPrivate"
        v-model="eventData.isPrivate"
      >
      <p>{{ eventData.isPrivate }}</p>

      <p>参加条件</p>
      <label for="10">10代</label>
      <input 
        type="checkbox"
        id="10"
        value='10代'
        v-model="eventData.target"
      >

      <label for="20">20代</label>
      <input 
        type="checkbox"
        id="20"
        value='20代'
        v-model="eventData.target"
      >

      <label for="30">30代</label>
      <input 
        type="checkbox"
        id="30"
        value='30代'
        v-model="eventData.target"
      >

      <p>{{ eventData.target }}</p>


      <p>参加費</p>
      <label for="free">無料</label>
      <input 
        type="radio"
        id="free"
        value='無料'
        v-model="eventData.price"
      >

      <label for="paid">有料</label>
      <input 
        type="radio"
        id="paid"
        value='有料'
        v-model="eventData.price"
      >
      <p>{{ eventData.price }}</p>

      <hr>
      <p>開催場所</p>
      <!-- multipleもつけれる -->
      <select v-model="eventData.location">
        <option 
          v-for='location in eventData.locations'
          :key="location"
        >{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>
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
        host: 'kaoru',
        detail: 'aaaa',
        isPrivate: false,
        target: [],
        price: '無料',
        locations: ['tokyo', 'osaka', 'nagoya'],
        location: 'tokyo'
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
