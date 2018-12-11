<template>
    <sui-grid-column :width="4">
        <match-card :match="match" is-small="true"></match-card>
    </sui-grid-column>
</template>

<script>
    import MatchCard from "@/components/MatchCard";
    export default {
        name: "KnockOutCard",
        components: {MatchCard},
        props: ['width', 'match'],
    }
</script>

<style scoped>

</style>