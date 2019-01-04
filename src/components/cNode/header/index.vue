<template>
    <div class="m-header fixed">
      <div class="back" @click="back">←</div>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
          back(){
            if(window.history.length > 1){
              this.$router.go(-1);
            }else{
              this.$router.push({path : '/list'})
            }

          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.m-header
  &.fixed
    position fixed
    width 100%
    left 0
    top 0
  display none
  position relative
  height 44px
  background #fff
  box-shadow 0 1px 6px 2px rgba(0,0,0,0.21)
  .back
    position absolute
    left 20px
    top 0
    font-size 30px
    cursor pointer

@media (max-width : 500px)
  .m-header
    display block

</style>
