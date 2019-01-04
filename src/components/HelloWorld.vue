<template>
  <div class="hello">
    <ul>
      <li>
        <router-link to="layout">layout</router-link>
      </li>
      <li>
        <router-link to="transition">transition</router-link>
      </li>
      <li>
        <router-link to="goodsList">goodsList</router-link>
      </li>
      <li>
        <router-link to="test">test</router-link>
      </li>
      <li>
        <router-link to="staticSiteHome">staticSiteHome</router-link>
      </li>
      <li>
        <router-link to="list/1">cNode</router-link>
      </li>
      <li>
        <router-link to="inject">inject</router-link>
      </li>
    </ul>



  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        user : {}
      }
    },
    created(){
      // axios.get('/api/getUserInfo?uid=1234343').then((res)=>{
      //   console.log(res.data);
      //   this.user = res.data.data;
      // }).catch((err)=>{
      //   console.log(err);
      // })

      // axios.post('/api/getUserInfo', {uid:123456}).then((res)=>{
      //   console.log(res.data);
      //   this.user = res.data.data;
      // }).catch((err)=>{
      //   console.log(err);
      // })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">


h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
