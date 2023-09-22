/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,,ts,tsx,}'],
	theme: {
		extend: {
			colors: {
				primary: '#620801',
				primaryDark: '#b30000',
				secondary: '#F2F2F2',
				accent: '#FFC107',

		},
	}
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
