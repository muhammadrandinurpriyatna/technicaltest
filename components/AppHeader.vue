<script setup lang="ts">
	import { useSearchStore } from '~/stores/searches';
	import Swal from 'sweetalert2';

	const searchStore = useSearchStore();
	const router = useRouter();
	const searchQuery = ref(searchStore.searchQuery);
	const searchYear = ref(searchStore.searchYear);
	const searchType = ref(searchStore.searchType);

	const search = async () => {
		if (!searchQuery.value) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Title is required',
			});
			return;
		}
		
		searchStore.searchQuery = searchQuery.value;
		searchStore.searchYear = searchYear.value;
		searchStore.searchType = searchType.value;
		await searchStore.performSearch();
		router.push('/search');
	};
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header__content">
                        <NuxtLink to="/" class="header__logo">
                            <img src="/img/logo.svg" alt="logo image">
                        </NuxtLink>
                        <div class="header__actions">
                            <div class="header__search">
                                <input v-model="searchQuery" type="text" class="mx-3" placeholder="Title">
                                <input v-model="searchYear" type="number" class="mx-3" placeholder="Year">
                                <select v-model="searchType" class="select-menu">
                                    <option value="" selected disabled>Type</option>
                                    <option value="movie">Movie</option>
                                    <option value="series">Series</option>
                                    <option value="episode">Episode</option>
                                </select>
                                <button @click="search" class="search_btn mx-3">
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>
                        <button class="header__btn" type="button">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>