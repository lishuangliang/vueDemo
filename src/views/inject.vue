<template>
    <div class="m-page inject">

        <div>
            inject get name 
        </div>
        <my-component-a></my-component-a>
    </div>
</template>

<script>

import myComponentA from '@/components/inject/A';

export default {
    name : 'inject',
    provide:{
        name : 'lawliet'
    },
    
    components:{
        myComponentA
    }
}
</script>

