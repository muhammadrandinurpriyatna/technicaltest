import { defineStore } from 'pinia';

interface ApiResponse {
    Title: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Poster: string;
    imdbRating: string;
    Rated: string;
    Runtime: string;
    Country: string;
    Released: string;
}

interface MovieDetails {
    title: string;
    genre: string;
    director: string;
    actors: string;
    plot: string;
    poster: string;
    rating: string;
    rated: string;
    runtime: string;
    country: string;
    released: string;
}

export const useDetailsStore = defineStore('detailsStore', {
    state: () => ({
        detailsList: null as MovieDetails | null,
        fetchError: '',
        loading: false,
    }),
    actions: {
        async fetchDetail(imdbID: string) {
            this.loading = true;
            try {
                const apiKey = 'a272881f';
                const response = await $fetch<ApiResponse>(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
                this.detailsList = {
                    title: response.Title,
                    genre: response.Genre,
                    director: response.Director,
                    actors: response.Actors,
                    plot: response.Plot,
                    poster: response.Poster,
                    rating: response.imdbRating,
                    rated: response.Rated,
                    runtime: response.Runtime,
                    country: response.Country,
                    released: response.Released,
                };
                this.fetchError = ''
            } catch (error) {
                this.fetchError = 'Failed to fetch movie details';
                this.detailsList = null;
            } finally {
                this.loading = false;
            }
        },
    },
});