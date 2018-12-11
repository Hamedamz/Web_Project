<template>
    <full-page-image-container :image="team.image" small="true" color="black">
        <template slot="header">
            <div>
                sdf
            </div>
        </template>
        <template slot="main">
            <div>
                fj
            </div>
        </template>
    </full-page-image-container>

</template>

<script>
    export default {
        name: "Team",
        data() {
            return {
                team: {
                    camp: 'static/psg-stadium.jpg'
                }
            }
        }
    }
</script>

<style scoped>

</style>
