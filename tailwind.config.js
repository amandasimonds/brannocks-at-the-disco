/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: { Merriweather: ['"Roboto Slab"', 'serif'] },
		colors: {
			green: '#354e2f',
			greenlight: '#687c4d',
			rust: '#af5f32',
			orange: '#d0671f',
			blue: '#3f4f62',
			graylight: '#9fa092',
			gray: '#717171',
			graydark: '#2d2d2d',
			white: '#ffffff',
		},
	},
	plugins: [],
};
