<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import dataJson from './data/data'
import { formatTime } from './utils/index.js'
import { decode } from 'js-base64'
export default {
  mounted () {
    const data = localStorage.getItem(dataJson.login.name)
    const dateYear = formatTime(new Date(), 'yyyy-MM-dd')
    if(data){
      const endata = decode(data)
      if(endata !== dateYear){
        this.$router.push({name: 'login'})
      }
    }else{
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  background-color: #020308;
  overflow: hidden;
}
</style>
