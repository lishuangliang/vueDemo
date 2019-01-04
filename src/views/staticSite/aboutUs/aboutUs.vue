<template>
    <div class="m-page about-us">
      <ss-header></ss-header>
      <div class="main">
        <div>{{msg}}</div>
      </div>
      <ss-footer></ss-footer>
    </div>
</template>

<script>
  import ssHeader from '../../../components/staticSite/header/header.vue';
  import ssFooter from '../../../components/staticSite/footer/footer.vue'
    export default {
        name: "aboutUs",
      data(){
          return {
            msg : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deserunt doloribus ducimus earum enim error inventore neque, perferendis recusandae unde. Atque dicta error modi natus, quod unde voluptate. Veritatis, voluptatum.'
          }
      },
      components:{
          ssFooter,
          ssHeader
      }
    }
</script>

<style scoped>

</style>
