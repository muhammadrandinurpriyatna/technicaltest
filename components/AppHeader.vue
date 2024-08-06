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
								<input type="text" class="mx-3" placeholder="Title">
								<input type="text" class="mx-3" placeholder="Year">
								<select class="select-menu">
									<option value="" selected disabled>Type</option>
									<option value="movie">Movie</option>
									<option value="series">Series</option>
									<option value="episode">Episode</option>
								</select>
								<button class="search_btn mx-3">
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