<template>
    <div id="knock-out-phase">
        <sui-grid class="knock-out-table">
            <sui-grid-row v-for="(round, i) in matches" :key="i" class="round">
                <knock-out-card v-for="match in round" :match="match" :width="16 / round.length" class="card"></knock-out-card>
            </sui-grid-row>
        </sui-grid>
    </div>
</template>

<script>
    import SuiGrid from "semantic-ui-vue/dist/commonjs/collections/Grid/Grid";
    import KnockOutCard from "@/components/KnockOutCard";

    export default {
        name: "KnockOutTable",
        components: {KnockOutCard, SuiGrid},
        data() {
            return {
                matches: [
                    [
                        {
                            homeName: 'LIV',
                            homeBadge: 'static/liv.png',
                            awayName: 'MAN',
                            awayBadge: 'static/man.png',
                            result: '3 : 1',
                            time: "FT",
                        },
                        {
                            homeName: 'LIV',
                            homeBadge: 'static/liv.png',
                            awayName: 'MAN',
                            awayBadge: 'static/man.png',
                            result: '3 : 1',
                            time: "FT",
                        },
                        {
                            homeName: 'LIV',
                            homeBadge: 'static/liv.png',
                            awayName: 'MAN',
                            awayBadge: 'static/man.png',
                            result: '3 : 1',
                            time: "FT",
                        },
                        {
                            homeName: 'LIV',
                            homeBadge: 'static/liv.png',
                            awayName: 'MAN',
                            awayBadge: 'static/man.png',
                            result: '3 : 1',
                            time: "FT",
                        },
                    ],
                    [
                        {
                            homeName: 'LIV',
                            homeBadge: 'static/liv.png',
                            awayName: 'MAN',
                            awayBadge: 'static/man.png',
                            result: '3 : 1',
                            time: "FT",
                        },
                        {
                            homeName: 'LIV',
                            homeBadge: 'static/liv.png',
                            awayName: 'MAN',
                            awayBadge: 'static/man.png',
                            result: '3 : 1',
                            time: "FT",
                        },
                    ],
                    [
                        {
                            homeName: 'LIV',
                            homeBadge: 'static/liv.png',
                            awayName: 'MAN',
                            awayBadge: 'static/man.png',
                            result: '3 : 1',
                            time: "FT",
                        },
                    ],
                    [
                        {
                            homeName: 'LIV',
                            homeBadge: 'static/liv.png',
                            awayName: 'MAN',
                            awayBadge: 'static/man.png',
                            result: '3 : 1',
                            time: "FT",
                        },
                        {
                            homeName: 'LIV',
                            homeBadge: 'static/liv.png',
                            awayName: 'MAN',
                            awayBadge: 'static/man.png',
                            result: '3 : 1',
                            time: "FT",
                        },
                    ],
                    [
                        {
                            homeName: 'LIV',
                            homeBadge: 'static/liv.png',
                            awayName: 'MAN',
                            awayBadge: 'static/man.png',
                            result: '3 : 1',
                            time: "FT",
                        },
                        {
                            homeName: 'LIV',
                            homeBadge: 'static/liv.png',
                            awayName: 'MAN',
                            awayBadge: 'static/man.png',
                            result: '3 : 1',
                            time: "FT",
                        },
                        {
                            homeName: 'LIV',
                            homeBadge: 'static/liv.png',
                            awayName: 'MAN',
                            awayBadge: 'static/man.png',
                            result: '3 : 1',
                            time: "FT",
                        },
                        {
                            homeName: 'LIV',
                            homeBadge: 'static/liv.png',
                            awayName: 'MAN',
                            awayBadge: 'static/man.png',
                            result: '3 : 1',
                            time: "FT",
                        },
                    ]],
            }
        }
    }
</script>

<style scoped>
    .knock-out-table {
        justify-content: center;
    }
    .round:nth-child(even) {
        background: rgba(255, 255, 255, 0.1);
    }
    .round:nth-child(even) .card {
        margin: 0 12.5%;
    }
    .round:nth-child(2)::before {
        content: '';
        width: 25%;
        height: 1rem;
        position: absolute;
        left: 62.5%;
        top: -1rem;
        border: solid 3px rgba(255, 255, 255, 0.2);
        border-top: 0;
    }
    .round:nth-child(2)::after {
        content: '';
        width: 25%;
        height: 1rem;
        position: absolute;
        left: 12.5%;
        top: -1rem;
        border: solid 3px rgba(255, 255, 255, 0.2);
        border-top: 0;
    }
    .round:nth-child(4)::before {
        content: '';
        width: 25%;
        height: 1rem;
        position: absolute;
        left: 62.5%;
        bottom: -1rem;
        border: solid 3px rgba(255, 255, 255, 0.2);
        border-bottom: 0;
    }
    .round:nth-child(4)::after {
        content: '';
        width: 25%;
        height: 1rem;
        position: absolute;
        left: 12.5%;
        bottom: -1rem;
        border: solid 3px rgba(255, 255, 255, 0.2);
        border-bottom: 0;
    }
    .round:nth-child(3)::before {
        content: '';
        width: 50%;
        height: 1rem;
        position: absolute;
        left: 25%;
        bottom: -1rem;
        border: solid 3px rgba(255, 255, 255, 0.2);
        border-bottom: 0;
    }
    .round:nth-child(3)::after {
        content: '';
        width: 50%;
        height: 1rem;
        position: absolute;
        left: 25%;
        top: -1rem;
        border: solid 3px rgba(255, 255, 255, 0.2);
        border-top: 0;
    }
</style>