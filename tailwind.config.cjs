/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,,ts,tsx,}'],
	theme: {
		extend: {
			colors: {
				primary: '#800000',
				primaryDark: '#4c1a19',
				secondary: '#F2F2F2',
				accent: '#FFC107',

		},
	}
	},
	plugins: [],
}
