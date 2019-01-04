
<template>
    <div class="com-a">
        <span>
            A component get name:{{name}}
        </span>
        
        <my-component-b></my-component-b>
    </div>
</template>

<script>
import myComponentB from './B'
export default {
    name : 'A',
    inject : ['name'],
    mounted(){
        setTimeout(()=>{
            this.name = 'cxh';
            console.log(this.name);
        }, 4000)
    },
    components:{
        myComponentB
    }
}
</script>

<style>

</style>
