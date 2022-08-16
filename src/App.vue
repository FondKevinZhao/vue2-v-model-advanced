<template>
  <div id="app">
    <input type="text" v-model="msg" />
    &nbsp;
    <span>我爱{{ msg }}</span>

    <br />
    <br />

    <input type="text" :value="msg" @input="msg = $event.target.value" />
    &nbsp;
    <span>我爱{{ msg }}</span>
    <!-- 父子数据同步，写法一： -->
    <Son :value="msg" @input="msg = $event"></Son>

    <!-- 父子数据同步，写法一： -->
    <Son v-model="msg"></Son>
  </div>
</template>

<script>
import Son from './components/Son.vue'
export default {
  name: 'App',
  components: {
    Son,
  },
  data() {
    return {
      msg: '赵丽颖',
    }
  },
}
</script>

<style>
ul,
li {
  list-style: none;
  padding: 0;
}
.router-link-exact-active {
  background-color: green;
  color: white;
  padding: 3px;
}
.router-link-active {
  background-color: green;
  color: white;
}
</style>
