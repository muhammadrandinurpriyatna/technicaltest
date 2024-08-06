// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	app: {
		head: {
			link: [
				{ rel: 'stylesheet', href:  '/css/bootstrap.min.css'},
				{ rel: 'stylesheet', href:  '/css/main.css'},
			],
			script: [
				{ src: '/js/bootstrap.bundle.min.js', type: 'text/javascript', defer: true },
				{ src: '/js/main.js', type: 'text/javascript', defer: true },
			],
		}
	},
	modules: [
		'@pinia/nuxt',
	],
})
