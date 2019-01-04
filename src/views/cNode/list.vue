<template>
    <div class="m-page list">
        <p v-if="items.length == 0" class="tip">加载中...</p>
        <ul class="m-items" v-else>
            <li v-for="(list, index) in items" :key="index" class="list">
            <router-link :to="'/newsDetail/'+list.id">
                <div class="title">{{list.title}}</div>
            </router-link>
            <div class="author">
                <span class="name">{{list.author.loginname}}</span>
                <!--<div class="head-img" :style="{backgroundImage:'url(' +list.author.avatar_url+ ')'}"></div>-->
              <div class="head-img" v-lazy:background-image="list.author.avatar_url"></div>
            </div>
            <div class="date">{{list.create_at}}</div>
            </li>
        </ul>

        <paginate @toPrev="toPrev" @toNext="toNext" :currentPage="currentPage"></paginate>
    </div>
    
</template>

<script>
import paginate from '@/components/cNode/paginate/index.vue'
export default {
    name:'list',
    data(){
      return {
        rendered: false,
        items : [],
        totalNum : 40,
        currentPage : this.$route.params.page || 1
      }
    },

    mounted(){
        this.queryData();
        
    },

    computed:{
      pageSize(){
        return Math.ceil(this.totalNum / 12)
      }
    },

    methods :{
      queryData(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        //console.log(this.$route);
        this.$router.push({path : `/list/${this.currentPage}`});
        this.axios.get(`cNode/topics?limit=10&page=${this.currentPage}`).then(res => {
          this.items = res.data.data;
        })
      },
      toPrev(isToHome){
        if(this.currentPage > 1){--this.currentPage;}
        if(isToHome){this.currentPage = 1;}
        this.queryData();
      },
      toNext(){
        ++this.currentPage;
        this.queryData();
      }
    },
    components:{
      paginate
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tip
    padding 10px 0
    text-align center
    font-size 20px

  .m-items
    .list
      padding 8px;
      box-sizing border-box
      margin-bottom 20px
      background-color #eee
      overflow hidden
      .title
        margin-bottom 12px
        font-size 18px
        color #333

      .author
        float left
        .head-img
          display inline-block
          vertical-align middle
          width 20px
          height 20px
          background-color #ccc
          background-repeat no-repeat
          background-size cover
          background-position center
          border-radius 100%
      .date
        float right




</style>
