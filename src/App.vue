<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import url('./assets/css/base.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
ul,li{
  list-style: none;
}
  .u-input-text{
    border: 1px solid #ddd;
    height: 36px;
    border-radius: 2px;
    outline: none;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .u-input-text:focus{
    border-color: #42b983;
  }
  .u-btn{
    padding: 4px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #f8f8f8;
    cursor: pointer;
  }
</style>
