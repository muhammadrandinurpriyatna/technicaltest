import { defineStore } from 'pinia';
import type { Movie, ApiResponse } from './types';

export const useEpisodesStore = defineStore('episodesStore', {
    state: () => ({
        episodesList: [] as Movie[],
        fetchError: '',
        totalResults: 0,
        currentPage: 1,
        totalPages: 1,
        loading: false,
    }),
    actions: {
        async fetchEpisodes(page: number = 1) {
            this.loading = true;
            try {
                const apiKey = 'a272881f';
                const response = await $fetch<ApiResponse>(`https://www.omdbapi.com/?s=episode&y=2024&page=${page}&apikey=${apiKey}`);

                if (response.Response === 'True') {
                    if (page === 1) {
                        this.episodesList = response.Search;
                    } else {
                        this.episodesList = [...this.episodesList, ...response.Search];
                    }

                    this.totalResults = parseInt(response.totalResults, 10);
                    this.totalPages = Math.ceil(this.totalResults / 10);
                    this.currentPage = page;
                } else {
                    this.fetchError = response.Error || 'Unknown error occurred';
                }
            } catch (err) {
                this.fetchError = 'Failed to fetch data';
            } finally {
                this.loading = false;
            }
        },
        loadMore() {
            if (this.currentPage < this.totalPages && !this.loading) {
                this.fetchEpisodes(this.currentPage + 1);
            }
        }
    }
});