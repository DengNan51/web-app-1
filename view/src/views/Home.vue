<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
// import {mapGetters, mapActions} from 'vuex'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    console.log(process.env.VUE_APP_TITLE)
    console.log(process.env.VUE_APP_TYPE)
    axios.request({
      method: "GET",
      url: '/api/find'
    }).then(value => {
      console.log(value)
    })
  },
  computed: {}
}
</script>
