<template>
    <div>
        <v-header v-bind:title="title" v-bind:subTitle="subTitle" v-bind:run="run" v-bind:home="this"></v-header>
        <div>
        <ul>
            <li>111</li>
            <li>222</li>
            <li>333</li>
        </ul>
        </div>
    </div>
</template>

<script>
    import Header from "./Header";
    import VueEvent from '../assets/js/VueEvent.js'
    export default {
        name: "Home",
        components:{
            'v-header':Header,
        },
        data(){
            return {
                title:"主页",
                subTitle:'主页的副标题',
            }
        },
        methods:{
            run(){
              console.log("run start...")
            },
        },
        mounted(){
            VueEvent.$on('to-home',function (data) {
                console.log("home start..."+data)
            })
        }
    }
</script>

<style scoped>

</style>
