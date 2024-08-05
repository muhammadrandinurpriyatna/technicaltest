<script setup lang="ts">
	import { useMoviesStore } from '~/stores/movies';
	import { useSeriesStore } from '~/stores/series';
	import { useEpisodesStore } from '~/stores/episodes';

	const moviesStore = useMoviesStore();
	const seriesStore = useSeriesStore();
	const episodesStore = useEpisodesStore();

	const loadMoreMovies = () => {
		moviesStore.loadMore();
	};
	const loadMoreSeries = () => {
		seriesStore.loadMore();
	};
	const loadMoreEpisodes = () => {
		episodesStore.loadMore();
	};

	await moviesStore.fetchMovies();
	await seriesStore.fetchSeries();
	await episodesStore.fetchEpisodes();
</script>

<template>
    <section class="content">
		<div class="content__head">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h2 class="content__title">Film Terpopuler Tahun 2024</h2>
						<ul class="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
							<li class="nav-item" role="presentation">
								<button id="1-tab" class="active" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Movie</button>
							</li>
							<li class="nav-item" role="presentation">
								<button id="2-tab" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Series</button>
							</li>
							<li class="nav-item" role="presentation">
								<button id="3-tab" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Episode</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="tab-content">
				<div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab" tabindex="0">
					<div class="row">
						<div v-if="moviesStore.fetchError" class="col-12 col-sm-12 col-lg-12 col-xxl-12 my-5">
							<p class="text-center text-danger">{{ moviesStore.fetchError }}</p>
						</div>
						<div v-if="!moviesStore.fetchError" v-for="movie in moviesStore.moviesList" :key="movie.imdbID" class="col-6 col-sm-4 col-lg-3 col-xl-2">
							<div class="item">
								<a href="#" class="item__cover">
									<img :src="movie.Poster" :alt="movie.Title + ' poster'">
									<span class="item__play">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
									</span>
								</a>
								<div class="item__content">
									<h3 class="item__title"><a href="#">{{ movie.Title }}</a></h3>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12" v-if="moviesStore.currentPage < moviesStore.totalPages">
                            <div class="section__btn" v-if="moviesStore.loading">
                                <div class="spinner-border text-light z-1" role="status"></div>
                            </div>
                            <button class="section__btn" @click="loadMoreMovies" v-if="!moviesStore.loading">
                                <span>More</span>
                            </button>
                        </div>
					</div>
				</div>
				<div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab" tabindex="0">
					<div class="row">
						<div v-if="seriesStore.fetchError" class="col-12 col-sm-12 col-lg-12 col-xxl-12 my-5">
							<p class="text-center text-danger">{{ seriesStore.fetchError }}</p>
						</div>
						<div v-if="!seriesStore.fetchError" v-for="series in seriesStore.seriesList" :key="series.imdbID" class="col-6 col-sm-4 col-lg-3 col-xl-2">
							<div class="item">
								<a href="#" class="item__cover">
									<img :src="series.Poster" :alt="series.Title + ' poster'">
									<span class="item__play">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
									</span>
								</a>
								<div class="item__content">
									<h3 class="item__title"><a href="#">{{ series.Title }}</a></h3>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12" v-if="seriesStore.currentPage < seriesStore.totalPages">
                            <div class="section__btn" v-if="seriesStore.loading">
                                <div class="spinner-border text-light z-1" role="status"></div>
                            </div>
                            <button class="section__btn" @click="loadMoreSeries" v-if="!seriesStore.loading">
                                <span>More</span>
                            </button>
                        </div>
					</div>
				</div>
				<div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab" tabindex="0">
					<div class="row">
						<div v-if="episodesStore.fetchError" class="col-12 col-sm-12 col-lg-12 col-xxl-12 my-5">
							<p class="text-center text-danger">{{ episodesStore.fetchError }}</p>
						</div>
						<div v-if="!episodesStore.fetchError" v-for="episode in episodesStore.episodesList" :key="episode.imdbID" class="col-6 col-sm-4 col-lg-3 col-xl-2">
							<div class="item">
								<a href="#" class="item__cover">
									<img :src="episode.Poster" :alt="episode.Title + 'poster'">
									<span class="item__play">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
									</span>
								</a>
								<div class="item__content">
									<h3 class="item__title"><a href="#">{{ episode.Title }}</a></h3>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12" v-if="episodesStore.currentPage < episodesStore.totalPages">
                            <div class="section__btn" v-if="episodesStore.loading">
                                <div class="spinner-border text-light z-1" role="status"></div>
                            </div>
                            <button class="section__btn" @click="loadMoreEpisodes" v-if="!episodesStore.loading">
                                <span>More</span>
                            </button>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>