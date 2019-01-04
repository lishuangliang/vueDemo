<template>
  <Card class="m-form-items">
    <ul>
      <li>
        <label>name:</label>
        <input class="u-input-text" v-model="name">
      </li>
      <li>
        <label>gender:</label>
        <input type="radio" value="1" name="gender" v-model="gender">男
        <input type="radio" value="0" name="gender" v-model="gender">女
      </li>
      <li>
        <label>phone:</label>
        <input class="u-input-text" v-model="phone" @keyup.enter="submitFormData">
      </li>
      <li>
        <button class="u-btn" @click="submitFormData">
          <slot></slot>
        </button>
      </li>
    </ul>
  </Card>
</template>

<script>
    export default {
      name: "myForm",
      props : {
        'updateListObj' : {
          type : Object,
          default : () => {}
        }
      },
      data(){
        return {
          name : '',
          gender : 1,
          phone : ''
        }
      },
      watch : {
        updateListObj(){
          this.name = this.updateListObj.name;
          this.gender = this.updateListObj.gender;
          this.phone = this.updateListObj.phone;
        }
      },
      methods:{
        submitFormData(){
          if(!this.name) return;
          let data = {};
          data.name = this.name;
          data.gender = this.gender;
          this.phone && (data.phone = this.phone);

          if(!this.updateListObj){
            this.$emit('submitData', data);
            this.name = this.phone = '';
            this.gender = 1;
          }else{
            data.id = this.updateListObj.id;
            this.$emit('updataData', data);
          }
        }
      }

    }
</script>

<style scoped>
  li{
    padding-bottom: 10px;
  }
</style>
