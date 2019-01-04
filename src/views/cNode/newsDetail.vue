<template>
    <transition name=page-left>
        <div class="m-page news-detail">
        <fix-header></fix-header>
        <div class="container" v-if="resData">
            <div class="title">{{resData.title}}</div>
            <div class="author">
            <div class="head-img" :style="{backgroundImage:'url(' +resData.author.avatar_url+ ')'}"></div>
            <span class="name">{{resData.author.loginname}}</span>
            </div>

            <div class="content" v-html="resData.content"></div>
        </div>
        </div>
    </transition>
</template>

<script>
    import fixHeader from '@/components/cNode/header/index.vue';
    export default {
        name: "newsDetailByID",
        data(){
          return{
            currentId : '',
            resData : null
          }
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                this.axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`).then(res => {
                    this.resData = res.data.data;
                })
            }
        },
        components:{
          fixHeader
        }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.m-page.news-detail
  .title
    font-size 22px
    color #000
    font-weight bold
    line-height 30px
  .author
    margin 10px 0
    .head-img
      display inline-block
      vertical-align middle
      width 20px
      height 20px
      background-color #ccc
      background-repeat no-repeat
      background-position center
      background-size cover
  .content
    line-height 28px
    .prettyprint
      overflow auto
    h1
      font-size 18px

    p
      margin-bottom 20px
    img
      margin 10px 0
      width 100%
@media (max-width: 500px){
  .m-page.news-detail{
    padding-top 64px
  }
}

</style>
