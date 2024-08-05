// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	app: {
		head: {
			link: [
				{ rel: 'stylesheet', href:  '/css/bootstrap.min.css'},
				{ rel: 'stylesheet', href:  '/css/splide.min.css'},
				{ rel: 'stylesheet', href:  '/css/slimselect.css'},
				{ rel: 'stylesheet', href:  '/css/plyr.css'},
				{ rel: 'stylesheet', href:  '/css/photoswipe.css'},
				{ rel: 'stylesheet', href:  '/css/default-skin.css'},
				{ rel: 'stylesheet', href:  '/css/main.css'},
			],
			script: [
				{ src: '/js/bootstrap.bundle.min.js', type: 'text/javascript', defer: true },
				{ src: '/js/splide.min.js', type: 'text/javascript', defer: true },
				{ src: '/js/smooth-scrollbar.js', type: 'text/javascript', defer: true },
				{ src: '/js/slimselect.min.js', type: 'text/javascript', defer: true },
				{ src: '/js/plyr.min.js', type: 'text/javascript', defer: true },
				{ src: '/js/photoswipe.min.js', type: 'text/javascript', defer: true },
				{ src: '/js/photoswipe-ui-default.min.js', type: 'text/javascript', defer: true },
				{ src: '/js/main.js', type: 'text/javascript', defer: true },
			],
		}
	},
	modules: [
		'@pinia/nuxt',
	],
})
