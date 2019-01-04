<template>
  <div class="m-paginate">
    <button class="button home" @click="$emit('toPrev',true)" v-show="currentPage != 1">首页</button>
    <button class="button prev" @click="toPrev" v-show="currentPage != 1">上一页</button>
    <div class="current-page">{{currentPage}}</div>
    <button class="button next" @click="toNext">下一页</button>
  </div>
</template>

<script>
    export default {
        name: "index",
        props:{
          currentPage : {
            default : 1
          }
        },
        methods:{
          toPrev(){
            this.$emit('toPrev');
          },
          toNext(){
            this.$emit('toNext');
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .m-paginate
    position relative
    margin 10px 0
    overflow hidden
    .current-page
      position absolute
      left 50%
      top 4px
      color crimson
    .button
      margin  0 4px
      padding 6px 10px
      border 1px solid crimson
      background #fff
      color #333
      border-radius 4px
      cursor pointer
      &.prev,&.home
        float left
      &.next
        float right
      &:hover
        background-color  crimson
        color #fff
</style>
