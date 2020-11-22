<template>
    <div>
        <v-header ref="header" v-on:newsMethord="newsMethord"></v-header>
        <div>
            <ul>
                <li>555</li>
                <li>666</li>
                <li>777</li>
            </ul>
        </div>
        <button v-on:click="newsMethord">调用子控件的方法</button>
        <button v-on:click="newsMethord1">调用兄弟控件的方法</button>
    </div>
</template>

<script>
    import Header from "./Header";
    import EventVue from "@/assets/js/VueEvent";
    export default {
        name: "News",
        components: {
            'v-header': Header,
        },
        methods:{
            newsMethord(value){
                console.log('newsMethord start...')
                this.$refs.header.headerTitle("我是马保国"+value);
            },
            newsMethord1(){
                EventVue.$emit('to-home','耗子尾汁')
            }
        }
    }
</script>

<style scoped>

</style>
