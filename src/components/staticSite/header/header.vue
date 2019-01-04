<template>
    <div class="m-header">
      <router-link to="staticSiteHome">
        <div class="m-logo">logo</div>
      </router-link>

      <ul class="nav">
        <li>
          <router-link to="staticSiteHome">home</router-link>
        </li>
        <li>
          <router-link to="productDetail">productDetail</router-link>
        </li>
        <li>
          <router-link to="aboutUs">aboutUs</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "ssHeader"
    }
</script>

<style lang="less" rel="stylesheet/less">
  .m-header{
    position: relative;
    height: 80px;
    background: #eee;
    .m-logo{
      position: absolute;
      left: 12px;
      top: 10px;
      width: 120px;
      height: 60px;
      background: #ccc;
      text-align: center;
    }
    .nav{
      position: absolute;
      right :12px;
      overflow: hidden;
      li{
        float: left;
        line-height: 80px;
        font-size: 20px;
        margin: 0 10px;
        &:hover{
          transform: scale(1.2);
        }
        a{
          position: relative;
          &.router-link-active::after{
            content: '';
            position: absolute;
            left: 0;
            bottom: -10px;
            width: 100%;
            height: 3px;
            background: #2D8cF0;
          }
        }
      }
    }
  }
</style>
