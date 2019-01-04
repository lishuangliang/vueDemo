export default {
  mounted(){
    window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
  },
  methods : {
    beforeunloadHandler(e){
      //离开页面之前将缓存中的数据落地到磁盘文件中
      this.writeDataIntoMemory();
      e = window.event|| e;
      e.returnValue=("确定离开当前页面吗？");
    },
    writeDataIntoMemory(){
      this.axios.post('api/leaveBrowser').then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      });
    }

  },

  beforeDestroy(){
    window.removeEventListener('beforeunload', e => this.beforeunloadHandler(e))
  }
}
