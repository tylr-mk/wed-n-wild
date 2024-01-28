// Generated color palettes
const accent = { 200: '#bacec7', 600: '#3b7967', 900: '#1e3830', 950: '#182823' };
const gray = {
	100: '#fff5e8',
	200: '#ffead1',
	300: '#d7bd9d',
	400: '#b2813b',
	500: '#794e00',
	700: '#4e3100',
	800: '#382100',
	900: '#241400',
};

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	// content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue},./node_modules/name_package/**/**/*.{css,scss}"],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		// Remove the following screen breakpoint or add other breakpoints
		// if one breakpoint is not enough for you
		screens: {
			sm: '640px',
		},

		// Uncomment the following extend
		// if existing Tailwind color palette will be used

		extend: {
			textColor: {
				skin: {
					base: withOpacity('--sl-color-gray-4'),
					accent: withOpacity('--color-accent'),
					inverted: withOpacity('--sl-color-white'),
				},
			},
			backgroundColor: {
				skin: {
					fill: withOpacity('--sl-color-white'),
					accent: withOpacity('--color-accent'),
					inverted: withOpacity('--sl-color-gray-4'),
					card: withOpacity('--color-card'),
					'card-muted': withOpacity('--color-card-muted'),
				},
			},
			outlineColor: {
				skin: {
					fill: withOpacity('--color-accent'),
				},
			},
			borderColor: {
				skin: {
					line: withOpacity('--color-border'),
					fill: withOpacity('--sl-color-gray-4'),
					accent: withOpacity('--color-accent'),
				},
			},
			fill: {
				skin: {
					base: withOpacity('--sl-color-gray-4'),
					accent: withOpacity('--color-accent'),
				},
				transparent: 'transparent',
			},
			// colors: {
			//   // Your preferred accent color. Indigo is closest to Starlight’s defaults.
			//   accent: colors.indigo,
			//   // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
			//   gray: colors.zinc,
			// },
			colors: { accent, gray },

			fontFamily: {
				// 'display': ['"Red Hat Display"'],
				// 'body': ['"Open Sans"'],
				// Your preferred text font. Starlight uses a system font stack by default.
				sans: ['"Open Sans Variable"'],
				// Your preferred code font. Starlight uses system monospace fonts by default.
				mono: ['"Source Code Pro Variable"'],
				magazine: ['Aboreto'],
			},
		},
		// },
	},
	plugins: [require('@tailwindcss/typography')],
};
