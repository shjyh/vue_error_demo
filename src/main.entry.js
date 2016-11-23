import Vue from 'vue';
import DemoComponent from './Demo.vue';

const app = new Vue({
    components:{demo:DemoComponent},
    el:'#app',
    data:{
        editable:true,
        journey:{title:'journey title'},
        author:{name:'author name'}
    }
})