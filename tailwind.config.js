const colors = require('tailwindcss/colors');
delete colors.lightBlue;
module.exports = {
	// purge: elimina las clases que no se ocupen de tailwind, con el fin de optimizar el codigo
	purge: [ './public/**/*.html', './src/**/*.js' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'wave-pattern': 'url(../img/wave-white.png)',
				'wave-pattern-dots': 'url(../img/pattern-white-dots.png)',
				'pattern-characters-red': "url('../img/pattern-characters-red.png')",
				'character-mario': "url('../img/character-l.png')",
				'wave-pink': "url('../img/wave-pink.png')",
				'yellow-dots': "url('../img/pattern-yellow-dots.png')",
			}),
		},
		colors: {
			...colors,
			current: 'currentColor',
			transparent: 'transparent',
		},
		screens: {
			xsm: '320px',
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	variants: {
		borderWidth: [ 'responsive', 'hover', 'focus' ],
		extend: {},
	},
	plugins: [],
};
