<template>
    <div class="tabbed-menu">
        <sui-button-group :widths="5">
            <sui-button
                    v-for="tab in tabs"
                    :key="tab"
                    @click="currentTab = tab"
                    color="red"
                    :basic="currentTab !== tab"
                    :content="tab"
            ></sui-button>
        </sui-button-group>
        <keep-alive>
            <component
                    v-bind:is="currentTabComponent"
                    v-bind="currentTabProperties"
                    class="tab"
            ></component>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "TabbedLayout"
    }
</script>

<style scoped>

</style>