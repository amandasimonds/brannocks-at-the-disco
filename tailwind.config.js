/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				robotoslab: ['"Roboto Slab"', 'cursive'],
			},
			keyframes: {
				slideInLeft: {
					'0%': { translate: '400px', opacity: '0' },
					'80%': { translate: '-20px', opacity: '.75' },
					'100%': { translate: '0px', opacity: '1' },
				},
				slideInRight: {
					'0%': { translate: '-400px', opacity: '0' },
					'80%': { translate: '20px', opacity: '.75' },
					'100%': { translate: '0px', opacity: '1' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideInTop: {
					'0%': { transform: 'translateY(-400px)', opacity: '0' },
					'100%': { transform: 'translateY(0px)', opacity: '1' },
				},
			},
			animation: {
				'slide-in-left': 'slideInLeft 1.5s ease-in-out',
				'fade-in': 'fadeIn 1.5s ease-in-out',
				'slide-in-top': 'slideInTop 1.5s ease-in-out',
				'slide-in-right': 'slideInRight 1.5s ease-in-out'
			},
		},
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
