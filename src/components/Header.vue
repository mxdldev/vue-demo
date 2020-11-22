<template>
    <div>
        <div>这是Header-{{title}}-{{subTitle}}</div>
        <button v-on:click="run">调用Home的run方法</button>
        <button v-on:click="proxyProcess">调用Home的run方法</button>
        <button v-on:click="proxyProcess1">调用News的方法</button>
    </div>
</template>

<script>
    export default {
        props:['title','subTitle','run','home'],
        name: "Header",
        methods:{
            proxyProcess(){
                console.log("proxyProcess start...")
                this.home.run()
                console.log("----------------------------")
                console.log('title:'+this.$parent.title)
                this.$parent.run()
            },
            proxyProcess1(){
                //方法1:
              this.$emit("newsMethord","aaaa")
                //方法2
              this.$parent.newsMethord("bbb")

            },
            headerTitle(value){
                console.log("headerTitle start...")
                console.log(value)
            }
        }
    }

</script>

<style scoped>

</style>
