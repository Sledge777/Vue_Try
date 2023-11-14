<template>
    <div class="app">
        <my-input
        v-model="search"
        placeholder="Поиск"
         >
        </my-input>

        <div class="buttons">
            <first-Button
            @click="showDialog"
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
        <div ref="observer" class="observe"></div>
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
            selectedSort: '',
            page:0,
            limit:10,
            maxLists:0,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержимому'}
            ],
            search: '',
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
                this.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                });
                this.maxLists = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.lists = [...this.lists, ...response.data]

            }catch {
                alert('пизда')
            }
            
        },
        changePage(pageNum) {
            this.page = pageNum
            this.fetchLists()
        }
    },
    mounted() {
        this.fetchLists();
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };

        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && this.page < this.maxLists) {
               this.fetchLists()
            }
            
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer)

    },
    computed: {
        sortedLists() {
            return [...this.lists].sort((list1,list2) =>  list1[this.selectedSort]?.localeCompare(list2[this.selectedSort]))
        },
        searchedAndSortLists() {
            return this.sortedLists.filter(list => list.title.toLowerCase().includes(this.search.toLowerCase()))
        },
        
    },
    watch: {
        // page() {
        //    this.fetchLists
        // } 
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
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