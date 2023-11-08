<template>
    <form @submit.prevent>
        <my-input 
        v-model="newList.title"
        type="text" 
        placeholder="title"/>
        <my-input 
        v-model="newList.description"
        type="text" 
        placeholder="description"/>
        <first-Button
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
                description: '', 
            }
        }
    },
    methods: {
        takeTitle(event) {
            this.newLists.title = event.target.value
        },
        takeDescription(event) {
            this.newLists.description = event.target.value
        // или так: @input = " newLists.description = $event.target.value"
        },
        add() {
            this.newList.id = Date.now();
            this.$emit('getPost',this.newList)
            this.newList = {
                title: '',
                description: ''
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