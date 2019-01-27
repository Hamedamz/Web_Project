<template>
    <sui-table-cell>
        <div class="container">
            <a :href="person.link">
                <sui-item-group>
                    <sui-item>
                        <sui-item-image :src="person.avatar"/>
                        <sui-item-content>
                            <sui-item-header class="main">{{person.first_name + " " + person.last_name}}</sui-item-header>
                            <sui-item-meta>
                                <span class="main red">{{person.role}}</span>
                            </sui-item-meta>
                            <sui-item-description>
                                <p class="main">
                                    Age:{{person.birth_date}}
                                </p>
                            </sui-item-description>
                            <!--<sui-item-extra class="main">-->
                                <!--Joined in {{person.joinedYear}}-->
                            <!--</sui-item-extra>-->
                        </sui-item-content>
                    </sui-item>
                </sui-item-group>
            </a>
        </div>
    </sui-table-cell>
</template>

<script>

    export default {
        name: "PlayerOverAll",
        components: {},
        props: ['person'],
    }
</script>

<style scoped>
    .main {
        color: #d8d8d8 !important;
    }

    .red {
        color: #d90412 !important;
    }

    .container {
        background: rgba(0, 0, 0, 0.3);
        padding: 10px;
        width: 100%;
    }
</style>
