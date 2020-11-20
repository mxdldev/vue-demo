<template>
    <div>
        Life
    </div>
</template>

<script>
    export default {
        name: "Life",
        beforeCreate() {
            console.log("实例创建前")
        },
        created() {
            console.log("实例创建后")
        },
        beforeMount() {
            console.log("模板挂在前")
        },
        mounted() {
            console.log("模板挂载后")
        },
        beforeUpdate() {
            console.log("数据更新前")
        },
        updated() {
            console.log("数据更新后")
        },
        beforeDestroy() {
            console.log("实例销毁前")
        },
        destroyed() {
            console.log("实例销毁后")
        }


    }
</script>

<style scoped>

</style>
