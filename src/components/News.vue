<template>
    <div>
        <v-header></v-header>
        <div>
            <ul>
                <li>555</li>
                <li>666</li>
                <li>777</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Header from "./Header";

    export default {
        name: "News",
        components: {
            'v-header': Header,
        }
    }
</script>

<style scoped>

</style>
