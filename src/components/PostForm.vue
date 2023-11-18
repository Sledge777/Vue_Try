<template>
    <form @submit.prevent>
        <my-input 
        v-focus
        v-model="newList.title"
        type="text" 
        placeholder="title"/>
        <my-input 
        v-model="newList.body"
        type="text" 
        placeholder="description"/>
        <first-Button
        style="margin-top: 10px;"
        @click="add"
        >Создать</first-Button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            newList: {
                title: '',
                body: '', 
            }
        }
    },
    methods: {
        takeTitle(event) {
            this.newLists.title = event.target.value
        },
        takeDescription(event) {
            this.newLists.body = event.target.value
        // или так: @input = " newLists.description = $event.target.value"
        },
        add() {
            this.newList.id = Date.now();
            this.$emit('getPost',this.newList)
            this.newList = {
                title: '',
                body: ''
            }
        }
    }
}
    
</script>

<style scoped>

form {
    display:flex;
    flex-direction: column;
}
</style>