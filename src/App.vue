<template>
    <my-nav></my-nav>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import nav from '@/components/UI/nav'
export default {
    components: {
        nav
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>