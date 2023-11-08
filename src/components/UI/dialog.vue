<template>
    <div class="dialog" v-if="show" @click="hide">
        <div @click.stop class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'my-dialog',
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        hide() {
            this.$emit('update:show',false)
        }
    }
}
</script>
<style scoped>
.dialog {
    background-color: rgba(0,0,0, 0.5);
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    position: fixed;
    display: flex;
}
.content {
    min-width: 400px;
    min-height: 200px;
    background-color: #fff;
    padding: 20px;
    margin: auto;
    border-radius: 20px;
}
</style>