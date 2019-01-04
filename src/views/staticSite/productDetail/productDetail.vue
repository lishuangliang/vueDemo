<template>
    <div class="m-page productDetail">
      <ss-header></ss-header>
      <div class="main">
        <ul>
          <li v-for="(list, index) in items">
            {{list.id}} -- {{list.name}} -- {{list.price}}
          </li>
        </ul>
      </div>
      <ss-footer></ss-footer>
    </div>
</template>

<script>
  import ssHeader from '../../../components/staticSite/header/header.vue';
  import ssFooter from '../../../components/staticSite/footer/footer.vue'
    export default {
        name: "productDetail",
        data (){
          return {
            items : [
              {
                id : 1,
                name : 'iphonex',
                price : '7788'
              },
              {
                id : 2,
                name : 'macBook Air',
                price : '8877'
              },
              {
                id : 3,
                name : 'thinkpad',
                price : '6655'
              }
            ]
          }
        },
        components:{
          ssHeader,
          ssFooter
        }
    }
</script>

<style scoped>

</style>
