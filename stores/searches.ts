import { defineStore } from 'pinia';
import { ref } from 'vue';

interface SearchResult {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface ApiResponse {
    Search: SearchResult[];
    totalResults: string;
    Response: string;
    Error?: string;
}

export const useSearchStore = defineStore('search', () => {
    const searchQuery = ref<string>('');
    const searchYear = ref<string>('');
    const searchType = ref<string>('');
    const searchResults = ref<SearchResult[]>([]);
    const totalResults = ref<number>(0);
    const error = ref<string | null>(null);
    const currentPage = ref<number>(1);

    const performSearch = async (page: number = 1) => {
        if (!searchQuery.value) return;

        try {
            const apiKey = 'a272881f';
            const response = await $fetch<ApiResponse>(`http://www.omdbapi.com/?s=${encodeURIComponent(searchQuery.value)}&type=${searchType.value}&y=${searchYear.value}&page=${page}&apikey=${apiKey}`);

            if (response.Response === 'True') {
                if (page === 1) {
                    searchResults.value = response.Search;
                } else {
                    searchResults.value = [...searchResults.value, ...response.Search];
                }
                totalResults.value = parseInt(response.totalResults, 10);
                currentPage.value = page;
                error.value = null;
            } else {
                error.value = response.Error || 'Unknown error occurred';
            }
        } catch (err) {
            error.value = 'An error occurred while fetching data';
        }
    };

    return { searchQuery, searchYear, searchType, searchResults, totalResults, error, currentPage, performSearch };
});