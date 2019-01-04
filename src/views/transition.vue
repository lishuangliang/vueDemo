<template>
    <div class="m-page transition">

      <my-form @submitData="submitData">add</my-form>

      <table class="m-table">
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>gender</td>
            <td>phone</td>
            <td>operation</td>
          </tr>
        </thead>

        <transition-group name="list" tag="tbody">
          <tr v-for="list in items" :key="list.id" class="list">
            <td>{{list.id}}</td>
            <td>{{list.name}}</td>
            <td>{{list.gender == 0 ? 'female' : 'male'}}</td>
            <td>{{list.phone}}</td>
            <td>
              <button class="u-btn" @click="updateFormData(list)">update</button>
              <button @click="remove(list.id)" class="u-btn">delete</button>
            </td>
          </tr>
        </transition-group>
      </table>

      <div class="m-update-form" v-show="updateFormShow">
        <div class="mask" @click="updateFormShow = false"></div>
        <my-form :updateListObj="updateListObj" @updataData="updataData">update</my-form>
      </div>

    </div>
</template>

<script>
    import myForm from '../components/form/form';
    import leaveBrowser from '../mixins/leaveBrowser';

    export default {
        name: "transition",
        mixins : [leaveBrowser],
        data(){
          return {
            items : [],
            name : '',
            nextNum : 1,
            loading : null,
            updateFormShow : false,
            updateListObj : null
          }
        },
        created(){
          this.getListData();
        },
        methods:{
          getListData(){
            this.axios.get('api/getList').then((res)=>{
              let data = res.data;
              if(data.code != 200){
                alert(data.msg);
                return;
              }
              this.items = data.data;
            }).catch((error)=>{
              console.log(error);
            });
          },

          remove(index){
            this.$Message.loading({
              content: '正在删除中',
              duration: 0
            });
            
            this.axios.post('api/delete', {id : index}).then((res)=>{
              this.$Message.destroy();
              let data = res.data;
              if(data.code == 200){
                this.items = this.items.filter( list => list.id != index);
              }
            }).catch((err)=>{
              this.$Message.destroy();
              console.log(err);
            })
          },

          submitData(data){
            this.axios.post('api/addList', data).then((res)=>{
              let data = res.data;
              if(data.code != 200){
                return;
              }
              this.items.push(data.data);
            }).catch((err)=>{
              console.log(err);
            });
          },

          updataData(data){
            this.updateFormShow = false;
            this.axios.post('api/update', data).then((res)=>{
              let resData = res.data;
              if(resData.code != 200){
                return;
              }
              this.items.forEach((item)=>{
                if(item.id == resData.data.id){
                  for(let key in resData.data){
                    if(key == 'id'){
                      continue;
                    }
                    item[key] = resData.data[key];
                  }
                }
              })
            }).catch((err)=>{
              console.log(err);
            });
          },

          updateFormData(list){
            this.updateFormShow = true;
            this.updateListObj = list;
          }
        },
        components:{
          myForm
        }
    }
</script>

<style scoped>
  .m-page.transition{
    padding: 20px;
    box-sizing: border-box;
  }
  .m-table{
    width: 100%;
    font-size: 16px;
    text-align: center;
  }
  .m-table thead{
    background: #bbb;
  }
  .m-table td{
    padding: 4px 10px;
  }
  .list{
    position: relative;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    background: #f2f2f2;
  }
  .list:nth-child(even){
    background: #ddd;
  }
  .list-enter-active, .list-leave-active{
    transition: all 0.3s ease-out;
  }
  .list-enter, .list-leave-to{
    opacity: 0;
    transform: translateX(100%);
  }

  .list-move{
    transition: all 0.6s;
  }
  .list-leave-active{
    position: absolute;
  }

  .m-update-form{
    position: absolute;
    z-index: 2;
  }
  .m-update-form .mask{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
  }
  .m-update-form .m-form-items{
    position: fixed;
    left: 25%;
    top: 30%;
    width: 50%;
  }

</style>
