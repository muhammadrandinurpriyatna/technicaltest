<template>
    <div class="mt-70">
        <AppSearch />
    </div>
</template>
  
<script setup lang="ts">
    import { onMounted } from 'vue';
    import { useSearchStore } from '~/stores/searches';
  
    const searchStore = useSearchStore();
  
    onMounted(async () => {
        await searchStore.performSearch();
    });
</script>