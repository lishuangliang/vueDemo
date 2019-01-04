<template>
    <div class="m-page goodList">
        <h1>{{appName}}</h1>
        <dl>
          <dt>商品列表</dt>
          <dd v-for="(list, index) in products" :key="index">
            {{list.id}}--{{list.name}}
          </dd>
        </dl>
        <hr/>
        <ul v-if="userList.length">
          <li v-for="(list, index) in userList" :key="index">
            {{list.id}}--{{list.name}}--{{list.gender ? 'female' : 'male'}} --{{list.phone}}
            <button @click="deleteList(list.id)">delete</button>
          </li>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex';
    export default {
        name: "goodsList",
        computed:{
          ...mapGetters('app',{
            appName: 'name'
          }),
          ...mapGetters('product/list',{
            products: 'list'
          }),
          ...mapState('order/list',['userList'])
        },
        mounted() {
          this.$store.dispatch('order/list/getUserList');
        },
        methods :{
          ...mapMutations('order/list', {
            deleteList : 'DELUSERLIST'
          })
        }
    }
</script>

<style lang="stylus">
  li
    padding 8px
    box-sizing border-box
    button
      float right
      background none
</style>
