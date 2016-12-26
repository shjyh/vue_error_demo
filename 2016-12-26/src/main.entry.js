import Vue from 'vue/dist/vue.common';
import DemoComponent from './Demo.vue';

const app = new Vue({
    components:{demo:DemoComponent},
    el:'#app',
    data:{
        list:[
            {key:0,name:'red'},
            {key:1,name:'green'}
        ]
    }
})