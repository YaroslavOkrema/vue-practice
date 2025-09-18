import {computed, ref} from "vue";

export default function useSortedAndSearched(sortedPosts) {
    const searchQuery = ref('')
    const searchSortedPosts = computed(() => {
        return sortedPosts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
    })

    return {
        searchQuery,
        searchSortedPosts,
    }
}