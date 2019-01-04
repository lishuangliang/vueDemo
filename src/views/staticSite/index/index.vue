<template>
    <div class="m-page index">
      <ss-header></ss-header>
      <div class="main">
        <div class="lt">left part</div>
        <div class="rt">right part</div>
      </div>
      <ss-footer></ss-footer>
    </div>
</template>

<script>
    import ssHeader from '../../../components/staticSite/header/header.vue';
    import ssFooter from '../../../components/staticSite/footer/footer.vue'

    export default {
        name: "index",
        components:{
          ssHeader,
          ssFooter
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
  .m-page.index{
    .main{
      position: absolute;
      top: 80px;
      bottom: 80px;
      width: 100%;
      background: #ccc;
      .lt{
        position: absolute;
        width: 20%;
      }
      .rt{
        position: absolute;
        right: 0;
        width: 70%;
      }
    }
  }

</style>
