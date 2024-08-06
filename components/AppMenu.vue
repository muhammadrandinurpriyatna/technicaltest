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

		const headerBtn = document.querySelector('.header__btn.header__btn--active') as HTMLElement;
		if (headerBtn) {
			headerBtn.click();
		}
	};
</script>

<template>
    <div class="menu">
		<div class="menu__search">
			<input v-model="searchQuery" type="text" class="my-3" placeholder="*Title">
            <input v-model="searchYear" type="number" class="my-3" placeholder="Year">
            <select v-model="searchType" class="select-menu my-3">
                <option value="" selected disabled>Type</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
            </select>
            <button @click="search" class="search_btn my-3">
                <span>Search</span>
            </button>
		</div>
	</div>
</template>