import { defineStore } from 'pinia';
import type { Movie, ApiResponse } from './types';

export const useSeriesStore = defineStore('seriesStore', {
  state: () => ({
    seriesList: [] as Movie[],
    fetchError: '',
    totalResults: 0,
    currentPage: 1,
    totalPages: 1,
    loading: false, // Menambahkan state loading
  }),
  actions: {
    async fetchSeries(page: number = 1) {
      this.loading = true; // Set loading menjadi true saat mulai fetch
      try {
        const apiKey = 'a272881f'; // Ganti dengan API key Anda
        const response = await $fetch<ApiResponse>(`http://www.omdbapi.com/?s=series&y=2024&page=${page}&apikey=${apiKey}`);

        if (response.Response === 'True') {
          // Update the movies list based on the current page
          if (page === 1) {
            this.seriesList = response.Search;
          } else {
            this.seriesList = [...this.seriesList, ...response.Search];
          }

          // Calculate total pages based on totalResults (assuming 10 results per page)
          this.totalResults = parseInt(response.totalResults, 10);
          this.totalPages = Math.ceil(this.totalResults / 10);
          this.currentPage = page;
        } else {
          this.fetchError = response.Error || 'Unknown error occurred';
        }
      } catch (err) {
        this.fetchError = 'Failed to fetch data';
      } finally {
        this.loading = false; // Set loading menjadi false setelah fetch selesai
      }
    },
    loadMore() {
      if (this.currentPage < this.totalPages && !this.loading) {
        this.fetchSeries(this.currentPage + 1);
      }
    }
  }
});