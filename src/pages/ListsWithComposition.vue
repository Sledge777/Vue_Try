<template>
    <div>
        <my-input
        v-model="search"
        placeholder="Поиск"
        v-focus
        >
        </my-input>

        <div class="buttons">
            <first-Button
            @click="showDialog"
            style="margin-top: 10px;"
            >Создать пост</first-Button>
            <my-select 
            v-model="selectedSort"
            :options="sortOptions"
            >

            </my-select>
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form 
                @getPost="add"
            />
        </my-dialog>
        <post-list :lists="searchedAndSortLists" @remove="remove"/>
        <div class="wrapper_page">
            <div 
            class="page" 
            v-for="pageNum in maxLists" 
            :key="pageNum"
            :class="{
                'selected_page': this.page === pageNum
            }"
            @click="changePage(pageNum)"
            >{{ pageNum }}</div>
        </div>
        <div v-intersection="fetchLists" class="observe"></div>
    </div>
</template>
<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import axios from "axios"
import ref from 'vue'
import useLists from "@/hooks/useLists";
import useSortedLists from "@/hooks/useSortedLists";
import useSortedAndSearchedLists from "@/hooks/useSortedAndSearchedLists";

export default {
    components: {
        PostList, PostForm,
    },
    data() {
        return {
            dialogVisible: false,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержимому'},
            ]
        }
    },
  setup(props) {
    const {lists, maxLists} = useLists(10);
    const {sortedLists, selectedSort} = useSortedLists(lists);
    const {search, sortedAndSearchedLists} = useSortedAndSearchedLists(sortedLists)
    return {
        lists,
        maxLists,
        sortedLists,
        selectedSort,
        search,
        sortedAndSearchedLists,
        }
    }
}
</script>

<style scoped>
body {
    padding: 20px;
}
.buttons {
    display: flex;
    justify-content: space-between;
}
.wrapper_page {
    display: flex;
    margin-top: 20px;
}
.page {
    border:1px solid black ;
    padding: 10px;
}
.selected_page {
    border:2px solid green;
}
.observe {
    height: 30px;
}
</style>