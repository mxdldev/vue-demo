<template>
    <div>
        <v-header></v-header>
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
    export default {
        name: "Home",
        components:{
            'v-header':Header,
        }
    }
</script>

<style scoped>

</style>
