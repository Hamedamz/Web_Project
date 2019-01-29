<template>
    <div id="match-table">
        <sui-grid class="container-fluid stackable">
            <match-cell
                v-for="match in matches"
                :match="match"
                :key="match.id"
                ></match-cell>

        </sui-grid>
    </div>
</template>

<script>
    import MatchCell from "@/components/MatchCell";
    export default {
        name: "MatchTable",
        components: {MatchCell},
        props: ['matches'],

    }
</script>

<style scoped>

</style>