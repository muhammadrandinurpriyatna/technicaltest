(function (window, document, undefined) {
	'use strict';

	if (document.querySelector('.header')) {
		const headerBtn = document.querySelector('.header__btn');
		const headerNav = document.querySelector('.menu');

		function toggleHeaderMenu() {
			headerBtn.classList.toggle('header__btn--active');
			headerNav.classList.toggle('menu--active');
		}

		headerBtn.addEventListener('click', toggleHeaderMenu);
	}
})(window, document);