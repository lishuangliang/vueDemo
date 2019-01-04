<template>
    <div class="com-b">
        B component get name {{name}}
    </div>
</template>

<script>
export default {
    name : 'B',
    inject : ['name']
}
</script>

<style>

</style>
