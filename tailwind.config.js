/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				playfair: ['"Playfair Display"', 'sans-serif'],
				helloloved: ['"Hello Loved"', 'cursive'],
			},
			keyframes: {
				slideInLeft: {
					'0%': { translate: '400px', opacity: '0' },
					'80%': { translate: '-10px', opacity: '.75' },
					'100%': { translate: '0px', opacity: '1' },
				},
				slideInRight: {
					'0%': { translate: '-400px', opacity: '0' },
					'80%': { translate: '10px', opacity: '.75' },
					'100%': { translate: '0px', opacity: '1' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInDelay: {
					'0%': { opacity: '0' },
					'50%': { opacity: '0' },
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
				'slide-in-right': 'slideInRight 1.5s ease-in-out',
				'fade-in-delay': 'fadeInDelay 3s ease-in-out'
			},
		},
		colors: {
			green: '#354e2f',
			greenlight: '#687c4d',
			greenlight2: '#89A466',
			rust: '#D77E61',
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
