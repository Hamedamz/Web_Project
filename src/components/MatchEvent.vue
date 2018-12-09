<template>
    <sui-table-row>
        <sui-table-cell>{{news.time}}'</sui-table-cell>
        <sui-table-cell v-html="news.icon" class="font-icon" ></sui-table-cell>
        <sui-table-cell>{{news.main}}</sui-table-cell>
    </sui-table-row>
</template>

<script>
    export default {
        name: "matchEvent",
        components: {},
        props:['news'],
        data(){
            return{
            }
        }
    }
</script>

<style scoped>
    .font-icon{
        font-family: 'ESPN';
    }
</style>
