<template>
    <div>这是Video</div>
</template>

<script>
    export default {
        name: "Video",
        created(){
           // this.$route.params[name]
            var a = this.$route.params.a
            var b = this.$route.params.b
            console.log("a:"+a+";b:"+b)
        }
    }
</script>

<style scoped>

</style>
