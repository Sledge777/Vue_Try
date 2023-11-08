<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'first-Button'
}
</script>

<style scoped>
button {
    align-self: self-end;
    background-color: #fff;
    padding: 10px;
    color: green;
    border: 2px solid green;
    margin-top:10px;
}

</style>