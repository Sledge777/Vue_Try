import {ref, computed} from 'vue'

export default function useSortedLists(lists) {
    const selectedSort = ref('')
    const sortedLists = computed(() => {
        return [...lists.value].sort((list1, list2) => list1[selectedSort.value]?.localeCompare(list2[selectedSort.value]))
    })

    return {
        selectedSort, sortedLists
    }
};