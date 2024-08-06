<template>
    <div class="menu">
		<div class="menu__search">
			<input type="text" class="my-3" placeholder="Title">
			<input type="number" class="my-3" placeholder="Year">
			<select class="select-menu my-3">
				<option value="" selected disabled>Type</option>
				<option value="movie">Movie</option>
				<option value="series">Series</option>
				<option value="episode">Episode</option>
			</select>
			<button class="search_btn my-3">
                <span>Search</span>
            </button>
		</div>
	</div>
</template>