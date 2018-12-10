<template>
    <sui-table-row>
        <sui-table-cell collapsing class="left-pad">
            {{stat.left}}
        </sui-table-cell>
        <sui-table-cell>
            <div class="main">
                <div :style="bar">

                </div>
            </div>
        </sui-table-cell>
        <sui-table-cell text-align="right" collapsing class="right-pad">
            {{stat.right}}
        </sui-table-cell>

    </sui-table-row>
</template>

<script>
    export default {
        name: "ProgressBar",
        props: ['stat'],
        data() {
            return {
                bar: {
                    width: this.stat.leftPercent+'%',
                    background: '#47a7ff',
                    height: '30px',
                    borderBottomLeftRadius: '20px',
                    borderTopLeftRadius: '20px',
                },
            }
        }
    }
</script>

<style scoped>
    .main {
        background: #ff5244;
        border-radius: 20px;
    }


    .right-pad {
        padding-right: 2rem !important;
    }

    .left-pad {
        padding-left: 2rem !important;
    }
</style>
