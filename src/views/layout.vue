 <template>
  <div class="m-page layout" style="height: 1000px">
    <div>
      <button @click="flag=!flag">toggle</button>
      <transition name="list">
        <h3 v-if="flag">lsdow sdw fefe sawe sd</h3>
      </transition>
    </div>

    <div class="m-add-form">

      <button @click="add">add</button>
      <button @click="remove">remove</button>
    </div>

    <transition-group name="list" tag="ul">
      <li v-for="item in items" v-bind:key="item" class="list-item">
        <span>{{ item }}</span>
        <button>delete</button>
      </li>
    </transition-group>

    <!--<svg width="440" height="440" viewbox="0 0 440 440" style="border: 1px solid #eee">-->
      <!--<circle cx="0" cy="220" r="210" stroke-width="10" stroke="#D1D3D7" fill="none"></circle>-->
      <!--<circle cx="0" cy="220" r="210" stroke-width="10" stroke="#00A5E0" fill="none"-->
              <!--transform="matrix(0,-1,1,0,-220,220)" stroke-dasharray="660 1069"></circle>-->
    <!--</svg>-->
    <svg width="440" height="440" viewbox="0 0 440 440" style="border: 1px solid #eee">
      <circle cx="0" cy="220" r="360" stroke-width="10" stroke="#D1D3D7" fill="none"></circle>
      <circle cx="0" cy="220" r="360" stroke-width="10" stroke="#00A5E0" fill="none"
              transform="matrix(0,-1,1,0,-220,220)" stroke-dasharray="660 1069"></circle>
    </svg>

  </div>
</template>

<script>
    export default {
        name: "layout",
        data () {
          return {
            name : '',
            flag : true,
            items: [1,2,3,4,5,6,7,8,9],
            nextNum: 10
          }
        },
        methods: {
          randomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
          },
          add: function () {
            let roundNum = this.randomIndex();
            console.log(roundNum);
            this.items.splice(roundNum, 0, this.nextNum++)
          },
          remove: function () {
            this.items.splice(this.randomIndex(), 1)
          },
        }
    }
</script>

<style scoped="scoped">
  .m-page.layout{
    margin: 20px;
  }
  .m-page.layout .list{
    position: relative;
    width: 100%;
    margin-bottom: 6px;
    padding: 10px 6px;
    box-sizing: border-box;
    border: 1px dashed #ddd;
  }
  .m-page.layout .list button{
    float: right;
  }
  .m-add-form{
    margin: 10px 0;
  }
  ul, li{
    list-style: none;
  }

  .list-item {

  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to
    /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-move {
    transition: transform 1s;
  }

  .list-leave-active {
    position: absolute;
  }

  .arc-rt-container{
    position: relative;
    width: 210px;
    height: 200px;
    border: 1px solid #eee;
    overflow: hidden;
  }
  .arc-rt-container .arc{
     position: absolute;
     right:10px;
     bottom:0;
     width:200px;
     height:280px;
     background-color: #ffffff;
     border-radius:50%;
     box-shadow: 10px -6px 0 0 #d9e1ef;
   }
  .arc-rt-container .arc.active{
    height: 270px;
    box-shadow: 10px -6px 0 0 #00db71;
  }


</style>
