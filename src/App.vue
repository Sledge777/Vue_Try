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
import axios from "axios"

export default {
    components: {
        PostList, PostForm,
    },
    data() {
        return {
            lists: [],
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
        },
        async fetchLists() {
            
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                console.log(response)
                this.lists = response.data
            }catch {
                alert('пизда')
            }
            
        }
    },
    mounted() {
        this.fetchLists();
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