<template>
      <div>
        <template v-if="editable">
            <textarea placeholder="your title here" v-model="journey.title"></textarea>
            <div class="author"><input class="flex-1" placeholder="insert your name" v-model="author.name"></div>
        </template>
        <template v-else>
            <div class="title">{{journey.title}}</div>
            <div class="author">{{author.name}}</div>
        </template>
    </div>
</template>

<script>
    export default{
        props:['editable','journey','author']
    }
</script>