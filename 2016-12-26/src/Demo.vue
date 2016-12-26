<template>
    <div>
        <div v-for="item of list">{{item.name}}</div>
    </div>
</template>

<script>
    export default{
        props:['list']
    }
</script>