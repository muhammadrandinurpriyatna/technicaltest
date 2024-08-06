<script setup lang="ts">
import { ref, watch } from 'vue';
import { useSearchStore } from '~/stores/searches';

const searchStore = useSearchStore();
const searchResults = ref(searchStore.searchResults);
const currentPage = ref(searchStore.currentPage);
const hasMorePages = ref(false);
const isLoading = ref(false);
const error = ref(searchStore.error);

watch(() => searchStore.searchResults, (newResults) => {
    searchResults.value = newResults;
}, { immediate: true });

watch(() => searchStore.totalResults, (totalResults) => {
    hasMorePages.value = searchStore.searchResults.length < totalResults;
}, { immediate: true });

watch(() => searchStore.error, (newError) => {
    error.value = newError;
    if (newError) {
        searchResults.value = [];
    }
}, { immediate: true });

const loadMore = async () => {
    if (isLoading.value || !hasMorePages.value || error.value) return;

    isLoading.value = true;
    await searchStore.performSearch(currentPage.value + 1);
    isLoading.value = false;
};
</script>

<template>
    <div class="section section--catalog">
        <div class="container">
            <div v-if="!error" class="row">
                <div v-for="item in searchResults" :key="item.imdbID" class="col-6 col-sm-4 col-lg-3 col-xl-2">
                    <div class="item">
                        <NuxtLink :to="'/' + item.imdbID" class="item__cover">
                            <img :src="item.Poster === 'N/A' ? '/img/covers/1.png' : item.Poster" alt="">
                            <span class="item__play">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/>
                                </svg>
                            </span>
                        </NuxtLink>
                        <div class="item__content">
                            <h3 class="item__title">
                                <NuxtLink :to="'/' + item.imdbID">{{ item.Title }}</NuxtLink>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="error" class="row">
                <div class="col-12">
                    <p class="text-danger text-center my-5">{{ error }}</p>
                </div>
            </div>
            <div v-if="!error" class="row">
                <div class="col-12">
                    <div v-if="isLoading" class="section__btn">
                        <div class="spinner-border text-light z-1" role="status"></div>
                    </div>
                    <button v-if="hasMorePages && !isLoading" @click="loadMore" class="section__btn">
                        <span>More</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>