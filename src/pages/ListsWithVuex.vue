<template>
    <div>
        <my-input
        :modelValue="search"
        @update:modelValue="setSearch"
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
            :modelValue="selectedSort"
            @update.modelValue="setSort"
            :options="sortOptions"
            >
            </my-select>

        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form 
                @getPost="add"
            />
        </my-dialog>
        <post-list 
        :lists="searchedAndSortLists" 
        @remove="remove"
        />
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
import { mapMutations,mapActions,mapGetters,mapState } from 'vuex';
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";

export default {
    components: {
        PostList, PostForm,
    },
    data() {
        return {
            dialogVisible: false,
        }
    },   
    methods: {
        ...mapActions ({
            fetchLists: 'list/fetchLists',
        }),
        ...mapMutations ({
            setPage: 'list/setPage',
            setSearch: 'list/setSearch',
            setSort: 'list/setSort'
        }),
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true;
        },
    },
    mounted() {
        this.fetchLists()
    },
    computed: { 
        ...mapState ({
            lists: state => state.list.lists,
            selectedSort: state => state.list.selectedSort,
            page: state => state.list.page,
            limit: state => state.list.limit,
            maxLists: state => state.list.maxLists,
            sortOptions: state => state.list.sortOptions,
            search: state => state.list.search,
        }),
        ...mapGetters ({
            sortedLists: 'list/sortedLists',
            searchedAndSortLists: 'list/searchedAndSortLists'
        }),
        
    },
    // watch: {
    //     page() {
    //         this.fetchLists
    //     } 
    // }
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