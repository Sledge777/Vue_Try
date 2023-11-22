import {ref, computed} from 'vue'

export default function useSortedPosts(sortedLists) {
    const search = ref('')

    const sortedAndSearchedLists = computed(() => {
        return sortedLists.value.filter(list => list.title.toLowerCase().includes(search.value.toLowerCase()))
    })

    return {
        search, sortedAndSearchedLists
    }
};