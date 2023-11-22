<template>
    <div class="navBar">
        <first-Button @click="$router.push('/')">Главная</first-Button>
        <first-Button @click="$router.push('/Lists')">Посты</first-Button>
        <first-Button @click="$router.push('/About')">О нас</first-Button>
        <first-Button @click="$router.push('/vuex')">Vuex</first-Button>
    </div>
</template>
<script>
export default {
    name: 'my-nav',
}
</script>
<style scoped>
.navBar {
    background-color: teal;
    height: 50px;
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items:center;
}
</style>