<template>
    <div class="float navv">
            <a v-for="league in leagues" :key="league.id" :href="league.href">
                {{league.name}}
            </a>
    </div>
</template>

<script>
    export default {
        name: "subNav",
        props:['leagues']
    }
</script>

<style scoped>
    .navv{
        background: #a3d0d1;
        padding: 5px;
    }
    a{
        margin-left: 60px;
        color: #101012;
        letter-spacing: 1.2px;
        text-decoration: none!important;
    }
    a:first-child{
        margin-left: 40px;
    }

    a:after {
        border-bottom: 3px solid rgba(29, 17, 32, 0.98);
        content: "";
        display: block;
        transition: width 250ms ease-in-out 0s;
        width: 0;
    }

    a:hover:after {
        transition: width 100ms ease-in-out 0s;
        width: 100%;
    }
    a:hover{
        color: rgba(65, 47, 47, 0.98);
      }
</style>
