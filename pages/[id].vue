<script setup lang="ts">
    import { useDetailsStore } from '@/stores/details';

    const route = useRoute();
    const detailsStore = useDetailsStore();
    const id = String(route.params.id);

    await detailsStore.fetchDetail(id);
</script>

<template>
    <section class="section section--details" v-if="!detailsStore.loading">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="section__title section__title--head">
                        {{ detailsStore.detailsList?.title }}
                    </h1>
                </div>
                <div class="col-12">
                    <div class="item item--details">
                        <div class="item__cover">
                            <img :src="detailsStore.detailsList?.poster === 'N/A' ? '/img/covers/1.png' : detailsStore.detailsList?.poster" :alt="detailsStore.detailsList?.title">
                        </div>
                        <div class="item__content">
                            <div class="item__wrap">
                                <span class="item__rate">{{ detailsStore.detailsList?.rating }}</span>
                                <ul class="item__list">
                                    <li v-for="rated in detailsStore.detailsList?.rated.split(', ')" :key="rated">{{ rated }}</li>
                                </ul>
                            </div>
                            <ul class="item__meta">
                                <li><span>Genre:</span> {{ detailsStore.detailsList?.genre }}</li>
                                <li><span>Running time:</span> {{ detailsStore.detailsList?.runtime }}</li>
                                <li><span>Country:</span> <a>{{ detailsStore.detailsList?.country }}</a></li>
                                <li><span>Released:</span> {{ detailsStore.detailsList?.released }}</li>
                            </ul>
                            <ul class="item__meta item__meta--second">
                                <li><span>Director:</span> <a>{{ detailsStore.detailsList?.director }}</a></li>
                                <li><span>Actors:</span> <a>{{ detailsStore.detailsList?.actors }}</a></li>
                            </ul>
                        </div>
                        <div class="item__description item__description--details">
                            <p>{{ detailsStore.detailsList?.plot }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-else>
        <p>Loading...</p>
    </section>
    <section v-if="detailsStore.fetchError">
        <p>Error: {{ detailsStore.fetchError }}</p>
    </section>
</template>