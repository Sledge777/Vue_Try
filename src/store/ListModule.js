import axios from "axios";

export const ListModule = {
    state: () => ({
        lists: [],
        selectedSort: '',
        search: '',
        page:0,    
        limit:10,
        maxLists:0,
        sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержимому'}
        ],                                 
    // или так state: () => ({}) Без return
    }),
    getters: {
        sortedLists(state) {
            return [...state.lists].sort((list1,list2) =>  list1[state.selectedSort]?.localeCompare(list2[state.selectedSort]))
        },
        searchedAndSortLists(state,getters) {
            return getters.sortedLists.filter(list => list.title.toLowerCase().includes(state.search.toLowerCase()))
        },
    },
    mutations: {
        setLists(state,lists) {
            state.lists = lists
        },
        setSort(state,selectedSort) {
            state.selectedSort = selectedSort
        },
        setPage(state,page) {
            state.page = page
        },
        setMaxLists(state,maxLists) {
            state.maxLists = maxLists
        },
        setSearch(state,search) {
            state.search = search
        },

    },
    actions: {
        async fetchLists({state,commit}) {

            try {
                commit('setPage', state.page +1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                commit('setMaxLists',Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setLists',[...state.lists, ...response.data]) // удалить state.lists

            }catch (e) {
                console.log(e)
            }
            
        },
    },
    namespaced: true
}