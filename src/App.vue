<template>
    <div>
        <first-Button
        @click="showDialog"
        >Создать пост</first-Button>
        <my-dialog v-model:show="dialogVisible">
            <post-form 
                @getPost="add"
            />
        </my-dialog>
        
        <post-list :lists="lists" @remove="remove"/>
    </div>
</template>
<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";

export default {
    components: {
        PostList, PostForm,
    },
    data() {
        return {
            lists: [
            {id:1, title:'ara, pizda', description: 'post about pixda'},
            {id:2, title:'ara, pizda', description: 'post about pixda'},
            {id:3, title:'ara, pizda', description: 'post about pixda'},
        ],
        dialogVisible: false,
        }
    },
    methods: {
        add(newList) {
            this.lists.push(newList);
        },
        remove(list) {
            this.lists = this.lists.filter(l => l.id !== list.id);
        },
        showDialog() {
            this.dialogVisible = true;
        }
    }
}
</script>

<style>
* {
    margin:0;
    padding:0;
}
body {
    padding: 20px;
}
</style>