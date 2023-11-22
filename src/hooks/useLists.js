import {ref,onMounted} from 'vue'

export function useLists(limit) {
    const lists = ref([])
    const maxLists = ref(0)
    const fetching = async () => {
        try {
            this.page += 1;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: 1,
                    _limit: limit,
                }
            });
            maxLists.value = Math.ceil(response.headers['x-total-count'] / this.limit)
            lists.value = [...lists.value, ...response.data]

        }catch {
            alert('пизда')
        }
    }
    onMounted(fetching)
        
    return {
        lists, maxLists
    }
}